import { useState } from 'react';
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';


const LeadCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const response = await fetch('/api/send-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name })
    });

    // Check if response is OK before parsing JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    setIsSuccess(true);
    setEmail('');
    setName('');
  } catch (err) {
    console.error('Error:', err);
    setError(err.message || 'Failed to submit. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <DocumentTextIcon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-serif drop-shadow-sm">
            Get My Free Guide: <span className="text-orange-400 ">"From LinkedIn to Clients"</span>
          </h2>
          <p className="text-xl text-gray-300">
            Learn how to turn your LinkedIn content into a steady stream of clients
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-900/30 border border-emerald-500 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">Check Your Inbox!</h3>
            <p className="text-gray-300 mb-4">
              We've sent your free guide to your email. Don't forget to check spam folder.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-orange-400 hover:text-orange-300 font-medium underline"
            >
              Request another copy
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm py-2 px-3 bg-red-50 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="flex items-start">
                  <input
                    id="consent"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to receive the free guide and occasional emails with valuable content.
                    I can unsubscribe anytime.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-white font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      Send Me the Free Guide
                    </>
                  )}
                </button>
              </form>
            </div>
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadCaptureSection;