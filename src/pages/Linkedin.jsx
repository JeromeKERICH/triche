import { CheckCircleIcon } from '@heroicons/react/24/solid';


const LinkedInToClientSystem = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-emerald-600">LinkedIn-to-Client™</span> Website System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your LinkedIn audience into paying clients with a strategic conversion system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* What You Get Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="text-xl font-bold text-white">✅ What You Get</h3>
              <p className="text-gray-300">Deliverables that convert</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "High-converting website that turns viewers into clients",
                  "Content-to-Client Conversion Map for your niche",
                  "Lead Capture System with email integration",
                  "Client Booking Setup (Calendly/TidyCal)",
                  "Optimized Sales/Services Page",
                  "Simple Analytics Setup",
                  "Mobile-first, fast-loading design"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who It's For Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-emerald-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">🎯 Perfect For</h3>
              <p className="text-emerald-100">Is this you?</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "LinkedIn creators not monetizing their audience",
                  "Coaches & consultants wanting more booked calls",
                  "Service providers ready to scale",
                  "Personal brands needing a digital home",
                  "Experts getting likes but not clients"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-800 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">Not sure if this fits?</h4>
                <p className="text-orange-700 text-sm">Book a free 15-min consultation to see if we're a match</p>
              </div>
            </div>
          </div>

          {/* Impact + CTA Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-orange-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">💥 The Impact</h3>
              <p className="text-orange-100">What you'll achieve</p>
            </div>
            <div className="p-6 flex flex-col h-full">
              <div className="flex-grow">
                <ul className="space-y-4 mb-6">
                  {[
                    "System to capture & convert your audience",
                    "Turn lurkers into leads automatically",
                    "24/7 client acquisition while you sleep",
                    "Go from 'I get likes' to 'I get clients'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">⏳ Urgency</h4>
                  <p className="text-gray-600 text-sm">
                    Every day without this system means leaving money on the table. I only take on a limited number of creators monthly.
                  </p>
                </div>
              </div>
              
              <div className="mt-auto">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                  Let's Build Your Conversion Engine
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Limited spots available this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInToClientSystem;