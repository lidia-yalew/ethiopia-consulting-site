import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Shield, Clock, Users, TrendingUp, 
  Award, Gem, Sparkles, Heart, Eye, Lightbulb,
  ArrowRight
} from 'lucide-react';
import HeroBanner from '../Componets/Herobanner';
import img3 from "../assets/img/logo.png"

const About = () => {
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
        title="About Maria Theresa Growth Partners"
        subtitle="Learn about our story, mission, and what makes us different"
      />

      {/* Our Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                <Gem className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-sm">Our Brand Story</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Enduring Trust</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our name draws from the <strong className="text-[#1E3A5F]">Maria Theresa thaler</strong>, the silver coin that served 
                as the most trusted currency across Europe, Ethiopia and East Africa for more than 
                280 continuous years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It symbolizes the same qualities we bring to every client relationship: unwavering 
                reliability, consistent value, and strength that endures across generations.
              </p>
            </div>
             {/* Right side - Logo Image (replaced the emoji circle) */}
                  <div className="scroll-animate flex justify-center">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-xl hover:scale-105 transition-transform duration-500">
                      <img 
                        src={img3}
                        alt="Maria Theresa Coin"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-[#1E3A5F]" />
              <span className="text-[#1E3A5F] font-semibold text-sm">Who We Are</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Maria Theresa Growth Partners</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a boutique growth leadership platform established in <strong>Addis Ababa, Ethiopia</strong>. 
              We give ambitious Ethiopian and East African businesses and startups direct, on-demand access 
              to seasoned independent experts who deliver superior, measurable revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Boutique Platform</h3>
              <p className="text-gray-500 text-sm">Personalized, high-touch service for every client</p>
            </div>
            <div className="card text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Ethiopia-First</h3>
              <p className="text-gray-500 text-sm">Deeply customized to Ethiopia's unique realities</p>
            </div>
            <div className="card text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Measurable Growth</h3>
              <p className="text-gray-500 text-sm">Results-driven strategy with clear KPIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-sm">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">A Better Kind of Growth</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To unlock a better kind of growth that creates lasting opportunity and sustainable profit 
                for our clients, their customers and Ethiopian society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe growth is not a short-term sprint or a simple revenue target. It is a powerful, 
                responsible force for innovation, job creation, and long-term value when built on deep 
                understanding of what customers truly want.
              </p>
            </div>
            <div className="scroll-animate order-1 lg:order-2 flex justify-center">
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-2xl p-8 text-center text-white">
                <Eye className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <p className="text-lg font-semibold">"Growth that creates lasting opportunity"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model & Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-4 h-4 text-[#1E3A5F]" />
              <span className="text-[#1E3A5F] font-semibold text-sm">Our Philosophy</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Ownership Mindset</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Growth Partners are far more than consultants or advisors. They are independent leaders 
              and true entrepreneurs who carry full accountability for both our firm's long-term economic 
              success and the tangible results we deliver for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="card scroll-animate">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Fractional Leadership</h3>
              <p className="text-gray-500 text-sm">CMO, CGO, or Commercial Director roles (typically 40 hrs per month)</p>
            </div>
            <div className="card scroll-animate">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Interim Management</h3>
              <p className="text-gray-500 text-sm">Short-term intensive placements (3-9 months)</p>
            </div>
            <div className="card scroll-animate">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Strategic Consultancy</h3>
              <p className="text-gray-500 text-sm">Focused time-bound projects on marketing, pricing, sales</p>
            </div>
            <div className="card scroll-animate">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Mentoring</h3>
              <p className="text-gray-500 text-sm">Hands-on team coaching and capability building</p>
            </div>
          </div>

          <div className="mt-8 bg-[#D4AF37]/10 rounded-2xl p-6 text-center scroll-animate">
            <p className="text-[#1E3A5F] font-semibold">
              Clients typically see significant measurable improvements in revenue, profitability, 
              customer acquisition cost, retention rates, and operational efficiency within the first 100 days.
            </p>
          </div>
        </div>
      </section>

      {/* Our Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-sm">What Makes Us Different</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Our Differentiators</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 scroll-animate">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">Entrepreneurial Ownership Mindset</h3>
                <p className="text-gray-600 text-sm">Every Growth Partner thinks and acts like a true co-owner, prioritizing long-term value creation over transactional work.</p>
              </div>
            </div>
            <div className="flex gap-4 scroll-animate">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">Flexible and Affordable Excellence</h3>
                <p className="text-gray-600 text-sm">Board-level commercial expertise on a part-time, project, or interim basis without full-time cost.</p>
              </div>
            </div>
            <div className="flex gap-4 scroll-animate">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">Ethiopia-First Localisation</h3>
                <p className="text-gray-600 text-sm">We understand local consumer psychology, distribution challenges, digital payment behaviours, and regulatory frameworks.</p>
              </div>
            </div>
            <div className="flex gap-4 scroll-animate">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">Measurable Impact</h3>
                <p className="text-gray-600 text-sm">Clear, agreed KPIs and a commitment to deliver sustainable, compounding results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A5F] to-[#2B5A8C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Together?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join us and experience the Maria Theresa difference. Let's build enduring growth for your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1E3A5F] px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;