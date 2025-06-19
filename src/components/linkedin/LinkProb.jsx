export const LinkedInProblem = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Most LinkedIn Creators Are Building on <span className="text-orange-500">Borrowed Land</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visibility ≠ Conversion</h3>
            <ul className="space-y-3">
              {[
                "People love your content but don't know how to work with you",
                "Your 'link in bio' goes to a random Notion doc or PDF",
                "You're answering the same DMs and questions daily",
                "Potential clients slip through the cracks"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
            <p className="text-gray-700 mb-4">
              You need a <span className="font-bold">strategic home base</span> that:
            </p>
            <ul className="space-y-3">
              {[
                "Converts profile visitors into clients",
                "Showcases your offers clearly",
                "Automates lead capture",
                "Works 24/7 while you create content"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};