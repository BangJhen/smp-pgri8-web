import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-students.jpg";

const Hero = () => (
  <section id="beranda" className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Siswa SMP PGRI 8 Bogor" className="w-full h-full object-cover" width={1600} height={1100} />
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    <div className="relative container-eduka py-24 md:py-36 lg:py-44">
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 backdrop-blur border border-accent/30 text-accent-foreground">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold text-white">Selamat Datang di SMP PGRI 8</span>
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05]">
          Bangun Masa Depan{" "}
          <span className="text-accent">Cerah & Berprestasi</span>{" "}
          Bersama Kami
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
          SMP PGRI 8 Kota Bogor — sekolah modern yang memadukan akademik berkualitas,
          karakter mulia, dan teknologi untuk mencetak generasi unggul.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="#ppdb">Daftar PPDB Online <ArrowRight className="h-5 w-5" /></a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#profil"><Play className="h-4 w-4" /> Tentang Kami</a>
          </Button>
        </div>
      </div>
    </div>

    {/* Feature cards overlapping */}
    <div className="relative container-eduka -mb-16 md:-mb-20 z-10">
      <FeatureCards />
    </div>
  </section>
);

const features = [
  { no: "01", title: "Beasiswa Prestasi", desc: "Beragam beasiswa untuk siswa berprestasi akademik & non-akademik." },
  { no: "02", title: "Guru Profesional", desc: "Tenaga pendidik tersertifikasi & berpengalaman di bidangnya." },
  { no: "03", title: "Perpustakaan Lengkap", desc: "Koleksi buku, ruang baca nyaman, dan akses literasi digital." },
  { no: "04", title: "Biaya Terjangkau", desc: "Pendidikan berkualitas dengan biaya yang ramah keluarga." },
];

const FeatureCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 translate-y-16 md:translate-y-20">
    {features.map((f, i) => (
      <div key={f.no} className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth border border-border/60 hover:-translate-y-1"
        style={{ animationDelay: `${i * 80}ms` }}>
        <div className="flex items-start justify-between mb-4">
          <div className="h-14 w-14 rounded-xl bg-primary-soft grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
            <BookIcon />
          </div>
          <span className="font-display font-extrabold text-3xl text-muted-foreground/30">{f.no}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
      </div>
    ))}
  </div>
);

const BookIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export default Hero;
