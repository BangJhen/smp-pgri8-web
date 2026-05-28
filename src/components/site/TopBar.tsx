import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => (
  <div className="hidden md:block bg-primary text-primary-foreground text-sm">
    <div className="container-eduka flex items-center justify-between py-2.5">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Jl. PGRI No.8, Kota Bogor</span>
        <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@smppgri8bogor.sch.id</span>
        <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (0251) 123-4567</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="opacity-90">Ikuti kami:</span>
        <a href="#" aria-label="Facebook" className="hover:text-accent transition-smooth"><Facebook className="h-4 w-4" /></a>
        <a href="#" aria-label="Instagram" className="hover:text-accent transition-smooth"><Instagram className="h-4 w-4" /></a>
        <a href="#" aria-label="YouTube" className="hover:text-accent transition-smooth"><Youtube className="h-4 w-4" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;
