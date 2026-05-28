import facilityImg from "@/assets/facility-building.jpg";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { value: 850, suffix: "+", label: "Siswa Aktif", desc: "Terdaftar tahun ajaran 2025/2026" },
  { value: 45, suffix: "", label: "Guru & Staff", desc: "Tersertifikasi & berpengalaman" },
  { value: 32, suffix: "", label: "Program Belajar", desc: "Kurikuler & ekstrakurikuler" },
  { value: 120, suffix: "+", label: "Penghargaan", desc: "Tingkat kota, provinsi & nasional" },
];

const Stats = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={facilityImg} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-stats opacity-97" />
    </div>

    <div className="relative container-eduka py-20 md:py-28">
      <ScrollReveal animation="fade">
        <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-12 text-center">
          Angka yang Bicara
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
        {stats.map((s, idx) => (
          <ScrollReveal key={s.label} animation="slide-up" delay={idx * 100}>
            <div className="px-6 lg:px-10 first:pl-0 last:pr-0">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-white">
                <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
              </div>
              <div className="mt-2 font-semibold text-white/90 text-sm">{s.label}</div>
              <div className="mt-1 text-white/55 text-xs">{s.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
