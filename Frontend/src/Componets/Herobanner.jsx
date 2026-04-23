import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img1 from "../assets/img/top-view-co-workers-planning-strategy.jpg"

const HeroBanner = ({ 
  title, 
  subtitle, 
  showButton = false, 
  buttonText = "Get Started", 
  buttonLink = "/contact",
  imageUrl =img1
}) => {
  return (
    <div 
      className="relative text-white overflow-hidden min-h-[300px] md:min-h-[400px]  scroll-animate"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
          {title}
        </h1>
        <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto animate-bounce">
          {subtitle}
        </p>
        {showButton && (
          <Link 
            to={buttonLink}
            className="inline-flex items-center gap-2 mt-6 bg-[#D4AF37] text-[#1E3A5F] px-6 py-2 rounded-lg font-semibold hover:bg-[#B8942E] transition-all duration-300 hover:shadow-lg"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;