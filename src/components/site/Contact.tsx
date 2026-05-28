import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => (
  <section id="kontak" className="section-pad">
    <div className="container-eduka">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
          <span className="h-px w-8 bg-accent" /> Hubungi Kami <span className="h-px w-8 bg-accent" />
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
          Kunjungi <span className="text-primary">Sekolah Kami</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {[
          { icon: MapPin, t: "Alamat Sekolah", d: "Jl. PGRI No. 8, Kelurahan Bantarjati, Kecamatan Bogor Utara, Kota Bogor 16153" },
          { icon: Phone, t: "Telepon & WhatsApp", d: "(0251) 123-4567\n+62 812-3456-7890" },
          { icon: Mail, t: "Email", d: "info@smppgri8bogor.sch.id\nppdb@smppgri8bogor.sch.id" },
        ].map((c) => (
          <div key={c.t} className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-elevated transition-smooth text-center">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-card mb-5">
              <c.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground">{c.t}</h3>
            <p className="mt-2 text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card border border-border h-80 lg:h-[420px]">
          <iframe
            title="Lokasi SMP PGRI 8 Bogor"
            src="https://www.openstreetmap.org/export/embed.html?bbox=106.78%2C-6.58%2C106.82%2C-6.55&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 shadow-card flex flex-col justify-center">
          <Clock className="h-10 w-10 text-accent mb-4" />
          <h3 className="font-display font-bold text-2xl">Jam Operasional</h3>
          <div className="mt-5 space-y-3 text-sm">
            {[
              ["Senin – Jumat", "07.00 – 15.00 WIB"],
              ["Sabtu", "07.00 – 12.00 WIB"],
              ["Minggu & Libur", "Tutup"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-white/80">{d}</span>
                <span className="font-semibold">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
