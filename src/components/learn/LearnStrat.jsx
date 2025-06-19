export const StrategySection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            From Window Display to <span className="text-orange-600">Sales Engine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How strategic design transforms websites into your hardest-working employee
          </p>
        </div>

        {/* Key Difference Visual */}
        <div className="mt-5 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">The Core Difference</h3>
              <p className="text-emerald-100 max-w-2xl mx-auto">
                Traditional websites wait for visitors to figure things out. Strategic websites guide them to action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Passive vs Active",
                  desc: "From displaying info to driving action"
                },
                {
                  icon: (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Features vs Results",
                  desc: "From what we do to what you gain"
                },
                {
                  icon: (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Guesswork vs Strategy",
                  desc: "From hoping to knowing what works"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="text-emerald-300 mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-emerald-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};