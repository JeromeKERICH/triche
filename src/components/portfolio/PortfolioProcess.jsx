import { 
  MessageCircle, 
  Layout, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  FileText,
  Presentation,
  Smartphone,
  Server
} from 'lucide-react';

export const DesignProcess = () => {
  const steps = [
    {
      title: "Discovery Call",
      description: "We start with a 30-minute conversation to understand your business goals, target audience, and project requirements.",
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Research & Strategy",
      description: "Competitor analysis, user persona development, and creation of a comprehensive design strategy document.",
      icon: <FileText className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-100"
    },
    {
      title: "Wireframing",
      description: "Low-fidelity wireframes to establish the information architecture and user flow of your website.",
      icon: <Layout className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "UI Design",
      description: "High-fidelity mockups with your brand colors, typography, and visual elements that reflect your identity.",
      icon: <Palette className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-100"
    },
    {
      title: "Development",
      description: "Conversion of designs into a fully functional website with clean, optimized code and responsive behavior.",
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Content Integration",
      description: "Seamless integration of your content with SEO best practices implemented throughout.",
      icon: <Presentation className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-100"
    },
    {
      title: "Testing",
      description: "Cross-browser and device testing, performance optimization, and user experience refinement.",
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "Launch & Training",
      description: "Deployment of your website and training session to manage your content through the CMS.",
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-100"
    }
  ];

  const features = [
    {
      title: "Fast Delivery",
      description: "Typical projects completed in 1-2 weeks",
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "User-Focused",
      description: "Designs centered on your audience's needs",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Responsive",
      description: "Flawless performance on all devices",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Optimized",
      description: "Built for speed and SEO from the start",
      icon: <Server className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our <span className="text-emerald-600">Design Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, step-by-step approach to creating websites that drive results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${step.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-serif">
            What Makes Our <span className="text-orange-600">Process Different</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-50 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};