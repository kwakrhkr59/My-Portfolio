export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  details: string | null;
  goal: string | null;
  features: string[] | null;
  challenges: string | null;
  results: string | null;
  future_plans: string | null;
  images: string[] | null;
  github: string | null;
  link: string | null;
  stack: string[] | null;
  period: string | null;
  team: string[] | null;
  created_at: string | null;
  type?: string;
}
