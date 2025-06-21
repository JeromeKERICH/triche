import { useState } from 'react';
import { PackageModal } from './PackageModal'; // Import the modal component

export const LinkedinPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const packages = [
    {
      id: 1,
      name: "Starter Spark",
      color: "emerald",
      price: 99,
      description: "For new creators who want credibility fast",
      features: [
        "Custom domain setup",
        "3-page branded personal site",
        "LinkedIn CTA setup",
        "Mobile friendly",
        "SEO optimized",
        "Fast performance",
        "1 revision round"
      ],
      idealFor: "Creators testing offers or growing presence"
    },
    {
      id: 2,
      name: "Growth Engine",
      color: "orange",
      price: 250,
      description: "For creators turning content into income",
      features: [
        "Custom domain setup",
        "5+ page strategic site",
        "Calendly/booking integration",
        "Email list capture",
        "Portfolio/testimonials",
        "Social-media integration",
        "2 revision rounds"
      ],
      idealFor: "Coaches, freelancers, service providers",
      featured: true
    },
    {
      id: 3,
      name: "Authority Builder™",
      color: "blue",
      price: 600,
      description: "For creators ready to scale",
      features: [
        "Custom domain setup",
        "Everything in Growth Engine",
        "Blog/content section",
        "Lead magnet system",
        "Custom checkout",
        "Advanced analytics",
        "3 revision rounds"
      ],
      idealFor: "Consultants, speakers, thought leaders"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-black text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
              Tailored Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
              For Every <span className="text-emerald-600">Creator Stage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic packages designed to match your current growth phase
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg 
                  ${pkg.color === 'emerald' ? 'border-emerald-600' : 
                    pkg.color === 'orange' ? 'border-orange-600' : 'border-blue-900'}
                  ${pkg.featured ? 'lg:-translate-y-6 shadow-xl' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute top-8 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-8 -translate-y-2 w-40 text-center">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`${pkg.color === 'emerald' ? 'bg-emerald-600' : 
                                 pkg.color === 'orange' ? 'bg-orange-600' : 'bg-blue-900'} 
                                 p-6 text-white ${pkg.featured ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="opacity-90">{pkg.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${pkg.price}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-gray-900 mb-3">Deliverables</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 mt-1 ${pkg.color === 'emerald' ? 'text-emerald-500' : 
                                                               pkg.color === 'orange' ? 'text-orange-500' : 'text-blue-900'}`}>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium">Perfect for:</span> {pkg.idealFor}
                  </div>
                  
                  <button 
                    onClick={() => handlePackageSelect(pkg)}
                    className={`mt-6 w-full ${pkg.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : 
                                                          pkg.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 
                                                          'bg-blue-900 hover:bg-blue-700'} 
                                                          text-white font-medium py-3 rounded-lg transition-colors duration-300
                                                          ${pkg.featured ? 'transform hover:scale-105' : ''}`}
                  >
                    Get {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Need something customized? Let's tailor a solution for your specific needs.
            </p>
            <button className="border-2 border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Discuss Custom Project
            </button>
          </div>
        </div>
      </section>

      {/* Package Modal */}
      {isModalOpen && selectedPackage && (
        <PackageModal 
          pkg={selectedPackage} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};