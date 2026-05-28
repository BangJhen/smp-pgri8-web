import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";
import facilityImg from "@/assets/facility-building.jpg";

const stats = [
  { icon: GraduationCap, value: "850+", label: "Total Siswa" },
  { icon: Users, value: "45", label: "Guru & Staff" },
  { icon: BookOpen, value: "32", label: "Program Belajar" },
  { icon: Trophy, value: "120+", label: "Penghargaan" },
];

const Stats = () => (
  <section className="relative section-pad overflow-hidden">
    <div className="absolute inset-0">
      <img src={facilityImg} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-stats opacity-95" />
    </div>

    <div className="relative container-eduka">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-primary-foreground">
            <div className="mx-auto h-20 w-20 rounded-2xl bg-accent grid place-items-center shadow-accent mb-5 rotate-3 hover:rotate-0 transition-bounce">
              <s.icon className="h-9 w-9 text-accent-foreground" />
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl">{s.value}</div>
            <div className="mt-1 text-sm md:text-base text-white/85 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
