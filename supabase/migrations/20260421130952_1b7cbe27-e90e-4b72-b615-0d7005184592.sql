-- Tabel pendaftaran PPDB
CREATE TABLE public.pendaftaran_ppdb (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nama_lengkap TEXT NOT NULL,
  nisn TEXT,
  tempat_lahir TEXT NOT NULL,
  tanggal_lahir DATE NOT NULL,
  jenis_kelamin TEXT NOT NULL CHECK (jenis_kelamin IN ('L','P')),
  agama TEXT NOT NULL,
  alamat TEXT NOT NULL,
  asal_sekolah TEXT NOT NULL,
  nama_orangtua TEXT NOT NULL,
  no_hp TEXT NOT NULL,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.pendaftaran_ppdb ENABLE ROW LEVEL SECURITY;

-- Siapa pun (publik) boleh mendaftar
CREATE POLICY "Publik bisa mendaftar PPDB"
ON public.pendaftaran_ppdb
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Hanya admin (nanti) yang boleh baca - sementara tidak ada policy SELECT, jadi data aman tertutup
