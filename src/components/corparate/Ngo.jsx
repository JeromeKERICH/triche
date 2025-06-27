export const NgoHero = () => {
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
          Websites that reflect your <span className="text-emerald-400">mission</span>,<br />
          and serve your people.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          You've tried to build (maybe even rebuilt) your website before, and it still doesn't capture who you are or what you stand for. We take a strategy-first approach to create websites that inspire trust, communicate clearly, and make an impact.
        </p>
        <a href="https://calendly.com/trichenest/30min" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20">
          Let's Discuss Your Project
        </a>
      </div>
        </div>
    </section>
  );
};