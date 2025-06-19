import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export const ProjectShowcase = () => {
  const projects = [
    {
      name: "Thriving Moms Space",
      type: "Personal Development Brand",
      challenge: "Create a nurturing space for moms juggling careers and parenting",
      solution: [
        "Calming, responsive blog layout",
        "Community-building elements",
        "Mobile-first UX for busy moms"
      ],
      results: [
        "4x increase in time-on-site",
        "200+ moms engaged in first 3 weeks"
      ],
      quote: "I wanted a safe space for moms — Emmanuel brought that vision to life beautifully.",
      image: "/assets/triv.jpg",
      link: "https://thrivingmomspace.com"
    },
    {
      name: "MorningStar Rehab",
      type: "Rehabilitation Centre",
      challenge: "No site to showcase services or accept inquiries",
      solution: [
        "Fresh, accessible redesign",
        "Integrated patient inquiry forms",
        "Improved rural accessibility"
      ],
      results: [
        "Site that tells their story",
        "Engagement increased with the 1st month"
      ],
      quote: "Our site now reflects our mission — clean, welcoming, and professional.",
      image: "/assets/morn.jpg",
      link: "https://morningstarrehab.org"
    },
    { 
      name: "EcoVital Consulting Group",
      type: "Consulting Firm",
      challenge: "Needed brand presence that built trust with clients and regulators",
      solution: [
        "Clean, professional design with SEO",
        "Dynamic certification displays",
        "Speed and credibility focus"
      ],
      results: [
        "Secured government partnership",
        "40% more inbound leads"
      ],
      quote: "We finally have a website that speaks for our credibility.",
      image: "/assets/eco.png",
      link: "https://ecovitalconsulting.com"
    },
    {
      name: "Fiery Network",
      type: "Content Hub",
      challenge: "Build a hub for resources and member engagement",
      solution: [
        "Engaging, event-ready design",
        "Integrated content library",
        "Modern yet approachable aesthetic"
      ],
      results: [
        "100+ signups in first 2 weeks",
        "Centralized community space"
      ],
      quote: "This site unified our network — done fast and with excellence.",
      image: "/assets/fier.png",
      link: "https://fierynetwork.com"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Auto-slide every 5 seconds on mobile
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (interval) clearInterval(interval);
    };
  }, [isMobile, projects.length]);

  return (
       <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-serif drop-shadow-sm">
          Featured <span className="text-emerald-600">Projects</span>
        </h2>
        
        {/* Desktop Grid (2x2) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-1">The Challenge:</h4>
                  <p className="text-gray-600">{project.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-1">Our solution</h4>
                  <ul className="space-y-1">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                        </div>
                        <p className="ml-2 text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-emerald-800 font-medium mt-4"
                >
                  Visit Live Site
                  <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="lg:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                  <div className="h-56 bg-gray-200 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2">
                      <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{project.challenge}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Our Solution:</h4>
                      <ul className="space-y-1">
                        {project.solution.slice(0, 2).map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                            </div>
                            <p className="ml-2 text-gray-600 text-sm">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-emerald-800 text-sm font-medium mt-2"
                    >
                      Visit Site
                      <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? 'bg-emerald-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};