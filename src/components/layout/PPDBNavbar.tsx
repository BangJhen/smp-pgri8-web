import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PPDBNavbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-soft">
      <div className="container-eduka flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <img src="/logo-smp-pgri8.svg" alt="Logo SMP PGRI 8" className="h-12 w-auto" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-lg text-primary-deep">SMP PGRI 8</div>
            <div className="text-xs text-muted-foreground">Kota Bogor</div>
          </div>
        </a>

        {/* Back Button */}
        <Button variant="outline" size="sm" asChild>
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kembali</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default PPDBNavbar;
