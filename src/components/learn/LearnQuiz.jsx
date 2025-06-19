export const QuestionsSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            The <span className="text-emerald-600">5 Questions</span> You MUST Answer
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're working with a designer, developer, or DIY-ing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              question: "Who is your website for?",
              detail: "Who are you talking to, and what do they want?"
            },
            {
              question: "What is the one action you want them to take?",
              detail: "Book a call? Buy something? Sign up? Don't leave them guessing."
            },
            {
              question: "Why should they choose you?",
              detail: "What makes you different, trustworthy, and relevant?"
            },
            {
              question: "Do you have your brand assets ready?",
              detail: "Logo, color scheme, photos, copy, social links, testimonials?"
            },
            {
              question: "What's your traffic plan?",
              detail: "A website with no visitors is a ghost town. What's your visibility strategy?"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="text-emerald-600 font-bold text-xl mb-2">{item.question}</div>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            <span className="font-bold">👉 If you can answer these confidently,</span> you're ahead of 90% of business owners already.
          </p>
        </div>
      </div>
    </section>
  );
};