import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroBanner from '../Componets/Herobanner';

const Diagnostics = () => {
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

  return (
    <div>
      <HeroBanner 
        title="Commercial & AI Diagnostics"
        subtitle="Data-driven insights to transform your business"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Ethiopia Context */}
          <div className="mb-10 bg-gray-50 rounded-2xl p-6 scroll-animate border-l-4 border-[#D4AF37]">
            <p className="text-gray-700 leading-relaxed">
              Our solutions are deeply customized to <strong className="text-[#1E3A5F]">Ethiopia's unique realities</strong>: 
              fast-evolving digital payment systems, complex urban and rural consumer behaviors, 
              multi-layered distribution networks, and strict regulatory environments across sectors 
              such as FMCG, Agri-business, Fintech, Health, Manufacturing and import/export.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Commercial Diagnostic Card */}
            <div className="card scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Commercial Operations Diagnostic</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build confidence in your revenue engine with comprehensive assessment of sales and marketing effectiveness.
              </p>
              
              <h3 className="font-semibold text-[#1E3A5F] mb-3 text-lg">Key Assessment Areas:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">→</span> GTM, Channel and Funnel Effectiveness
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">→</span> Strategic Market Alignment
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">→</span> Team and Capability Assessment
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">→</span> Technology, Data and Metrics
                </li>
              </ul>
              
              <h3 className="font-semibold text-[#1E3A5F] mb-3 text-lg">Key Metrics We Analyze:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Pipeline Quality & Funnel Health
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Forecast Validation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> CAC, ARPU, Retention and Churn Rate
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Lead Conversion & Brand Resonance
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Data Confidence & Revenue Forecasting
                </li>
              </ul>
            </div>

            {/* AI Diagnostic Card */}
            <div className="card scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">AI & MarTech Diagnostic</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Smarter Marketing. Stronger Sales. Powered by AI.</p>
              
              <div className="bg-[#D4AF37]/10 rounded-lg p-4 mb-6 text-center">
                <p className="font-semibold text-[#1E3A5F] mb-1">Expected ROI:</p>
                <p className="text-2xl font-bold text-[#D4AF37]">10-25%</p>
                <p className="text-sm text-gray-600">boost in marketing ROI</p>
              </div>
              
              <h3 className="font-semibold text-[#1E3A5F] mb-3 text-lg">Key Diagnostic Areas:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> People & Processes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Channels & Content Production
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Technology Stack & AI Governance
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#D4AF37]">✓</span> Customer Support & Sales Conversion
                </li>
              </ul>
              
              <h3 className="font-semibold text-[#1E3A5F] mb-3 text-lg">Transform Your Marketing:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transform marketing from a traditional approach into a robust, AI-enabled capability 
                that drives incremental lead generation and sales conversions.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 scroll-animate">
            <Link 
              to="/contact" 
              className="bg-[#1E3A5F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2B5A8C] transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg transform hover:scale-105"
            >
              Get Your Diagnostic Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostics;