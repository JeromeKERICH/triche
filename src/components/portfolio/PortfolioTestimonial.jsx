export const TestimonialGrid = () => {
  const testimonials = [
    {
      quote: "Emmanuel translated our ideas into a real, functioning, impactful site. He made it easy.",
      author: "Lucy Kariuki.",
      role: "Founder, ThrivingMomSpace"
    },
    {
      quote: "Clients now trust our brand just from visiting the website that's the magic of a great dev.",
      author: "Pst. Stephen Rotich",
      role: "Director, MorningStar Rehab"
    },
    {
      quote: "We went from outdated to outstanding in just 4 weeks. The ROI was immediate.",
      author: "Elizabeth N.",
      role: "CEO, EcoVital Consulting"
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-serif drop-shadow-sm">
          Client <span className="text-emerald-600">Feedback</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <svg className="h-8 w-8 text-emerald-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-orange-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};