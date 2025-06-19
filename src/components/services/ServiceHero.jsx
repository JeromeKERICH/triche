
import { ArrowRightIcon } from 'lucide-react';

export const ServiceHero = () => {
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
            Get more than a website <span className="text-emerald-400">get a digital asset</span> that sells, serves, and scales with you.
          </h1>
          <p className="text-x md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a solopreneur, creator, NGO, or business, We offer tailored web solutions that attract the right audience, build credibility, and help you grow without tech overwhelm.
          </p>
          <div className="flex flex-row sm:flex-row justify-center gap-4">
            <a href='https://calendly.com/trichenest/30min' className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Book Free Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
              
          </div>
        </div>
      </div>
    </section>
  );
};