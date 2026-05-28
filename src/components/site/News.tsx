import { Calendar, ArrowUpRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const news = [
  { img: news1, cat: "Olahraga", date: "12 April 2026", title: "Tim Basket SMP PGRI 8 Juara 1 POPDA Tingkat Kota" },
  { img: news2, cat: "Akademik", date: "08 April 2026", title: "5 Siswa Lolos Olimpiade Sains Nasional 2026" },
  { img: news3, cat: "Kegiatan", date: "01 April 2026", title: "Upacara Hari Pendidikan Nasional Berlangsung Khidmat" },
];

const News = () => (
  <section id="berita" className="section-pad">
    <div className="container-eduka">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
            <span className="h-px w-8 bg-accent" /> Berita & Pengumuman
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
            Kabar Terbaru <span className="text-primary">dari Sekolah</span>
          </h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          Lihat semua berita <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((n) => (
          <article key={n.title} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth group border border-border/60">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={n.img} alt={n.title} loading="lazy" width={1000} height={700}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase">
                {n.cat}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4" /> {n.date}
              </div>
              <h3 className="mt-3 font-display font-bold text-lg text-foreground group-hover:text-primary transition-smooth leading-snug">
                {n.title}
              </h3>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all">
                Baca selengkapnya <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default News;
