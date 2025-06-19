export const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Clarity First",
      description: "We define your core offering, target audience, and unique value proposition before writing a single line of code"
    },
    {
      step: 2,
      title: "Strategic Blueprint",
      description: "Create a conversion-focused site architecture and user journey map tailored to your business goals"
    },
    {
      step: 3,
      title: "Content Foundation",
      description: "Develop compelling messaging that speaks directly to your ideal clients' needs and desires"
    },
    {
      step: 4,
      title: "Mobile-First Design",
      description: "Build visually stunning interfaces that work perfectly across all devices (60%+ traffic comes from mobile)"
    },
    {
      step: 5,
      title: "Technical Excellence",
      description: "Implement blazing-fast performance (90+ Google scores) and SEO-optimized structure"
    },
    {
      step: 6,
      title: "Conversion Optimization",
      description: "Refine every element to guide visitors toward your desired action with clear CTAs and minimal friction"
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            <span className="text-orange-600">6-Step Process</span> for High-Performing Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A strategic approach that goes far beyond just "building a website"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div 
              key={step.step} 
              className="group relative bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="absolute -top-5 -left-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-600 text-white text-xl font-bold border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-orange-50 text-orange-700 rounded-full">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">This end-to-end process is what delivers 3-5x better results than standard websites</span>
          </div>
        </div>
      </div>
    </section>
  );
};