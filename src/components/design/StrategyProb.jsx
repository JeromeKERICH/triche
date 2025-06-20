export const StrategyProblem = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            The Reality
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Why Most Websites <span className="text-red-500">Waste Time and Money</span>
          </h2>
        </div>

        <div className="bg-red-50 p-6 md:p-8 rounded-xl border-l-4 border-red-500 mb-8">
          <p className="text-lg text-gray-800 mb-4">
            Too many people jump straight into design without a clear plan. What you end up with is a nice-looking site that:
          </p>
          <ul className="space-y-3">
            {[
              "Doesn't attract the right clients",
              "Doesn't explain what you offer clearly",
              "Has weak or missing calls-to-action",
              "Ultimately doesn't bring in business"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-800">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-gray-600">
          If this sounds familiar, you're not alone. Most people waste thousands building and rebuilding without a proper website foundation.
        </p>
      </div>
    </section>
  );
};