import { Building2, BookOpen, Monitor, Trophy, FlaskConical, Music } from "lucide-react";
import libraryImg from "@/assets/facility-library.jpg";
import labImg from "@/assets/facility-lab.jpg";
import buildingImg from "@/assets/facility-building.jpg";

const facilities = [
  { icon: Building2, title: "Ruang Kelas Nyaman", desc: "Kelas ber-AC, modern, dan kondusif untuk belajar." },
  { icon: BookOpen, title: "Perpustakaan", desc: "Ribuan koleksi buku & literasi digital terlengkap." },
  { icon: Monitor, title: "Lab Komputer", desc: "Komputer terbaru untuk pembelajaran digital & coding." },
  { icon: FlaskConical, title: "Lab IPA", desc: "Praktikum sains dengan peralatan lengkap & aman." },
  { icon: Trophy, title: "Lapangan Olahraga", desc: "Sarana basket, futsal, dan voli untuk prestasi siswa." },
  { icon: Music, title: "Studio Seni", desc: "Ruang musik, tari, dan kreasi seni untuk bakat siswa." },
];

const Facilities = () => (
  <section id="fasilitas" className="section-pad bg-secondary/40">
    <div className="container-eduka">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
          <span className="h-px w-8 bg-accent" /> Fasilitas Sekolah <span className="h-px w-8 bg-accent" />
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
          Fasilitas <span className="text-primary">Lengkap & Modern</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mendukung kegiatan belajar mengajar yang nyaman, aktif, dan berorientasi prestasi.
        </p>
      </div>

      {/* Image gallery preview */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[buildingImg, libraryImg, labImg].map((src, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card group">
            <img src={src} alt={`Fasilitas ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground font-display font-bold text-lg">
              {["Gedung Utama", "Perpustakaan", "Lab Komputer"][i]}
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {facilities.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-card transition-smooth group">
            <div className="h-14 w-14 rounded-xl bg-primary-soft grid place-items-center text-primary mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Facilities;
