import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import lib from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import building from "@/assets/facility-building.jpg";

const items = [
  { src: building, span: "md:col-span-2 md:row-span-2", label: "Gedung Sekolah" },
  { src: news1, span: "", label: "Kegiatan Olahraga" },
  { src: lib, span: "", label: "Perpustakaan" },
  { src: news2, span: "", label: "Prestasi Akademik" },
  { src: lab, span: "", label: "Lab Komputer" },
  { src: news3, span: "md:col-span-2", label: "Upacara Bendera" },
];

const Gallery = () => (
  <section id="galeri" className="section-pad bg-secondary/40">
    <div className="container-eduka">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
          <span className="h-px w-8 bg-accent" /> Galeri Sekolah <span className="h-px w-8 bg-accent" />
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
          Momen <span className="text-primary">Berharga</span> Kami
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
        {items.map((it, i) => (
          <div key={i} className={`relative overflow-hidden rounded-2xl shadow-soft group ${it.span}`}>
            <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground font-display font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
