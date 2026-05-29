import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => (
  <div className="hidden md:block bg-primary text-primary-foreground text-xs md:text-sm">
    <div className="container-eduka flex items-center justify-between py-1.5 md:py-2.5">
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5 md:gap-2"><MapPin className="h-3 w-3 md:h-4 md:w-4" /> Jl. PGRI No.8, Kota Bogor</span>
        <span className="hidden lg:flex items-center gap-1.5 md:gap-2"><Mail className="h-3 w-3 md:h-4 md:w-4" /> info@smppgri8bogor.sch.id</span>
        <span className="hidden lg:flex items-center gap-1.5 md:gap-2"><Phone className="h-3 w-3 md:h-4 md:w-4" /> (0251) 123-4567</span>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
        <span className="opacity-90 hidden sm:inline">Ikuti kami:</span>
        <a href="#" aria-label="Facebook" className="hover:text-accent transition-smooth"><Facebook className="h-3 w-3 md:h-4 md:w-4" /></a>
        <a href="#" aria-label="Instagram" className="hover:text-accent transition-smooth"><Instagram className="h-3 w-3 md:h-4 md:w-4" /></a>
        <a href="#" aria-label="YouTube" className="hover:text-accent transition-smooth"><Youtube className="h-3 w-3 md:h-4 md:w-4" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;
