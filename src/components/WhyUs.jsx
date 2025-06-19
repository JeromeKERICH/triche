import { ChartBarIcon, CheckCheckIcon, GlobeIcon } from "lucide-react";


const TrustSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Why Work With Us 
          </h2>
          <p className="text-xl text-gray-600 font-sans">
            We are results-focused web strategists and developers who helps brands build with purpose.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <CheckCheckIcon className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">20+ Projects</h3>
            <p className="text-gray-600">Successfully completed</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <GlobeIcon className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">Global Reach</h3>
            <p className="text-gray-600">Based in Kenya, serving clients worldwide</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <ChartBarIcon className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">Conversion Focus</h3>
            <p className="text-gray-600">Strategy first, then code</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-10 border border-emerald-100">
          <div className="flex items-start">
            <svg className="h-8 w-8 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="ml-4">
              <blockquote className="text-lg text-gray-800 mb-4">
                "Emmanuel transformed our online presence completely. Within 3 months of launching our new strategic website, we saw a 200% increase in qualified leads. He understands both the technical and business sides better than any developer we've worked with."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Sarah K." 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Miriam Maru</p>
                  <p className="text-emerald-600">Founder, Fiery Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;