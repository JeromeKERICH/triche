import { BoltIcon } from '@heroicons/react/16/solid';
import { BanIcon, ChartBarBigIcon, ChartBarIcon, CircleArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const ProblemSolutionSection = () => {
  const problemsSolutions = [
    {
      problem: "Your website is just a digital business card",
      problemIcon: <BanIcon className="h-8 w-8 text-orange-500" />,
      solution: "We build strategic funnels that convert visitors",
      solutionIcon: <CircleArrowRightIcon className="h-8 w-8 text-emerald-500" />
    },
    {
      problem: "You're leaving money on the table with weak calls-to-action",
      problemIcon: <ChartBarIcon className="h-8 w-8 text-orange-500" />,
      solution: "Data-backed CTAs that get 3-5x more clicks",
      solutionIcon: <BoltIcon className="h-8 w-8 text-emerald-500" />
    },
    {
      problem: "Your brand doesn't stand out from competitors",
      problemIcon: <BanIcon className="h-8 w-8 text-orange-500" />,
      solution: "Unique positioning that makes you the obvious choice",
      solutionIcon: <ChartBarBigIcon className="h-8 w-8 text-emerald-500" />
    }
  ];

  return (
    <section className="relative bg-gray-200 py-5 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          
          <p className="text-l md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Most business websites are costing owners money without them even realizing it.
          </p>
        </div>

        {/* Problem/Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problemsSolutions.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-50 rounded-lg mr-4">
                  {item.problemIcon}
                </div>
                <h3 className="text-l font-semibold text-gray-900">{item.problem}</h3>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-emerald-50 rounded-lg mr-4">
                  {item.solutionIcon}
                </div>
                <p className="text-gray-700">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-l md:text-3xl font-bold mb-6 drop-shadow-lg font-serif">
              We build websites with <span className="text-orange-300">strategy</span><br />
              that work 24/7 to grow your brand and get you leads.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <Link to="/learn" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/20">
                How It Works
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;