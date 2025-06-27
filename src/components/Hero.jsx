import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import client1 from '/assets/liza.jpg';
import client2 from '/assets/about.jpg';
import client3 from '/assets/lucy.jpg';
import { supabase } from '../library/supabaseClient'; 

const clientImages = [client1, client2, client3];

const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'service',
    budget: '1000-3000'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const businessType = [
    { value: 'freelancer', label: 'Freelancer/Agency'},
    { value: 'startup', label: 'Startup/Tech' },
    { value: 'local', label: 'Local Business' },
    { value: 'blog', label: 'Blog/Content Creator' },
    { value: 'service', label: 'Service Business' },
    { value: 'ecommerce', label: 'E-commerce Store' },
    { value: 'consultant', label: 'Consultant/Coach' },
    { value: 'ngo', label: 'Non-Profit/Education' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '100-300', label: '$100 - $300' },
    { value: '500-700', label: '$500 - $700' },
    { value: '800-1000', label: '$800 - $1,000' },
    { value: '1000+', label: '$1,000+' },
    { value: 'unsure', label: 'Not Sure Yet' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const ipData = await fetch('https://api.ipify.org?format=json').then(res => res.json());
    
    const { error } = await supabase
      .from('getting_started')
      .insert([{
        name: formData.name,
        email: formData.email,
        business_type: formData.businessType,
        budget_range: formData.budget,
        ip_address: ipData.ip,
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }]);
    
    if (error) throw error;
    
    setSubmitSuccess(true);
    setTimeout(() => {
      onClose();
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        businessType: 'service',
        budget: '1000-3000'
      });
    }, 2000);
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    setIsSubmitting(false);
  }
};
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        
        {submitSuccess ? (
          <div className="text-center py-8">
            <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">We'll contact you soon to discuss your project.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h3>
            <p className="text-gray-600 mb-6">Tell us a bit about your business and we'll help you find the right solution.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {businessType.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Get Started'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <section className="relative bg-gray-200 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold leading-tight mb-6 drop-shadow-lg font-serif">
                Turn <span className="text-emerald-600">VISITORS</span> Into Clients with a Strategic Website
              </h1>
              <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-lg drop-shadow-sm font-serif">
                Attract leads, boost sales, and position yourself as the go-to authority in your industry without the tech stress.
              </p>
              <div className="flex flex-row sm:flex-row gap-4 text-sm">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="ml-4 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 flex items-center"
            
                >
                  Get Started Now
                </button>
                <Link to="/portfolio" className="ml-4 px-5 py-2.5 bg-white text-gray-800 text-sm border border-emerald-500 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 flex items-center">
                  See Our Work
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {clientImages.map((src, index) => (
                    <img 
                      key={index}
                      src={src}
                      className="w-10 h-10 rounded-full border-2 border-gray-800"
                      alt={`Client ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="text-gray-400 text-sm">
                  <p>Trusted by 10+ businesses</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1">5.0 (30+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-gray-500 text-sm ml-4">trichenest.com</div>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 p-8 rounded-lg text-white text-center">
                    <h3 className="text-sm font-bold mb-2">Triche Nest</h3>
                    <p className="mb-6">The #1 Solution for your Online Business</p>
                    <a href='https://calendly.com/trichenest/30min' className="bg-orange-500 text-sm hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-all duration-300">
                      Book a Free Consultation
                    </a>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="text-emerald-400 font-bold text-xl mb-1">+150%</div>
                      <div className="text-gray-400 text-sm">Lead Increase</div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="text-orange-400 font-bold text-xl mb-1">+80%</div>
                      <div className="text-gray-400 text-sm">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <GetStartedModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;