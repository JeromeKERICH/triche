export const FinalLinkedInCTA = () => {
  
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif drop-shadow-sm">
          You've Built an Audience. <span className="text-orange-400">Now Monetize It.</span>
        </h2>
        <p className="text-l text-gray-300 mb-8 max-w-3xl mx-auto">
          Take 60 seconds to get your custom LinkedIn-to-Clients™ checklist and let's build a site that works as hard as you do.
        </p>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
          Coming Soon
        </button>
        
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {[
            "No obligation",
            "100% customized",
            "Get your blueprint",
            "See pricing options"
          ].map((item, index) => (
            <div key={index} className="flex items-justify text-gray-400">
              <svg className="h-4 w-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};