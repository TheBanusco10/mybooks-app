interface Achievement {
  code: string;
  label: string;
  description: string;
  condition: (supabase: any) => Promise<boolean>;
}

export type { Achievement };
