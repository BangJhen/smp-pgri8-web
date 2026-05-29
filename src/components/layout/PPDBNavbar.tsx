import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavbarTop } from "@/hooks/useNavbarTop";

const PPDBNavbar = () => {
  const navTop = useNavbarTop(40);

  return (
    <>
      <header
        style={{ top: navTop }}
        className="fixed left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-soft"
      >
        <div className="container-eduka flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 md:gap-2.5">
            <img src="/logo-smp-pgri8.svg" alt="Logo SMP PGRI 8" className="h-8 w-auto md:h-12" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-extrabold text-sm md:text-lg text-primary-deep">SMP PGRI 8</div>
              <div className="text-[10px] md:text-xs text-muted-foreground">Kota Bogor</div>
            </div>
          </a>

          {/* Back Button */}
          <Button variant="outline" size="sm" asChild>
            <a href="/" className="flex items-center gap-1.5 md:gap-2">
              <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline text-xs md:text-sm">Kembali</span>
            </a>
          </Button>
        </div>
      </header>
      {/* Spacer */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};

export default PPDBNavbar;
