import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import aboutImg from "@/assets/about-teacher.jpg";
import facilityImg from "@/assets/facility-building.jpg";

const sellingPoints = [
  { no: "01", title: "Beasiswa Prestasi", desc: "Beragam beasiswa untuk siswa berprestasi akademik & non-akademik." },
  { no: "02", title: "Guru Profesional", desc: "Tenaga pendidik tersertifikasi & berpengalaman di bidangnya." },
  { no: "03", title: "Perpustakaan Lengkap", desc: "Koleksi buku, ruang baca nyaman, dan akses literasi digital." },
  { no: "04", title: "Biaya Terjangkau", desc: "Pendidikan berkualitas dengan biaya yang ramah keluarga." },
];

const About = () => (
  <section id="profil" className="section-pad">
    <div className="container-eduka grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Image collage */}
      <ScrollReveal animation="slide-right">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImg}
              alt="Guru SMP PGRI 8 mengajar"
              loading="lazy"
              width={1200}
              height={1200}
              className="w-full h-full object-cover rounded-2xl shadow-card aspect-[4/5] hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col gap-4">
              <img
                src={facilityImg}
                alt="Gedung sekolah"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full object-cover rounded-2xl shadow-card aspect-square hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-gradient-accent text-accent-foreground rounded-2xl p-5 shadow-accent hover:scale-105 transition-transform duration-300">
                <div className="font-display font-extrabold text-3xl">25+</div>
                <div className="text-sm font-medium opacity-95">Tahun Pengalaman Mendidik</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Content */}
      <div>
        <ScrollReveal animation="fade">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Tentang Sekolah</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            Sistem Pendidikan<br />
            <span className="text-primary">yang Menginspirasi</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-up" delay={100}>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            SMP PGRI 8 Kota Bogor berkomitmen mencetak lulusan cerdas, berakhlak mulia,
            dan siap bersaing di era digital. Dengan kurikulum terkini dan pendekatan personal,
            kami mendampingi setiap siswa meraih potensi terbaiknya.
          </p>
        </ScrollReveal>

        <div className="mt-8 space-y-4">
          {sellingPoints.map((p, idx) => (
            <ScrollReveal key={p.no} animation="slide-left" delay={idx * 100}>
              <div className="flex gap-4 p-3 rounded-xl hover:bg-primary-soft/30 transition-all duration-300 group cursor-pointer">
                <span className="font-display font-extrabold text-2xl text-primary/20 group-hover:text-primary/40 shrink-0 w-8 leading-none mt-0.5 transition-colors">{p.no}</span>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{p.desc}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="slide-up" delay={400}>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button variant="cta" size="lg" asChild className="hover:scale-105 transition-transform">
              <a href="#ppdb">Daftar Sekarang</a>
            </Button>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-primary-soft grid place-items-center text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Hubungi Kami</div>
                <div className="font-display font-bold text-primary-deep">+62 251 123-4567</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;
