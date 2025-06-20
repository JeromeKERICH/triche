export const NGOSolution= () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Custom Solutions
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Your Organization Doesn't Fit in a <span className="text-emerald-600">Box</span>
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Whether you need a:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Donation-ready fundraising site",
              "Educational content hub",
              "Stakeholder portal",
              "Impact reporting system",
              "Multi-language setup",
              "Something completely unique"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-2 text-gray-700 font-medium">{item}</p>
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-blue-800">
              We'll help you define it, structure it, and build it with a long-term view in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};