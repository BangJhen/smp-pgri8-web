import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ClipboardList, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { supabase } from "@/services/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  nama_lengkap: z.string().trim().min(3, "Nama minimal 3 karakter").max(120),
  nisn: z.string().trim().max(20).optional().or(z.literal("")),
  tempat_lahir: z.string().trim().min(2, "Wajib diisi").max(80),
  tanggal_lahir: z.string().min(1, "Wajib diisi"),
  jenis_kelamin: z.enum(["L", "P"], { required_error: "Pilih jenis kelamin" }),
  agama: z.string().trim().min(2, "Wajib diisi").max(40),
  alamat: z.string().trim().min(5, "Wajib diisi").max(500),
  asal_sekolah: z.string().trim().min(2, "Wajib diisi").max(120),
  nama_orangtua: z.string().trim().min(3, "Wajib diisi").max(120),
  no_hp: z.string().trim().min(8, "No HP minimal 8 digit").max(20),
  email: z.string().trim().email("Email tidak valid").max(160).optional().or(z.literal("")),
});

const initial = {
  nama_lengkap: "", nisn: "", tempat_lahir: "", tanggal_lahir: "",
  jenis_kelamin: "" as "L" | "P" | "", agama: "", alamat: "",
  asal_sekolah: "", nama_orangtua: "", no_hp: "", email: "",
};

const PPDBForm = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: keyof typeof initial, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.errors.forEach((er) => { if (er.path[0]) fe[er.path[0] as string] = er.message; });
      setErrors(fe);
      toast({ title: "Periksa kembali isian Anda", description: "Beberapa data belum sesuai.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const d = parsed.data;
    const { error } = await supabase.from("pendaftaran_ppdb").insert({
      nama_lengkap: d.nama_lengkap,
      nisn: d.nisn ? d.nisn : null,
      tempat_lahir: d.tempat_lahir,
      tanggal_lahir: d.tanggal_lahir,
      jenis_kelamin: d.jenis_kelamin,
      agama: d.agama,
      alamat: d.alamat,
      asal_sekolah: d.asal_sekolah,
      nama_orangtua: d.nama_orangtua,
      no_hp: d.no_hp,
      email: d.email ? d.email : null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Gagal mengirim pendaftaran", description: error.message, variant: "destructive" });
      return;
    }
    setSuccess(true);
    setForm(initial);
    toast({ title: "Pendaftaran berhasil dikirim! 🎉", description: "Tim PPDB akan menghubungi Anda dalam 1×24 jam." });
  };

  return (
    <section id="ppdb" className="section-pad bg-gradient-to-br from-primary-soft/40 via-background to-accent-soft/40">
      <div className="container-eduka">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Info side */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> PPDB 2026/2027 Dibuka
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Daftar Jadi Bagian dari{" "}
              <span className="text-foreground">Keluarga SMP PGRI 8</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Isi formulir pendaftaran online di samping. Tim kami akan menghubungi Anda
              untuk proses verifikasi dokumen & seleksi.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ClipboardList, t: "Pendaftaran 100% Online", d: "Cukup isi formulir, tanpa antre." },
                { icon: ShieldCheck, t: "Data Aman & Rahasia", d: "Data Anda terlindungi dan hanya diakses tim PPDB." },
                { icon: CheckCircle2, t: "Konfirmasi 1×24 Jam", d: "Tim kami akan segera menghubungi Anda." },
              ].map((b) => (
                <div key={b.t} className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{b.t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl shadow-elevated border border-border p-6 md:p-10">
              {success ? (
                <div className="text-center py-12 animate-fade-up">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary-soft text-primary grid place-items-center mb-5">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">Pendaftaran Berhasil Dikirim!</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Terima kasih telah mendaftar. Tim PPDB SMP PGRI 8 akan menghubungi Anda
                    dalam 1×24 jam untuk verifikasi dokumen.
                  </p>
                  <Button variant="cta" size="lg" className="mt-6" onClick={() => setSuccess(false)}>
                    Kirim Pendaftaran Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="mb-2">
                    <h3 className="font-display font-bold text-2xl text-foreground">Formulir Pendaftaran</h3>
                    <p className="text-sm text-muted-foreground mt-1">Lengkapi data berikut dengan benar.</p>
                  </div>

                  <Field label="Nama Lengkap" error={errors.nama_lengkap} required>
                    <Input value={form.nama_lengkap} onChange={(e) => update("nama_lengkap", e.target.value)} placeholder="Contoh: Ahmad Fauzan" />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="NISN" error={errors.nisn}>
                      <Input value={form.nisn} onChange={(e) => update("nisn", e.target.value)} placeholder="10 digit NISN" />
                    </Field>
                    <Field label="Asal Sekolah (SD)" error={errors.asal_sekolah} required>
                      <Input value={form.asal_sekolah} onChange={(e) => update("asal_sekolah", e.target.value)} placeholder="SDN ..." />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Tempat Lahir" error={errors.tempat_lahir} required>
                      <Input value={form.tempat_lahir} onChange={(e) => update("tempat_lahir", e.target.value)} placeholder="Bogor" />
                    </Field>
                    <Field label="Tanggal Lahir" error={errors.tanggal_lahir} required>
                      <Input type="date" value={form.tanggal_lahir} onChange={(e) => update("tanggal_lahir", e.target.value)} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Jenis Kelamin" error={errors.jenis_kelamin} required>
                      <div className="flex gap-3">
                        {[{ v: "L", l: "Laki-laki" }, { v: "P", l: "Perempuan" }].map((o) => (
                          <label key={o.v} className={`flex-1 flex items-center justify-center gap-2 px-4 h-11 rounded-md border-2 cursor-pointer transition-smooth ${form.jenis_kelamin === o.v ? "border-primary bg-primary-soft text-primary font-semibold" : "border-input hover:border-primary/40"}`}>
                            <input type="radio" name="jk" className="sr-only" checked={form.jenis_kelamin === o.v} onChange={() => update("jenis_kelamin", o.v)} />
                            {o.l}
                          </label>
                        ))}
                      </div>
                    </Field>
                    <Field label="Agama" error={errors.agama} required>
                      <Input value={form.agama} onChange={(e) => update("agama", e.target.value)} placeholder="Islam / Kristen / ..." />
                    </Field>
                  </div>

                  <Field label="Alamat Lengkap" error={errors.alamat} required>
                    <Textarea rows={3} value={form.alamat} onChange={(e) => update("alamat", e.target.value)} placeholder="Jl. ..., RT/RW, Kelurahan, Kecamatan" />
                  </Field>

                  <Field label="Nama Orang Tua / Wali" error={errors.nama_orangtua} required>
                    <Input value={form.nama_orangtua} onChange={(e) => update("nama_orangtua", e.target.value)} />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="No. HP / WhatsApp" error={errors.no_hp} required>
                      <Input value={form.no_hp} onChange={(e) => update("no_hp", e.target.value)} placeholder="08xxxxxxxxxx" />
                    </Field>
                    <Field label="Email (opsional)" error={errors.email}>
                      <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@contoh.com" />
                    </Field>
                  </div>

                  <Button type="submit" variant="cta" size="xl" disabled={loading} className="w-full mt-3">
                    {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Mengirim...</> : "Kirim Pendaftaran"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mengirim, Anda menyetujui data digunakan untuk keperluan PPDB SMP PGRI 8 Bogor.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label className="text-sm font-semibold text-foreground">
      {label} {required && <span className="text-accent">*</span>}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive font-medium">{error}</p>}
  </div>
);

export default PPDBForm;
