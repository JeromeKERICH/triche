import { ArrowRightIcon } from "lucide-react";

export const CaseStudy = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Real Results from Clients Like You
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">NGO Website Transformation</h3>
              <p className="text-gray-600 mb-6">
                Before working with us, this Morning Star struggled without engagement. We completely designed their digital presence with a conversion-focused approach.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="text-emerald-600 font-bold text-2xl mb-1">3×</div>
                  <div className="text-gray-700 text-sm">More Donations</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-orange-600 font-bold text-2xl mb-1">210%</div>
                  <div className="text-gray-700 text-sm">More Leads</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="text-emerald-600 font-bold text-2xl mb-1">40%</div>
                  <div className="text-gray-700 text-sm">Lower Bounce</div>
                </div>
              </div>
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center">
                See Full Case Study
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-96">
              {/* Placeholder for before/after slider */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Before/After Visual
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};