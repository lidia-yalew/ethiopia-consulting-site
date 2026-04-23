import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, CheckCircle } from 'lucide-react';
import HeroBanner from '../Componets/Herobanner';

const Services = () => {
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

  const pillars = [
    { title: "Marketing & Brand Strategy", desc: "Culturally resonant positioning, omni-channel campaigns, and brand stories for Ethiopian consumers", icon: "📢" },
    { title: "Revenue Operations (RevOps)", desc: "Integrated KPI tracking, dashboard creation, and process automation", icon: "⚙️" },
    { title: "Product & Pricing Strategy", desc: "Value-based pricing models and promotional strategies for price-sensitive markets", icon: "💰" },
    { title: "Sales & Distribution Excellence", desc: "Route-to-market strategies, distributor optimization, and digital sales integrations", icon: "🚚" },
    { title: "Go-to-Market & Expansion", desc: "New product launches, geographic expansion, and emerging digital channels", icon: "🌍" }
  ];

  const services = [
    {
      title: "Commercial Operations Diagnostic",
      description: "Data-driven deep-dive assessment of your revenue engine",
      features: ["GTM & Funnel Effectiveness", "Team Capability Assessment", "Technology & Metrics"],
      icon: "📊"
    },
    {
      title: "AI & MarTech Diagnostic",
      description: "Transform marketing into AI-enabled capability",
      features: ["People & Processes", "Technology Stack", "AI Governance"],
      icon: "🧠"
    },
    {
      title: "Independent Consultancy",
      description: "Strategic advisory from former commercial leaders",
      features: ["Fractional Leaders", "Interim Management", "Mentoring"],
      icon: "👥"
    },
    {
      title: "Brand Strategy",
      description: "Define and deliver strategic marketing and brand aspirations",
      features: ["Brand Positioning", "Customer Experience", "Campaign Planning"],
      icon: "🎨"
    },
    {
      title: "Sales Optimisation",
      description: "Enhance sales performance and revenue growth",
      features: ["Sales Process", "Team Training", "Performance Metrics"],
      icon: "📈"
    },
    {
      title: "Digital Transformation",
      description: "Leverage technology for business growth",
      features: ["MarTech Implementation", "Automation", "Data Analytics"],
      icon: "💻"
    }
  ];

  return (
    <div>
      <HeroBanner 
        title="Our Services"
        subtitle="Comprehensive solutions tailored to your business needs"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 5 Pillars Section */}
          <div className="mb-16 scroll-animate">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                <Target className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-sm">Our Expertise</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Five Interconnected Pillars</h2>
              <p className="text-gray-600">Specialized in commercial growth across Ethiopia's fast-changing market</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-lg hover:border-[#D4AF37]/30 hover:shadow-md transition-all bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{pillar.icon}</span>
                    <h3 className="font-bold text-[#1E3A5F]">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm pl-10">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card scroll-animate group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 scroll-animate">
            <Link 
              to="/contact" 
              className="bg-[#1E3A5F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2B5A8C] transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg transform hover:scale-105"
            >
              Discuss Your Needs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;