export const ApproachSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-600 text-white  text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            <span className="text-emerald-600">Strategy First.</span> Always.
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-emerald-600 p-8 text-white">
              <h3 className="text-xl font-bold mb-4">We Don't Start With Tech</h3>
              <p className="opacity-90">
                We begin by deeply understanding your goals, audiences, and content needs.
              </p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="font-bold text-gray-900 mb-4">Our process begins with questions like:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Who do you need to reach?",
                  "What do visitors need to find fast?",
                  "How will your team manage updates?",
                  "What content exists vs. what's missing?",
                  "What does success look like in 6 months?",
                  "What about in 2 years?"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <p className="ml-2 text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-orange-500 font-medium">
                  You'll walk away with clarity, not confusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};