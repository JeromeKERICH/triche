export const NGOProblem = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Why So Many NGO & Education Websites <span className="text-red-500">Miss the Mark</span>
          </h2>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-red-500">
          <p className="text-gray-700 mb-6">
            Even with the best intentions and funding, most nonprofit and education websites fail to deliver because:
          </p>
          <ul className="space-y-4">
            {[
              "The process started with design, not purpose",
              "No clear audience or content strategy",
              "No one asked about long-term usability",
              "It became a 'showpiece,' not a working platform",
              "Updates require a developer for every small change"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700 font-medium">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-700 font-semibold">
              The result? A site that looks okay but doesn't serve the people it was built for, or reflect the power of your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};