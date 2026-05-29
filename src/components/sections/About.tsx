import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/images/about/about-teacher.jpg";
import facilityImg from "@/assets/images/facilities/facility-building.jpg";

const sellingPoints = [
  { no: "01", title: "Beasiswa Prestasi", desc: "Beragam beasiswa untuk siswa berprestasi akademik & non-akademik." },
  { no: "02", title: "Guru Profesional", desc: "Tenaga pendidik tersertifikasi & berpengalaman di bidangnya." },
  { no: "03", title: "Perpustakaan Lengkap", desc: "Koleksi buku, ruang baca nyaman, dan akses literasi digital." },
  { no: "04", title: "Biaya Terjangkau", desc: "Pendidikan berkualitas dengan biaya yang ramah keluarga." },
];

const About = () => (
  <section id="profil" className="-mt-px pt-2 md:pt-16 pb-16 md:pb-24">
    <div className="container-eduka grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Content — tampil pertama di mobile */}
      <div className="order-1 lg:order-2">
        <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">Tentang Sekolah</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground leading-tight">
          Sistem Pendidikan<br />
          <span className="text-foreground">yang Menginspirasi</span>
        </h2>
        <p className="mt-4 md:mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
          SMP PGRI 8 Kota Bogor berkomitmen mencetak lulusan cerdas, berakhlak mulia,
          dan siap bersaing di era digital. Dengan kurikulum terkini dan pendekatan personal,
          kami mendampingi setiap siswa meraih potensi terbaiknya.
        </p>

        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          {sellingPoints.map((p) => (
            <div key={p.no} className="flex gap-3 md:gap-4">
              <span className="font-display font-extrabold text-xl md:text-2xl text-primary/20 shrink-0 w-6 md:w-8 leading-none mt-0.5">{p.no}</span>
              <div>
                <div className="font-semibold text-sm text-foreground">{p.title}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4 lg:gap-5">
          <Button variant="cta" size="sm" asChild className="cursor-pointer">
            <a href="/ppdb">Daftar Sekarang</a>
          </Button>
          <a href="tel:+622511234567" className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary-soft grid place-items-center text-primary">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Hubungi Kami</div>
              <div className="font-display font-bold text-primary-deep text-sm md:text-base">+62 251 123-4567</div>
            </div>
          </a>
        </div>
      </div>

      {/* Image collage — tampil kedua di mobile */}
      <div className="order-2 lg:order-1 relative">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <img
            src={aboutImg}
            alt="Guru SMP PGRI 8 mengajar"
            loading="lazy"
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-card aspect-[4/5]"
          />
          <div className="flex flex-col gap-3 md:gap-4">
            <img
              src={facilityImg}
              alt="Gedung sekolah"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover rounded-xl md:rounded-2xl shadow-card aspect-square"
            />
            <div className="bg-gradient-accent text-accent-foreground rounded-xl md:rounded-2xl p-4 md:p-5 shadow-accent">
              <div className="font-display font-extrabold text-2xl md:text-3xl">25+</div>
              <div className="text-xs md:text-sm font-medium opacity-95">Tahun Pengalaman Mendidik</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
