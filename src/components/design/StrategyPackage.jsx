import { useState } from 'react';
import { StrategyPackageModal } from './StrategyModal';

export const StrategyPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const packages = [
    {
      id: 1,
      name: "Clarity Starter",
      color: "emerald",
      price: 150,
      description: "For solopreneurs or new businesses",
      features: [
        "Domain and hosting setup",
        "3 pages (Home, About, Contact)",
        "Mobile-first responsive design",
        "WhatsApp/Email integration",
        "Strategy session included",
        "Delivered in 7-10 days"
      ],
      idealFor: "Personal brands, freelancers, new businesses"
    },
    {
      id: 2,
      name: "Business Builder",
      color: "orange",
      price: 350,
      description: "For service providers ready to grow",
      features: [
        "Free Domain & Hosting for 1 year",
        "5 pages (Home, About, Services, Portfolio, Contact)",
        "Paystack integration",
        "Lead capture system",
        "One-click bookings",
        "Copy & content guidance",
        "Strategy + launch plan"
      ],
      idealFor: "Coaches, consultants, agencies",
      featured: true
    },
    {
      id: 3,
      name: "Custom Growth",
      color: "red",
      price: 500,
      description: "Tailored, high-performance builds",
      features: [
        "Free Domain & Hosting for 1 year",
        "Everything in Business Builder",
        "7+ custom pages",
        "Blog/lead magnet setup",
        "Checkout or client portal",
        "Advanced integrations",
        "Full strategy + content",
        "Performance optimization"
      ],
      idealFor: "Growing teams, high-ticket businesses"
    }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-black text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
              Strategic Solutions
            </span>
            <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
              Website Packages for <span className="text-emerald-600">Every Growth Stage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic solutions tailored to where you are in your business journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg 
                  ${pkg.color === 'emerald' ? 'border-emerald-600' : 
                    pkg.color === 'orange' ? 'border-orange-600' : 'border-red-600'}
                  ${pkg.featured ? 'lg:-translate-y-6 shadow-xl' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute top-8 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-8 -translate-y-2 w-40 text-center">
                    RECOMMENDED
                  </div>
                )}
                
                <div className={`${pkg.color === 'emerald' ? 'bg-emerald-600' : 
                                 pkg.color === 'orange' ? 'bg-orange-600' : 'bg-red-600'} 
                                 p-6 text-white ${pkg.featured ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="opacity-90">{pkg.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${pkg.price}</span>
                    {pkg.price === 500 && <span className="text-sm opacity-80">+</span>}
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 mt-1 ${pkg.color === 'emerald' ? 'text-emerald-500' : 
                                                               pkg.color === 'orange' ? 'text-orange-500' : 'text-red-500'}`}>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium">Ideal for:</span> {pkg.idealFor}
                  </div>
                  
                  <button 
                    onClick={() => handlePackageSelect(pkg)}
                    className={`mt-6 w-full ${pkg.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : 
                                                          pkg.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 
                                                          'bg-red-600 hover:bg-red-700'} 
                                                          text-white font-medium py-3 rounded-lg transition-colors duration-300
                                                          ${pkg.featured ? 'transform hover:scale-105' : ''}`}
                  >
                    Get {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Modal */}
      {isModalOpen && selectedPackage && (
        <StrategyPackageModal 
          pkg={selectedPackage} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};