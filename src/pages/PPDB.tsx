import TopBar from "@/components/site/TopBar";
import Navbar from "@/components/site/Navbar";
import PPDBForm from "@/components/site/PPDBForm";
import Footer from "@/components/site/Footer";
import { ArrowLeft, Calendar, FileText, Users } from "lucide-react";

const steps = [
  { no: "01", title: "Isi Formulir Online", desc: "Lengkapi data diri dan keluarga secara online." },
  { no: "02", title: "Verifikasi Dokumen", desc: "Tim PPDB menghubungi untuk verifikasi berkas." },
  { no: "03", title: "Seleksi & Pengumuman", desc: "Hasil seleksi diumumkan melalui website & WhatsApp." },
  { no: "04", title: "Daftar Ulang", desc: "Calon siswa yang diterima melakukan daftar ulang." },
];

const requirements = [
  "Fotokopi Ijazah / Surat Keterangan Lulus SD/MI (2 lembar)",
  "Fotokopi Akta Kelahiran (2 lembar)",
  "Fotokopi Kartu Keluarga (2 lembar)",
  "Pas foto 3×4 (4 lembar) dan 2×3 (2 lembar)",
  "Fotokopi Kartu NISN",
  "Surat Keterangan Sehat dari dokter",
];

const PPDB = () => {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-deep text-primary-foreground py-14 md:py-20">
        <div className="container-eduka">
          <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </a>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase">
              PPDB 2026/2027
            </span>
            <span className="text-white/60 text-sm">Pendaftaran Dibuka</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Pendaftaran Peserta<br />
            Didik Baru
          </h1>
          <p className="mt-4 text-white/75 max-w-xl leading-relaxed">
            SMP PGRI 8 Kota Bogor membuka pendaftaran siswa baru tahun ajaran 2026/2027.
            Daftarkan putra-putri Anda sekarang secara online.
          </p>

          {/* Quick info */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "Periode Pendaftaran", value: "1 Juni – 30 Juli 2026" },
              { icon: Users, label: "Kuota Tersedia", value: "120 Siswa Baru" },
              { icon: FileText, label: "Biaya Pendaftaran", value: "Gratis" },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <info.icon className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <div className="text-xs text-white/60">{info.label}</div>
                  <div className="font-semibold text-sm">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-gradient-to-br from-primary to-primary-deep">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: "50px" }}>
          <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25 L1440,50 L0,50 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Steps */}
      <section className="py-12 bg-background">
        <div className="container-eduka">
          <h2 className="text-2xl font-extrabold text-foreground mb-8 text-center">Alur Pendaftaran</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.no} className="bg-card rounded-2xl p-5 border border-border shadow-card">
                <div className="font-display font-extrabold text-3xl text-primary/20 mb-3">{s.no}</div>
                <div className="font-semibold text-foreground">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-8 bg-secondary/30">
        <div className="container-eduka">
          <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-foreground mb-5">Persyaratan Dokumen</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5 text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm text-muted-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <PPDBForm />

      <Footer />
    </main>
  );
};

export default PPDB;

