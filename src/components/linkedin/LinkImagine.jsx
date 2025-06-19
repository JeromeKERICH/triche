import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const ImagineSection = () => {
  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Imagine If
          </span>
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Your Website Did <span className="text-orange-600">All This...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md">
          {[
            "Your audience instantly understands what you do",
            "Visitors see who you help and how",
            "Your best work speaks for itself",
            "Testimonials build trust immediately",
            "Clear next steps guide visitors to book/buy",
            "No confusion, just conversion"
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
              <p className="ml-3 text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 h-64 md:h-auto">
              {/* Placeholder for website mockup */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Website Mockup
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LinkedIn-Ready Website</h3>
              <p className="text-gray-600 mb-4">
                A conversion-focused site that turns your LinkedIn audience into paying clients.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Mobile-optimized design",
                  "Lightning-fast performance",
                  "Clear call-to-actions",
                  "Integrated booking/payments"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div>
                    </div>
                    <p className="ml-2 text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                See Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};