import { Link } from "react-router-dom"
import { Facebook, Linkedin, LinkedinIcon, Mail, Phone,  } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Triche Nest</h4>
          <p className="text-sm">Transformative websites that drive your business forward.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/learn" className="hover:text-primary">Learn</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> <span>(+254) 788 120 422</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> <span>info@trichenest.com</span>
            </li>
            <li className="flex gap-3 mt-3">
              <a href="https://www.linkedin.com/in/emmanuelkerich" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
              <a href="https://wa.me/254788120422" target="_blank" rel="noopener noreferrer"><Phone /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook/></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Emmanuel Kerich. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
