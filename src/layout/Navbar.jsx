import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-primary" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="Triche Nest Logo"
            className="h-10 w-15 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center font-semibold font-sans">
          <Link to="/" className="hover:text-primary transition ">Home</Link>
          <Link to="/services" className="hover:text-primary transition">Services</Link>
          <Link to="/portfolio" className="hover:text-primary transition">Portfolio</Link>
          <Link to="/learn" className="hover:text-primary transition">Before You Build</Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-opacity-80 transition"
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 animate-fadeInDown font-semibold font-sans">
          <Link to="/" onClick={closeMenu} className="block text-gray-700">Home</Link>
          <Link to="/services" onClick={closeMenu} className="block text-gray-700">Services</Link>
          <Link to="/portfolio" onClick={closeMenu} className="block text-gray-700">Portfolio</Link>
          <Link to="/learn" onClick={closeMenu} className="block text-gray-700">Before You Build</Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block bg-emerald-500 text-white text-center px-4 py-2 rounded-full"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
