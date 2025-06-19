export const PortfolioCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-5 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-serif drop-shadow-lg">
          Your project could be next on this list
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
          If you're ready for a strategic website that gets results, let's talk.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-600  text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
          <a href="https://calendly.com/trichenest/30min" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Book Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};