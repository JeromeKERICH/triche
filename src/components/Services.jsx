
import { ArrowRightIcon, ArrowUp10Icon, LightbulbIcon, SchoolIcon, ShieldIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const ServicesPreview = () => {
  const services = [
    {
      title: "Website Strategy & Design",
      description: "Complete websites designed to convert visitors into clients from day one",
      icon: <LightbulbIcon className="h-8 w-8 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      link: "#website-strategy" // Replace with actual link
    },
    {
      title: "Landing Pages for LinkedIn Creators",
      description: "High-converting pages that turn your audience into paying clients",
      icon: <ArrowUp10Icon className="h-8 w-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/linkedin" 
    },
    {
      title: "NGO & Educational Websites",
      description: "Mission-driven designs that amplify your impact and credibility",
      icon: <SchoolIcon className="h-8 w-8 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      link: "#ngo-websites" // Replace with actual link
    },
    {
      title: "Ongoing Support & Growth",
      description: "Continuous optimization to keep your site performing at its peak",
      icon: <ShieldIcon className="h-8 w-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      link: "#ongoing-support" // Replace with actual link
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-start md:text-center md:text-4xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
            Solutions Designed to Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Strategic web solutions tailored to your specific goals and audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div 
                className="h-40 bg-cover bg-center relative" 
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-l font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{service.description}</p>
              </div>
              <div className="px-6 pb-3">
                <Link to={service.link} 
                  className="inline-flex text-sm items-center mt-0 text-orange-600 hover:text-emerald-800 font-medium transition-colors duration-300 group-hover:underline"
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-sm text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            See All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="mt-4 text-gray-600">
            or{' '}
            <a href='https://calendly.com/trichenest/30min' className="text-emerald-600 hover:text-emerald-800 font-semibold underline">
              Let's Talk About Your Project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;