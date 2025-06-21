import { useState } from 'react';
import { X } from 'lucide-react';


export const LinkedInSurveyModal = ({ isOpen, onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    industry: '',
    services: '',
    targetAudience: '',
    uniqueValue: '',
    websiteGoal: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            {currentStep === 1 ? "Tell us about yourself" : 
             currentStep === 2 ? "Your professional details" : 
             "Final details for your blueprint"}
          </h3>
          
          <form onSubmit={handleFormSubmit}>
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Your Profession</label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Services You Offer</label>
                  <textarea
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows="3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Target Audience</label>
                  <input
                    type="text"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">What makes you unique?</label>
                  <textarea
                    name="uniqueValue"
                    value={formData.uniqueValue}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows="2"
                    required
                  />
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Main Website Goal</label>
                  <select
                    name="websiteGoal"
                    value={formData.websiteGoal}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select one...</option>
                    <option value="Generate leads">Generate leads</option>
                    <option value="Sell products">Sell products</option>
                    <option value="Book consultations">Book consultations</option>
                    <option value="Build authority">Build authority</option>
                    <option value="Showcase portfolio">Showcase portfolio</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                  <p className="text-gray-400 text-sm mt-1">We'll send your blueprint here</p>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg"
                  disabled={!formData.name || !formData.profession || !formData.industry}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Generating Your Blueprint...' : 'Get My Blueprint'}
                  {isSubmitting && (
                    <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};