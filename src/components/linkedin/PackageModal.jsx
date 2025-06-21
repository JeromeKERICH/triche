import { useState, useCallback, Fragment, useRef, useEffect } from 'react';
import { supabase } from "../../library/supabaseClient";
import { usePaystack } from "../../hooks/usePaystack/";
import { Dialog, Transition } from '@headlessui/react';

export const PackageModal = ({ pkg, onClose }) => {
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    notes: '',
    payNow: true
  });
  
  const [currentStep, setCurrentStep] = useState('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  
  const { error: paystackError } = usePaystack();
  const paymentCallbacks = useRef({
    onSuccess: null,
    onClose: null
  });

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // Save order to database
  const saveOrder = async () => {
    const paymentRef = `PKG-${pkg.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    const { data, error } = await supabase
      .from('package_orders')
      .insert([{
        package_id: pkg.id,
        package_name: pkg.name,
        package_price: pkg.price,
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        business_name: formData.businessName,
        notes: formData.notes,
        status: 'pending_payment',
        deposit_amount: pkg.price * 0.5,
        total_amount: pkg.price,
        payment_reference: paymentRef,
        payment_method: 'paystack'
      }])
      .select();

    if (error) throw error;
    return { id: data[0].id, reference: paymentRef };
  };

  // Update order status
  const updateOrderStatus = async (reference, status, response) => {
    try {
      const { error } = await supabase
        .from('package_orders')
        .update({
          status: status === 'success' ? 'payment_received' : 'payment_failed',
          payment_status: status,
          payment_data: response,
          updated_at: new Date().toISOString()
        })
        .eq('payment_reference', reference);

      if (error) throw error;
    } catch (error) {
      console.error('Status update error:', error);
      throw new Error('Payment successful but status update failed');
    }
  };

  // Initialize Paystack payment
  const initializePaystack = useCallback((reference, email, name) => {
    try {
      const amountInKobo = Math.round(pkg.price * 0.5 * 100);
      
      paymentCallbacks.current.onSuccess = async (response) => {
        try {
          await updateOrderStatus(reference, 'success', response);
          setShowSuccess(true);
        } catch (error) {
          console.error('Payment success handling error:', error);
          setPaymentError('Payment verification failed');
          setCurrentStep('confirm');
        }
      };

      paymentCallbacks.current.onClose = () => {
        setPaymentError('Payment window was closed - you can try again');
        setCurrentStep('confirm');
      };

      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: amountInKobo,
        currency: 'NGN',
        ref: reference,
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: name
            },
            {
              display_name: "Package",
              variable_name: "package_name",
              value: pkg.name
            }
          ]
        },
        callback: (response) => paymentCallbacks.current.onSuccess(response),
        onClose: () => paymentCallbacks.current.onClose()
      });
      
      handler.openIframe();
      setPaymentInitialized(true);
    } catch (error) {
      console.error('Paystack initialization error:', error);
      setPaymentError(error.message || 'Payment initialization failed');
      setCurrentStep('confirm');
    }
  }, [pkg.name, pkg.price]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    if (formData.payNow) {
      setCurrentStep('confirm');
    } else {
      setIsSubmitting(true);
      try {
        await saveOrder();
        setShowSuccess(true);
      } catch (error) {
        setPaymentError(error.message || 'Failed to save order');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handle payment initiation
  const handlePayment = async () => {
    setIsSubmitting(true);
    setPaymentError(null);
    
    try {
      const { reference } = await saveOrder();
      setCurrentStep('payment');
      
      // Small delay to ensure state updates
      await new Promise(resolve => setTimeout(resolve, 50));
      
      initializePaystack(reference, formData.email, formData.name);
    } catch (error) {
      console.error('Payment processing error:', error);
      setPaymentError(error.message || 'Failed to process payment');
      setCurrentStep('confirm');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check Paystack loading status
  useEffect(() => {
    if (paystackError) {
      setPaymentError('Payment system failed to load. Please refresh the page.');
    }
  }, [paystackError]);

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 'form':
        return (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business/Project Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payNow"
                  name="payNow"
                  checked={formData.payNow}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="payNow" className="ml-2 block text-sm text-gray-700">
                  Pay 50% deposit now (${(pkg.price * 0.5).toFixed(2)}) via Paystack
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white ${
                  pkg.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : 
                  pkg.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 
                  'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Continue
              </button>
            </div>
          </form>
        );

      case 'confirm':
        return (
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Your Order</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium">{pkg.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Deposit Amount:</span>
                <span className="font-medium">${(pkg.price * 0.5).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Full Name:</span>
                <span className="font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{formData.email}</span>
              </div>
            </div>
            
            {paymentError && (
              <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{paymentError}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setCurrentStep('form')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                disabled={isSubmitting}
                className={`px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white ${
                  pkg.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : 
                  pkg.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 
                  'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              {paymentInitialized ? (
                <svg className="h-6 w-6 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {paymentInitialized ? 'Processing Payment' : 'Preparing Payment'}
            </h3>
            <p className="text-sm text-gray-500">
              {paymentInitialized 
                ? `Completing payment of $${(pkg.price * 0.5).toFixed(2)}...`
                : 'Initializing payment system...'}
            </p>
            {!paymentInitialized && paystackError && (
              <p className="text-sm text-red-500 mt-2">{paystackError}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };


  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className={`p-6 ${pkg.color === 'emerald' ? 'bg-emerald-600' : 
                         pkg.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'} text-white`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-xl font-semibold">${pkg.price}</p>
              </div>
              <button 
                onClick={onClose}
                className="text-white hover:text-gray-200"
                disabled={isSubmitting}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mt-2 opacity-90">{pkg.description}</p>
          </div>

          {renderStep()}
        </div>
      </div>

      {/* Success Dialog */}
      <Transition appear show={showSuccess} as={Fragment}>
        <Dialog as="div" className="relative z-60" onClose={() => {
          setShowSuccess(false);
          onClose();
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 mt-3"
                    >
                      {formData.payNow ? 'Payment Successful!' : 'Request Submitted!'}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {formData.payNow 
                          ? `Your deposit of $${(pkg.price * 0.5).toFixed(2)} has been received. We'll contact you shortly to begin your project.`
                          : 'We have received your request and will contact you shortly to arrange payment and begin your project.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      onClick={() => {
                        setShowSuccess(false);
                        onClose();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};