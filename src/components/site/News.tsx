import { Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const news = [
  { img: news1, cat: "Olahraga", date: "12 April 2026", title: "Tim Basket SMP PGRI 8 Juara 1 POPDA Tingkat Kota", excerpt: "Setelah berjuang keras selama turnamen, tim basket putra berhasil meraih gelar juara pertama dalam ajang POPDA tingkat Kota Bogor tahun ini." },
  { img: news2, cat: "Akademik", date: "08 April 2026", title: "5 Siswa Lolos Olimpiade Sains Nasional 2026" },
  { img: news3, cat: "Kegiatan", date: "01 April 2026", title: "Upacara Hari Pendidikan Nasional Berlangsung Khidmat" },
];

const News = () => (
  <section id="berita" className="section-pad bg-secondary/30">
    <div className="container-eduka">
      <ScrollReveal animation="slide-up">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Berita & Pengumuman</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground">
              Kabar Terbaru dari Sekolah
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline hover:gap-2 transition-all shrink-0">
            Lihat semua <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Featured */}
        <ScrollReveal animation="slide-right">
          <motion.article 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-card border border-border/60 hover:shadow-elevated cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={news[0].img} alt={news[0].title} loading="lazy" width={1000} height={562}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/30 to-transparent group-hover:from-primary-deep/95 transition-colors duration-300" />
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase">
                {news[0].cat}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                <Calendar className="h-3.5 w-3.5" /> {news[0].date}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl leading-snug group-hover:text-accent transition-colors duration-300">
                {news[0].title}
              </h3>
              <p className="mt-2 text-sm text-white/70 line-clamp-2">{news[0].excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                Baca selengkapnya <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        </ScrollReveal>

        {/* Side articles */}
        <div className="flex flex-col gap-6">
          {news.slice(1).map((n, idx) => (
            <ScrollReveal key={n.title} animation="slide-left" delay={idx * 100}>
              <motion.article 
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.3 }}
                className="group flex gap-4 bg-card rounded-2xl overflow-hidden border border-border/60 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all cursor-pointer"
              >
                <div className="relative w-28 shrink-0 overflow-hidden">
                  <img src={n.img} alt={n.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-xs font-bold text-accent uppercase">{n.cat}</span>
                  <h3 className="mt-1 font-display font-bold text-sm text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {n.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {n.date}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default News;
