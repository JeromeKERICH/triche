export const FAQSection = () => {
  const faqs = [
    {
      question: "How do you ensure my site actually converts?",
      answer: "Every site includes strategic content mapping, proven CTA placement, mobile optimization, and a 3-round testing process to maximize conversions."
    },
    {
      question: "What if I need changes after launch?",
      answer: "All projects include 30 days of free adjustments plus affordable ongoing care plans for continuous optimization."
    },
    {
      question: "What platform do you build with?",
      answer: "I use modern technologies like React + Vite with Supabase for fast, secure, and scalable websites that outperform WordPress sites."
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};