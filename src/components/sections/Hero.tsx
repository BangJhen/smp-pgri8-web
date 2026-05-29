import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SquigglyText } from "@/components/ui/squiggly-text";
import heroImg from "@/assets/images/school/gambar-sekolah.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="beranda" className="relative overflow-hidden h-[65vh] md:h-[85vh] min-h-[360px] md:min-h-[480px] max-h-[600px] md:max-h-[750px]">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImg}
          alt="Gedung SMP PGRI 8 Bogor"
          className="w-full h-full object-cover object-center"
          width={1440}
          height={810}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      <div className="relative container-eduka h-full flex items-center py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6"
          >
            SMP PGRI 8 — Kota Bogor
          </motion.p>

          <h1 className="text-[clamp(1.75rem,7.5vw,4.5rem)] font-extrabold text-white leading-[1.15] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block whitespace-nowrap"
            >
              Bangun{" "}
              <SquigglyText steps={14} stepDuration={70} scale={[3, 6]} className="text-accent">
                Masa Depan
              </SquigglyText>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="block"
            >
              Bersama Kami
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 md:mt-6 text-white/70 text-sm md:text-base lg:text-lg max-w-md leading-relaxed"
          >
            Sekolah menengah pertama modern di Kota Bogor yang mencetak generasi
            cerdas, berkarakter, dan siap menghadapi era digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3"
          >
            <Button variant="hero" size="sm" asChild className="hover:scale-105 transition-transform md:text-base">
              <a href="/ppdb">
                Daftar PPDB Online <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="sm" asChild className="hover:scale-105 transition-transform md:text-base">
              <a href="#profil">Tentang Kami</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave transition — seamless ke section berikutnya */}
      <div className="absolute bottom-0 left-0 right-0 z-10 -mb-px">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block h-8 md:h-[50px]"
        >
          <path
            d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
