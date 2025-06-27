import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Launchpad", path: "/learn" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}>
      <div className="container max-w-5xl mx-auto lg:py-2 px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-6 ">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Triche Nest Logo"
              className="h-10 w-auto transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-1 py-2 text-sm font-medium transition-colors relative group ${location.pathname === link.path ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-500'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a
              href="https://calendly.com/trichenest/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 flex items-center"
            >
              Book a Call
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center py-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-500 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-4 pb-4  space-y-1 bg-white shadow-xl rounded-b-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-500'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://calendly.com/trichenest/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-3 py-3 rounded-md text-base font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:from-orange-600 hover:to-amber-600 transition-colors"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;