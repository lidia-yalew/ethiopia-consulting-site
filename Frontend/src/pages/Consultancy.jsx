import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroBanner from '../Componets/Herobanner';

const Consultancy = () => {
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

  const services = [
    {
      title: "Fractional Leadership",
      description: "Senior experts who work part-time as your CMO, CGO, or Commercial Director.",
      details: "Typically 40 hours per month",
      icon: "👑",
      features: [
        "Former commercial leaders from top firms",
        "Embed senior expertise directly into your team",
        "Without full-time cost or commitment",
        "Strategic guidance at board level"
      ]
    },
    {
      title: "Interim Management",
      description: "Short-term, intensive full-time placements to lead major transformations.",
      details: "3-9 months duration",
      icon: "⏰",
      features: [
        "Lead major transformations or turnarounds",
        "New market launches",
        "Immediate availability",
        "Seamless transitions and results-driven approach"
      ]
    },
    {
      title: "Strategic Consultancy",
      description: "Focused, time-bound projects on specific business challenges.",
      details: "Project-based engagements",
      icon: "📊",
      features: [
        "Marketing and pricing strategy",
        "Sales optimization",
        "Go-to-market strategy",
        "Data-driven recommendations"
      ]
    },
    {
      title: "Mentoring & Capability Building",
      description: "Hands-on team coaching and knowledge transfer.",
      details: "Build internal skills",
      icon: "🎓",
      features: [
        "Hands-on team coaching",
        "Workshops and training",
        "Knowledge transfer programs",
        "Leadership capacity building"
      ]
    }
  ];

  return (
    <div>
      <HeroBanner 
        title="Independent Consultancy"
        subtitle="Expert leadership for your business growth"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="card scroll-animate group hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  </div>
                  <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs px-3 py-1 rounded-full">
                    {service.details}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-[#D4AF37]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-8 scroll-animate">
            <h2 className="text-2xl font-bold text-[#1E3A5F] text-center mb-8">Why Choose Our Consultancy?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💡</div>
                <p className="font-semibold text-[#1E3A5F]">No-nonsense advice</p>
                <p className="text-sm text-gray-500">We tell you what works AND what doesn't</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold text-[#1E3A5F]">Agile client-led mindset</p>
                <p className="text-sm text-gray-500">Bespoke solutions tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <p className="font-semibold text-[#1E3A5F]">Proven expert leaders</p>
                <p className="text-sm text-gray-500">Former commercial leaders who deliver results</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold text-[#1E3A5F]">Cost-effective</p>
                <p className="text-sm text-gray-500">50% lower costs than traditional consultancies</p>
              </div>
            </div>
          </div>

          {/* 100 Days Promise */}
          <div className="mt-8 bg-gradient-to-r from-[#1E3A5F] to-[#2B5A8C] rounded-2xl p-6 text-center text-white scroll-animate">
            <p className="text-lg font-semibold mb-2">Our 100-Day Promise</p>
            <p className="text-gray-200">
              Clients typically see significant measurable improvements in revenue, profitability, 
              customer acquisition cost, retention rates, and operational efficiency within the first 100 days.
            </p>
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

export default Consultancy;