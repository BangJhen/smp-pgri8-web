import { GraduationCap, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container-eduka py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-accent">
              <GraduationCap className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg">SMP PGRI 8</div>
              <div className="text-xs opacity-75">Kota Bogor</div>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Sekolah modern berbasis karakter & teknologi yang mencetak generasi
            unggul, berakhlak mulia, dan siap menghadapi masa depan.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent grid place-items-center transition-smooth" aria-label="Social">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Tautan Cepat</h4>
          <ul className="space-y-3 text-sm opacity-85">
            {[
              ["Beranda", "#beranda"], ["Profil Sekolah", "#profil"], ["Fasilitas", "#fasilitas"],
              ["Berita", "#berita"], ["Galeri", "#galeri"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Informasi PPDB</h4>
          <ul className="space-y-3 text-sm opacity-85">
            {["Pendaftaran Online", "Syarat & Ketentuan", "Jadwal Seleksi", "Biaya Pendidikan", "FAQ"].map((l) => (
              <li key={l}><a href="#ppdb" className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Kontak</h4>
          <ul className="space-y-4 text-sm opacity-85">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" /> Jl. PGRI No. 8, Bantarjati, Bogor Utara, Kota Bogor</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-accent" /> (0251) 123-4567</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-accent" /> info@smppgri8bogor.sch.id</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-eduka py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm opacity-80">
        <p>© 2026 SMP PGRI 8 Kota Bogor. Hak Cipta Dilindungi.</p>
        <p>Dibuat dengan ❤ untuk pendidikan Indonesia</p>
      </div>
    </div>
  </footer>
);

export default Footer;
