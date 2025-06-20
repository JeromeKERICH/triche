export const FinalStrategyCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Stop Guessing, &<br />
          Start Building <span className="text-emerald-400">the Smart Way</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Book your free strategy call and let's map out what your business actually needs to grow online.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Book Strategy Call
          </button>
          <button className="border-2 border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};