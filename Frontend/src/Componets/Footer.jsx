import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { siteContent } from '../data/content';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2A44] text-white relative mt-20">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ArrowUp className="w-5 h-5 text-[#0F2A44]" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[#D4AF37] text-xl font-bold mb-4">Maria Theresa</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Flexible, on-demand growth leadership consultancy connecting Ethiopian businesses with proven experts.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300">
                <FaLinkedin className="w-4 h-4 hover:text-[#0F2A44]" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300">
                <FaTwitter className="w-4 h-4 hover:text-[#0F2A44]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link to="/diagnostics" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">Diagnostics</Link></li>
              <li><Link to="/consultancy" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">Consultancy</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${siteContent.contact.phone}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{siteContent.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">Get latest updates</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0F2A44] p-1 rounded-lg hover:scale-105 transition-all duration-300"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-xs mt-2">✓ Subscribed!</p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">{siteContent.footer.copyright}</p>
            <div className="flex gap-5 text-xs">
              <Link to="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Terms</Link>
              <Link to="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;