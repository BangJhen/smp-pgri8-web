import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-teacher.jpg";
import facilityImg from "@/assets/facility-building.jpg";

const About = () => (
  <section id="profil" className="section-pad pt-40 md:pt-48">
    <div className="container-eduka grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Image collage */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <img src={aboutImg} alt="Guru SMP PGRI 8 mengajar" loading="lazy" width={1200} height={1200}
            className="w-full h-full object-cover rounded-2xl shadow-card aspect-[4/5]" />
          <div className="flex flex-col gap-4">
            <img src={facilityImg} alt="Gedung sekolah" loading="lazy" width={1200} height={800}
              className="w-full object-cover rounded-2xl shadow-card aspect-square" />
            <div className="bg-gradient-accent text-accent-foreground rounded-2xl p-5 shadow-accent">
              <div className="font-display font-extrabold text-3xl">25+</div>
              <div className="text-sm font-medium opacity-95">Tahun Pengalaman Mendidik</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
          <span className="h-px w-8 bg-accent" /> Tentang Sekolah
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
          Sistem Pendidikan Kami
          <span className="block text-primary">Menginspirasi Anda</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          SMP PGRI 8 Kota Bogor berdiri sebagai sekolah menengah pertama yang berkomitmen
          mencetak lulusan cerdas, berakhlak mulia, dan siap bersaing di era digital. Dengan
          kurikulum terkini dan pendekatan personal, kami mendampingi setiap siswa meraih potensi terbaiknya.
        </p>

        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          {[
            { t: "Visi & Misi Jelas", d: "Menjadi sekolah unggul berbasis karakter dan teknologi." },
            { t: "Program Unggulan", d: "Tahfidz, English Club, Robotika, dan Olahraga prestasi." },
          ].map((b) => (
            <div key={b.t} className="flex gap-3 p-4 rounded-xl bg-primary-soft/50 border border-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Button variant="cta" size="lg" asChild><a href="#ppdb">Selengkapnya</a></Button>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary-soft grid place-items-center text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Hubungi Kami</div>
              <div className="font-display font-bold text-primary-deep">+62 251 123-4567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
