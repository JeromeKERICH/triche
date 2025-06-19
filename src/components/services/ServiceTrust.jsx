import { CheckBadgeIcon, BoltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export const TrustSection = () => {
  return (
<section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Why Smart Brands Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Over templates and "quick fix" solutions
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <CheckBadgeIcon className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">100% Tailored</h3>
           
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <BoltIcon className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">90+ Scores</h3>
            
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <DevicePhoneMobileIcon className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Mobile-First</h3>
            
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src="https://randomuser.me/api/portraits/women/45.jpg" 
              alt="Sarah M." 
              className="w-16 h-16 rounded-full border-2 border-white shadow-md mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <blockquote className="text-lg text-gray-800 mb-4">
                "As an NGO, we needed more than just a pretty site. Emmanuel delivered a 3X increase in donor conversions while making our team feel supported throughout."
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">Prisca Muyodi</p>
                <p className="text-emerald-600">Founder, Toto Village</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};