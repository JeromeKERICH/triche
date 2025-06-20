import { useState, useEffect } from 'react';
import { 
  Monitor, 
  RefreshCw, 
  Users, 
  Wrench, 
  BarChart2, 
  Search, 
  ShoppingCart, 
  Rocket 
} from 'lucide-react';

export const ServicesGrid = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: "Web Foundation",
      icon: <Monitor className="h-5 w-5" />,
      items: [
        {
          name: "Custom Website Design",
          icon: <Monitor className="h-8 w-8 text-emerald-500" />,
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "1-week launch timeline",
            "Mobile-optimized design",
            "SEO-ready structure",
            "3 conversion-focused pages"
          ],
          link: "#custom-websites"
        },
        {
          name: "Website Revamp Service",
          icon: <RefreshCw className="h-8 w-8 text-emerald-500" />,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Conversion audit report",
            "UX/UI improvements",
            "Speed optimization",
            "Content restructuring"
          ],
          link: "#revamps"
        },
        {
          name: "E-Commerce Solutions",
          icon: <ShoppingCart className="h-8 w-8 text-emerald-500" />,
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Shopify/Webflow stores",
            "Checkout optimization",
            "Product showcase design",
            "Payment integration"
          ],
          link: "#ecommerce"
        }
      ]
    },
    {
      title: "Accelerators",
      icon: <Rocket className="h-5 w-5" />,
      items: [
        {
          name: "LinkedIn Creator Packages",
          icon: <Users className="h-8 w-8 text-orange-500" />,
          image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Profile-to-website funnel",
            "Lead capture system",
            "Content showcase pages",
            "Audience segmentation"
          ],
          link: "#linkedin-packages"
        },
        {
          name: "Performance Analytics",
          icon: <BarChart2 className="h-8 w-8 text-orange-500" />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Monthly reports",
            "Conversion tracking",
            "A/B testing setup",
            "Goal configuration"
          ],
          link: "#analytics"
        },
        {
          name: "Launch Boost Package",
          icon: <Rocket className="h-8 w-8 text-orange-500" />,
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Pre-launch checklist",
            "Email sequence setup",
            "Social media integration",
            "Traffic generation plan"
          ],
          link: "#launch-boost"
        }
      ]
    },
    {
      title: "Ongoing Support",
      icon: <Wrench className="h-5 w-5" />,
      items: [
        {
          name: "Care Plans",
          icon: <Wrench className="h-8 w-8 text-emerald-500" />,
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Weekly backups",
            "Security updates",
            "Bug fixes",
            "Uptime monitoring"
          ],
          link: "#care-plans"
        },
        {
          name: "SEO Maintenance",
          icon: <Search className="h-8 w-8 text-emerald-500" />,
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          benefits: [
            "Keyword tracking",
            "Content updates",
            "Backlink monitoring",
            "Technical SEO fixes"
          ],
          link: "#seo-maintenance"
        }
      ]
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-start md:text-center font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Web Solutions Built for Results
          </h2>
        </div>

        {/* Mobile Tabs */}
        {isMobile && (
          <div className="flex mb-6 border-b border-gray-200">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-1 ${activeTab === index ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {service.icon}
                {service.title}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="space-y-12">
          {isMobile ? (
            <ServiceCard group={services[activeTab]} />
          ) : (
            services.map((group, groupIdx) => (
              <ServiceCard key={groupIdx} group={group} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ group }) => {
  return (
    <div className="space-y-6">
      {!group.icon && ( // Only show title if not mobile (where we have tabs)
        <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.items.map((service, serviceIdx) => (
          <div 
            key={serviceIdx} 
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group"
          >
            <div 
              className="h-40 bg-cover bg-center rounded-lg mb-4 relative overflow-hidden"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {service.icon}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h4>
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);