import { useState, useCallback, useEffect } from "react";
import { Building2, BookOpen, Monitor, Trophy, FlaskConical, Music, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Lightbox } from "@/components/ui/lightbox";
import { getFasilitas, type Fasilitas } from "@/services/supabase/queries";
import libraryImg from "@/assets/images/facilities/facility-library.jpg";
import labImg from "@/assets/images/facilities/facility-lab.jpg";
import buildingImg from "@/assets/images/facilities/facility-building.jpg";

// Fallback carousel images (local assets)
const carouselFallback = [
  { src: buildingImg, label: "Gedung Utama" },
  { src: libraryImg, label: "Perpustakaan" },
  { src: labImg, label: "Lab Komputer" },
];

// Icon mapping berdasarkan nama fasilitas
const iconMap: Record<string, LucideIcon> = {
  default: Building2,
  perpustakaan: BookOpen,
  komputer: Monitor,
  "lab komputer": Monitor,
  "ruang komputer": Monitor,
  laboratorium: FlaskConical,
  "lab ipa": FlaskConical,
  lapangan: Trophy,
  olahraga: Trophy,
  kantin: Music,
  seni: Music,
  kelas: Building2,
};

const getIcon = (name: string): LucideIcon => {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lower.includes(key)) return icon;
  }
  return Building2;
};

const FacilitiesSection = () => {
  const [fasilitas, setFasilitas] = useState<Fasilitas[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  useEffect(() => {
    getFasilitas()
      .then(setFasilitas)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Carousel: pakai image_url dari DB jika ada, fallback ke local assets
  const carouselImages = fasilitas
    .filter((f) => f.image_url)
    .map((f) => ({ src: f.image_url!, label: f.name }))
    .concat(carouselFallback)
    .slice(0, 5);

  const displayFasilitas = loading
    ? []
    : fasilitas.length > 0
    ? fasilitas
    : [];

  return (
    <section id="fasilitas" className="section-pad bg-secondary/40">
      <div className="container-eduka">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Fasilitas Sekolah</p>
            <h2 className="mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-foreground">
              Lengkap untuk<br />
              <span className="text-foreground">Tumbuh Bersama</span>
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">
              Mendukung kegiatan belajar mengajar yang nyaman, aktif, dan berorientasi prestasi.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal animation="scale" delay={100}>
          <div className="relative mb-8 md:mb-12">
            <div className="overflow-hidden rounded-xl md:rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <div
                      className="relative aspect-[16/9] cursor-pointer group"
                      onClick={() => handleImageClick(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent" />
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-primary-foreground font-display font-bold text-lg md:text-2xl">
                        {img.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={scrollPrev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 rounded-full bg-white/90 hover:bg-white shadow-lg grid place-items-center text-primary hover:scale-110 transition-all" aria-label="Previous">
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            </button>
            <button onClick={scrollNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 rounded-full bg-white/90 hover:bg-white shadow-lg grid place-items-center text-primary hover:scale-110 transition-all" aria-label="Next">
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
            </button>
          </div>
        </ScrollReveal>

        {/* Facilities list */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {displayFasilitas.map((f, idx) => {
              const Icon = getIcon(f.name);
              return (
                <ScrollReveal key={f.id} animation="slide-up" delay={idx * 50}>
                  <div className="flex gap-3 md:gap-4 py-3 md:py-4 border-b border-border last:border-0 hover:bg-primary-soft/20 px-2 md:px-3 rounded-lg transition-all duration-300 group">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm md:text-foreground group-hover:text-primary transition-colors">{f.name}</div>
                      {f.description && (
                        <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{f.description}</div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        <Lightbox
          images={carouselImages.map((img) => img.src)}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          alt="Fasilitas SMP PGRI 8"
        />
      </div>
    </section>
  );
};

export default FacilitiesSection;
