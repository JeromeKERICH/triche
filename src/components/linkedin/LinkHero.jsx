import { useState } from 'react';
import { LinkedInSurveyModal } from './LinkedInSurveyModal';
import { ArrowRightIcon } from 'lucide-react';

export const LinkedInHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [isComingSoon, setIsComingSoon] = useState(false);

  const handleSubmitSurvey = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/generate-blueprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setReportData(data);
      } else {
        throw new Error(data.error || 'Failed to generate report');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate report. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReportData(null);
  };

  const handleComingSoon = () => {
    setIsComingSoon(true);
    setTimeout(() => setIsComingSoon(false), 3000); // Message disappears after 3 seconds
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ... existing background elements ... */}
      
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-sans drop-shadow-lg">
          The <span className="text-emerald-600">LinkedIn-to-Client™</span> Website System
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Turn your LinkedIn profile into a client-converting machine
          Now let's give your audience a place to land, and a reason to buy.
        </p>
        <div className="relative">
          <button 
            onClick={handleComingSoon}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            Take the 1-Minute Survey
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
          {isComingSoon && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              Coming Soon! We're working hard to deliver the best experience.
            </div>
          )}
        </div>
        <p className="text-gray-400 mt-4 text-sm">Get Your Free Website Blueprint</p>
      </div>

      {/* Keep the modal in the code but it won't be triggered */}
      <LinkedInSurveyModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        onSubmit={handleSubmitSurvey}
        reportData={reportData}
      />
    </section>
  );
};