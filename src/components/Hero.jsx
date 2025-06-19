import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative bg-gray-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold leading-tight mb-6 drop-shadow-lg font-serif">
              Turn <span className="text-emerald-600">VISITORS</span> Into Clients with a Strategic Website
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-lg drop-shadow-sm font-serif">
              Attract leads, boost sales, and position yourself as the go-to authority in your industry without the tech stress.
            </p>
            <div className="flex flex-row sm:flex-row gap-4 text-sm">
              <Link to="#" className="bg-emerald-600 hover:bg-emerald-500 text-white text-center text-sm font-bold font-sans py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                Get Started Now
              </Link>
              <Link to="/portfolio" className="border-2 text-center border-orange-500 hover:border-orange-500 text-black font-semibold font-sans py-2 px-6 rounded-lg transition-all duration-300">
                See Our Work
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                    alt="Happy client"
                  />
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                <p>Trusted by 100+ businesses</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">5.0 (42 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-gray-500 text-sm ml-4">trichenest.com</div>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 p-8 rounded-lg text-white text-center">
                  <h3 className="text-sm font-bold mb-2">Triche Nest</h3>
                  <p className="mb-6">The #1 Solution for your Online Business</p>
                  <a href='https://calendly.com/trichenest/30min' className="bg-orange-500 text-sm hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-all duration-300">
                    Book a Free Consultation
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="text-emerald-400 font-bold text-xl mb-1">+150%</div>
                    <div className="text-gray-400 text-sm">Lead Increase</div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="text-orange-400 font-bold text-xl mb-1">+80%</div>
                    <div className="text-gray-400 text-sm">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;