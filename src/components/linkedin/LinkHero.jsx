import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const LinkedInHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-sans drop-shadow-lg">
            The <span className="text-emerald-600">LinkedIn-to-Client™</span> Website System
          </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Turn your LinkedIn profile into a client-converting machine
         
          Now let's give your audience a place to land, and a reason to buy.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
          Take the 1-Minute Survey
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </button>
        <p className="text-gray-400 mt-4 text-sm">Get Your Free Website Blueprint</p>
      </div>
    </section>
  );
};