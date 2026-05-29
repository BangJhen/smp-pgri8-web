import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavbarTop } from "@/hooks/useNavbarTop";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isPPDBPage = location.pathname === "/ppdb";
  const navTop = useNavbarTop(40); // TopBar height ~40px on desktop

  return (
    <>
      {/* Fixed navbar — slides down below TopBar, then sticks at top-0 after scroll */}
      <header
        style={{ top: navTop }}
        className="fixed left-0 right-0 z-40 bg-background border-b border-border shadow-soft md:bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:md:bg-background/80"
      >
        <div className="container-eduka flex items-center justify-between h-16 md:h-20">
          <a href="#beranda" className="flex items-center gap-2 md:gap-2.5">
            <img src="/logo-smp-pgri8.svg" alt="Logo SMP PGRI 8" className="h-8 w-auto md:h-12" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-extrabold text-sm md:text-lg text-primary-deep">SMP PGRI 8</div>
              <div className="text-[10px] md:text-xs text-muted-foreground">Kota Bogor</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 md:gap-3">
            {!isPPDBPage && (
              <Button variant="cta" size="sm" asChild>
                <a href="/ppdb">Daftar PPDB</a>
              </Button>
            )}
          </div>

          <button className="lg:hidden p-1.5 md:p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border bg-background",
          open ? "max-h-screen" : "max-h-0"
        )}>
          <nav className="container-eduka flex flex-col py-2 gap-0.5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary-soft/50 transition-colors">
                {l.label}
              </a>
            ))}
            {!isPPDBPage && (
              <Button variant="cta" size="sm" className="mt-3 mb-1" asChild>
                <a href="/ppdb" onClick={() => setOpen(false)}>Daftar PPDB</a>
              </Button>
            )}
          </nav>
        </div>
      </header>

      {/* Spacer — navbar height only (TopBar is static in flow) */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};

export default Navbar;
