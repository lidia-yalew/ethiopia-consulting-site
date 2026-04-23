import { Link } from 'react-router-dom';
import img2 from "../assets/img/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Coin Logo Circle */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg group-hover:scale-110 transition-all duration-300">
          <img 
            src={img2}
            alt="Maria Theresa Coin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      
      {/* Company Name */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">
            Maria Theresa
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Growth Partners</span>
          <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold px-1.5 py-0.5 rounded-full">
            Since 1780
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;