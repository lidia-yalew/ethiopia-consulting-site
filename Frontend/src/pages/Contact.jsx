import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import HeroBanner from '../Componets/Herobanner';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  // Contact information
  const contactInfo = {
    name: "Tadael Seyoum",
    email: "tadaelseyo@gmail.com",
    phone: "+251 93 325 1194",
    address: "Addis Ababa, Ethiopia"
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      'service_htkk8hm',
      'template_5af2efa',
      form.current,
      '-mQRfI-tsuF5wu9R8'
    )
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      showAlertMessage('✓ Message sent successfully! We will get back to you within 24 hours.', 'success');
      setTimeout(() => setSubmitted(false), 5000);
      setLoading(false);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      showAlertMessage('✗ Failed to send message. Please try again or call us directly.', 'error');
      setLoading(false);
    });
  };

  return (
    <div>
      {/* Custom Alert Popup */}
      {showAlert && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
            alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white min-w-[300px] max-w-md`}>
            <CheckCircle className="w-6 h-6" />
            <p className="font-medium">{alertMessage}</p>
            <button 
              onClick={() => setShowAlert(false)}
              className="ml-auto hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <HeroBanner 
        title="Contact Us"
        subtitle="Let's discuss how we can help your business grow"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="scroll-animate">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to transform your business? Reach out to Tadael Seyoum and let's start the conversation.
              </p>
              
              <div className="space-y-6">
                {/* Contact Person */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Contact Person</p>
                    <p className="text-[#D4AF37]">{contactInfo.name}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Mail className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Phone className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Phone / WhatsApp</p>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="text-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Address</p>
                    <p className="text-[#D4AF37]">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Clock className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Working Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="card scroll-animate">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Send Us a Message</h2>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1E3A5F] text-white py-3 rounded-lg font-semibold hover:bg-[#2B5A8C] transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              {/* WhatsApp Alternative */}
              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm mb-2">Or reach us directly on WhatsApp</p>
                <a
                  href="https://wa.me/251933251194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#20b859] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-12 scroll-animate">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789012!2d38.763611!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b8c8e8e8e9%3A0x123456789abcdef!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Located in the heart of Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;