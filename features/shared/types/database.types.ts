export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      books: {
        Row: {
          author: string | null
          categories: string[] | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: number
          image_url: string | null
          number_pages: number | null
          score: number | null
          status: Database["public"]["Enums"]["status"] | null
          title: string | null
          type: Database["public"]["Enums"]["type"] | null
          user_id: string | null
        }
        Insert: {
          author?: string | null
          categories?: string[] | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          image_url?: string | null
          number_pages?: number | null
          score?: number | null
          status?: Database["public"]["Enums"]["status"] | null
          title?: string | null
          type?: Database["public"]["Enums"]["type"] | null
          user_id?: string | null
        }
        Update: {
          author?: string | null
          categories?: string[] | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          image_url?: string | null
          number_pages?: number | null
          score?: number | null
          status?: Database["public"]["Enums"]["status"] | null
          title?: string | null
          type?: Database["public"]["Enums"]["type"] | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          achievements: string[]
          created_at: string
          email: string
          id: string
          image_url: string | null
          is_private: boolean
          settings: Json
          username: string
        }
        Insert: {
          achievements?: string[]
          created_at?: string
          email: string
          id: string
          image_url?: string | null
          is_private?: boolean
          settings?: Json
          username: string
        }
        Update: {
          achievements?: string[]
          created_at?: string
          email?: string
          id?: string
          image_url?: string | null
          is_private?: boolean
          settings?: Json
          username?: string
        }
        Relationships: []
      }
      reading_clubs: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          is_private: boolean | null
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          is_private?: boolean | null
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          is_private?: boolean | null
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      reading_clubs_members: {
        Row: {
          club_id: number | null
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          club_id?: number | null
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          club_id?: number | null
          created_at?: string | null
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reading_clubs_members_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "reading_clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_clubs_members_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reading_clubs_messages: {
        Row: {
          club_id: number | null
          content: string
          created_at: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          club_id?: number | null
          content: string
          created_at?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          club_id?: number | null
          content?: string
          created_at?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reading_clubs_messages_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "reading_clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_clubs_messages_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_top_categories: {
        Args: { limit_num?: number }
        Returns: {
          category: string
          count: number
        }[]
      }
      sync_existing_users_to_profiles: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      status: "reading" | "paused" | "finished"
      type: "paper" | "kindle"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      status: ["reading", "paused", "finished"],
      type: ["paper", "kindle"],
    },
  },
} as const

