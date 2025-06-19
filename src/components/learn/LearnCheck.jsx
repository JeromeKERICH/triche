export const ChecklistCTA = () => {
  return (
   <section className="relative bg-gradient-to-br from-gray-900 to-black py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif drop-shadow-sm">
          Get Your Free Website Readiness Checklist
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Answer a few quick questions, and I'll send you a customized checklist tailored to your goals, business type, and readiness level.
        </p>
        
        <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left mb-6">
            {[
              "Content you need",
              "Pages you should include",
              "Tech to consider",
              "Tools to stay focused",
              "Pre-launch checklist",
              "Post-launch actions"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                </div>
                <span className="ml-2 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Take the 1-Minute Survey
          </button>
          <p className="text-gray-500 text-sm mt-3">No fluff. Just clarity.</p>
        </div>
      </div>
    </section>
  );
};