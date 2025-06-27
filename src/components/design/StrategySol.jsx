import { Link } from "react-router-dom";

export const SolutionSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            The Solution
          </span>
          <h2 className="text-2xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            What You <span className="text-emerald-600">Really Need</span> Before You Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md mb-3">
          {[
            "What does your business actually need right now?",
            "Who are you trying to attract?",
            "What action should visitors take?",
            "Do you need content created?",
            "What's your bigger goal: sales or leads?",
            "How will you measure success?"
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-2">
              <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};