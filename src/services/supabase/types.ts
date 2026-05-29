export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      berita: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          category: string | null
          thumbnail_url: string | null
          status: "draft" | "published"
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          category?: string | null
          thumbnail_url?: string | null
          status?: "draft" | "published"
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["berita"]["Insert"]>
        Relationships: []
      }
      fasilitas: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          created_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["fasilitas"]["Insert"]>
        Relationships: []
      }
      galeri: {
        Row: {
          id: string
          title: string
          description: string | null
          media_url: string
          media_type: "photo" | "video"
          event_date: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          media_url: string
          media_type: "photo" | "video"
          event_date?: string | null
          created_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["galeri"]["Insert"]>
        Relationships: []
      }
      guru_staff: {
        Row: {
          id: string
          full_name: string
          position: string
          type: "guru" | "staff"
          photo_url: string | null
          bio: string | null
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          position: string
          type: "guru" | "staff"
          photo_url?: string | null
          bio?: string | null
          created_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["guru_staff"]["Insert"]>
        Relationships: []
      }
      dokumen: {
        Row: {
          id: string
          title: string
          file_url: string
          file_type: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          file_url: string
          file_type: string
          created_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["dokumen"]["Insert"]>
        Relationships: []
      }
      website_config: {
        Row: {
          id: string
          school_name: string | null
          history: string | null
          vision: string | null
          mission: string | null
          address: string | null
          phone: string | null
          email: string | null
          map_embed_url: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          school_name?: string | null
          history?: string | null
          vision?: string | null
          mission?: string | null
          address?: string | null
          phone?: string | null
          email?: string | null
          map_embed_url?: string | null
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["website_config"]["Insert"]>
        Relationships: []
      }
      pendaftaran_ppdb: {
        Row: {
          agama: string
          alamat: string
          asal_sekolah: string
          created_at: string
          email: string | null
          id: string
          jenis_kelamin: string
          nama_lengkap: string
          nama_orangtua: string
          nisn: string | null
          no_hp: string
          status: string
          tanggal_lahir: string
          tempat_lahir: string
        }
        Insert: {
          agama: string
          alamat: string
          asal_sekolah: string
          created_at?: string
          email?: string | null
          id?: string
          jenis_kelamin: string
          nama_lengkap: string
          nama_orangtua: string
          nisn?: string | null
          no_hp: string
          status?: string
          tanggal_lahir: string
          tempat_lahir: string
        }
        Update: Partial<Database["public"]["Tables"]["pendaftaran_ppdb"]["Insert"]>
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: {
      berita_status: "draft" | "published"
      media_type: "photo" | "video"
      staff_type: "guru" | "staff"
    }
    CompositeTypes: { [_ in never]: never }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Insert: infer I }
      ? I
      : never
    : never

export const Constants = {
  public: {
    Enums: {
      berita_status: ["draft", "published"],
      media_type: ["photo", "video"],
      staff_type: ["guru", "staff"],
    },
  },
} as const
