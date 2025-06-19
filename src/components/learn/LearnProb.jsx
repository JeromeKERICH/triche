export const ProblemSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            <span className="text-orange-500">80% of websites fail</span> to deliver results
          </h2>
          <p className="text-xl text-gray-600">
            Not because of bad design but because they were built backwards.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900">Here's what typically goes wrong:</h3>
          <ul className="space-y-4">
            {[
              "The site is built with no goal in mind (just 'get online')",
              "There's no clear message or positioning",
              "It doesn't guide visitors to take action (no journey, no funnel)",
              "The business owner thought 'if I build it, people will come'"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-500">
          <h4 className="font-bold text-gray-900 mb-2">Truth bomb:</h4>
          <p className="text-gray-700">
            A beautiful website that doesn't bring you leads, sales, or engagement is a digital brochure not a business tool.
          </p>
        </div>
      </div>
    </section>
  );
};