import { CheckBadgeIcon, BoltIcon, DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { supabase } from '../../library/supabaseClient'; // Adjust this import to match your Supabase client location

export const TrustSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submissionError } = await supabase
        .from('service_requests')
        .insert([formData])
        .select();

      if (submissionError) {
        throw submissionError;
      }

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        project_type: '',
        message: ''
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'An error occurred while submitting your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Why Smart Brands Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Beyond templates and "quick fix" solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <CheckBadgeIcon className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">100% Tailored</h3>
            <p className="text-gray-600">Every website is custom-built to your needs</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <BoltIcon className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">90+ Scores</h3>
            <p className="text-gray-600">Performance and SEO optimized</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <DevicePhoneMobileIcon className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Mobile-First</h3>
            <p className="text-gray-600">Optimized for all devices</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Request a Free Consultation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setError(null);
                setSubmitSuccess(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Request Our Services
              </h3>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckBadgeIcon className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We've received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type *
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select an option</option>
                        <option value="Website Design">Website Design</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Web Application">Seo Maintenance</option>
                        <option value="Redesign">Web Revamp</option>
                        <option value="Linkedin">LinkedIn Package</option>
                        <option value="Perfomance">Analytics</option>
                        <option value="Content">Content Management</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      ></textarea>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm py-2">
                        {error}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : 'Submit Request'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};