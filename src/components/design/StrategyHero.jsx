export const StrategyHero = () => {
  return (
     <section className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 lg:py-15">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans drop-shadow-lg">
          A website shouldn't just exist,<br />
          it should <span className="text-emerald-400">work for your business</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          If you've rebuilt your website multiple times and still don't feel proud or worse, still aren't seeing results, it's not your fault.
          <br /><br />
          You didn't need a website first. You needed a strategy.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          Book Your Website Strategy Call
        </button>
      </div>
        </div>
    </section>
  );
};