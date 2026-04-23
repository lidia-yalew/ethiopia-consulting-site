import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BarChart3, Brain, Users, TrendingUp, Clock, 
  Award, CheckCircle, Sparkles, Target, Rocket, 
  Star, Zap, Briefcase, LineChart, Shield, Gem, MapPin
} from 'lucide-react';
import { siteContent } from '../data/content';
import img3 from "../assets/img/logo.png"

const Home = () => {
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-1 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E3A5F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#D4AF37]/10 to-[#1E3A5F]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-sm">Premier Growth Partners</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1E3A5F] via-[#2B5A8C] to-[#D4AF37] bg-clip-text text-transparent">
                {siteContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {siteContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-[#D4AF37] to-[#B8942E] text-[#0F2A44] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group text-lg">
                  Start Your Journey
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A5F] hover:text-white transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16">
                {siteContent.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg scroll-animate hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">{stat.value}</div>
                    <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-[#1E3A5F]" />
              <span className="text-[#1E3A5F] font-semibold text-sm">What We Do</span>
            </div>
            <h2 className="text-[#0F2A44]">{siteContent.whatWeDo.title}</h2>
            <p className="text-gray-600 text-lg">{siteContent.whatWeDo.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.whatWeDo.modalities.map((modality, index) => (
              <div key={index} className="card text-center group scroll-animate hover:scale-105" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-all duration-500">
                  {index === 0 && <Users className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors" />}
                  {index === 1 && <Briefcase className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors" />}
                  {index === 2 && <TrendingUp className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors" />}
                  {index === 3 && <Clock className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-[#1E3A5F] text-xl font-semibold mb-2">{modality}</h3>
                <p className="text-gray-500 text-sm">Expert-led solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-sm">What We Offer</span>
            </div>
            <h2 className="text-[#0F2A44]">Our Premium Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group scroll-animate hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">Commercial Diagnostic</h3>
              <p className="text-gray-600 mb-4">Data-driven deep-dive assessment of your revenue engine</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  Pipeline & Funnel Analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  CAC & ROI Optimization
                </li>
              </ul>
              <Link to="/diagnostics" className="text-[#D4AF37] font-semibold hover:text-[#B8942E] inline-flex items-center gap-2 group">
                Discover More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="card group scroll-animate hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">AI & MarTech Diagnostic</h3>
              <p className="text-gray-600 mb-4">Transform marketing with AI-powered solutions</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  AI Integration Strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  10-25% ROI Boost
                </li>
              </ul>
              <Link to="/diagnostics" className="text-[#D4AF37] font-semibold hover:text-[#B8942E] inline-flex items-center gap-2 group">
                Discover More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="card group scroll-animate hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A5F] to-[#2B5A8C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">Independent Consultancy</h3>
              <p className="text-gray-600 mb-4">Fractional leaders & interim management expertise</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  Fractional CMO/CRO
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  Interim Leadership
                </li>
              </ul>
              <Link to="/consultancy" className="text-[#D4AF37] font-semibold hover:text-[#B8942E] inline-flex items-center gap-2 group">
                Discover More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     {/* Brand Story Section */}
<section className="section bg-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Text */}
      <div className="scroll-animate">
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
          <Gem className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-semibold text-sm">Our Brand Story</span>
        </div>
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Enduring Trust Since 1780</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our name draws from the <strong className="text-[#1E3A5F]">Maria Theresa thaler</strong>, the silver coin that served 
          as the most trusted currency across Europe, Ethiopia and East Africa for more than 280 years.
        </p>
        <p className="text-gray-600 leading-relaxed">
          It symbolizes unwavering reliability, consistent value, and strength that endures across generations.
        </p>
        <Link to="/about" className="inline-flex items-center gap-2 mt-4 text-[#D4AF37] font-semibold hover:gap-3 transition-all group">
          Learn Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
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

      {/* Why Choose Us / Differentiators */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-[#1E3A5F]" />
              <span className="text-[#1E3A5F] font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Our Differentiators</h2>
            <p className="text-gray-600">What makes Maria Theresa Growth Partners different from traditional consultancies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center scroll-animate group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                <Shield className="w-8 h-8 text-[#1E3A5F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Ownership Mindset</h3>
              <p className="text-gray-500 text-sm">Our experts think like co-owners, prioritizing long-term value</p>
            </div>
            <div className="card text-center scroll-animate group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                <Clock className="w-8 h-8 text-[#1E3A5F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Flexible & Affordable</h3>
              <p className="text-gray-500 text-sm">Board-level expertise without full-time executive cost</p>
            </div>
            <div className="card text-center scroll-animate group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                <Target className="w-8 h-8 text-[#1E3A5F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Ethiopia-First</h3>
              <p className="text-gray-500 text-sm">Deep understanding of local market dynamics</p>
            </div>
            <div className="card text-center scroll-animate group hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                <TrendingUp className="w-8 h-8 text-[#1E3A5F] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-[#1E3A5F] mb-2">Measurable Impact</h3>
              <p className="text-gray-500 text-sm">Clear KPIs and proven results within 100 days</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#1E3A5F] to-[#2B5A8C] rounded-2xl p-6 text-center text-white scroll-animate">
            <p className="text-lg font-semibold mb-2">Our 100-Day Promise</p>
            <p className="text-gray-200">
              Clients typically see significant measurable improvements in revenue, profitability, customer acquisition cost, 
              retention rates, and operational efficiency within the first 100 days.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#2B5A8C] rounded-3xl p-10 text-center text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Award className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-lg mb-8 opacity-90">Let's discuss how we can help you achieve exceptional growth</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F2A44] px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                  Schedule a Consultation
                  <LineChart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;