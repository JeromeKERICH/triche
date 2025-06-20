export const FinalNgoCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's build a website that reflects your <span className="text-teal-300">mission</span> and supports your <span className="text-blue-200">impact</span>.
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Whether you're fundraising, teaching, or mobilizing communities, your website should serve as a strategic tool, not just a placeholder.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Talk to an Expert
          </button>
          <button className="border-2 border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            Send Your Project Brief
          </button>
        </div>
        
      </div>
    </section>
  );
};