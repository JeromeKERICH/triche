export const ExpectationsSection = () => {
  return (
  <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Purposeful, Adaptable Websites That <span className="text-emerald-600">Make an Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md mb-3">
          {[
            "Showcase your mission clearly",
            "Speak to different audiences effectively",
            "Help share updates and track impact",
            "Easy to manage, no coding experience needed",
            "Accessible and responsive",
            "Strong impression on donors/partners"
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-2">
              <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 italic">
            "We don't just build websites, we build platforms for impact."
          </p>
        </div>
      </div>
    </section>
  );
};