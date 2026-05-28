import { useState, useCallback } from "react";
import { Building2, BookOpen, Monitor, Trophy, FlaskConical, Music, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Lightbox } from "@/components/ui/lightbox";
import libraryImg from "@/assets/facility-library.jpg";
import labImg from "@/assets/facility-lab.jpg";
import buildingImg from "@/assets/facility-building.jpg";

const carouselImages = [
  { src: buildingImg, label: "Gedung Utama" },
  { src: libraryImg, label: "Perpustakaan" },
  { src: labImg, label: "Lab Komputer" },
];

const facilities = [
  { icon: Building2, title: "Ruang Kelas Nyaman", desc: "Kelas ber-AC, modern, dan kondusif untuk belajar." },
  { icon: BookOpen, title: "Perpustakaan", desc: "Ribuan koleksi buku & literasi digital terlengkap." },
  { icon: Monitor, title: "Lab Komputer", desc: "Komputer terbaru untuk pembelajaran digital & coding." },
  { icon: FlaskConical, title: "Lab IPA", desc: "Praktikum sains dengan peralatan lengkap & aman." },
  { icon: Trophy, title: "Lapangan Olahraga", desc: "Sarana basket, futsal, dan voli untuk prestasi siswa." },
  { icon: Music, title: "Studio Seni", desc: "Ruang musik, tari, dan kreasi seni untuk bakat siswa." },
];

const Facilities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="fasilitas" className="section-pad bg-secondary/40">
      <div className="container-eduka">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Fasilitas Sekolah</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
              Lengkap untuk<br />
              <span className="text-primary">Tumbuh Bersama</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mendukung kegiatan belajar mengajar yang nyaman, aktif, dan berorientasi prestasi.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal animation="scale" delay={100}>
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
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
                      <div className="absolute bottom-6 left-6 text-primary-foreground font-display font-bold text-2xl">
                        {img.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg grid place-items-center text-primary hover:scale-110 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg grid place-items-center text-primary hover:scale-110 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </ScrollReveal>

        {/* Facilities list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((f, idx) => (
            <ScrollReveal key={f.title} animation="slide-up" delay={idx * 50}>
              <div className="flex gap-4 py-4 border-b border-border last:border-0 hover:bg-primary-soft/20 px-3 rounded-lg transition-all duration-300 group">
                <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{f.desc}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          images={carouselImages.map(img => img.src)}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          alt="Fasilitas SMP PGRI 8"
        />
      </div>
    </section>
  );
};

export default Facilities;
