export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  details: string | null;
  goal: string | null;
  features: string[];
  challenges: string | null;
  results: string | null;
  images: string[];
  github: string | null;
  link: string | null;
  stack: string[];
  period: string | null;
  team: string[];
  type: string | null;
  priority: string | null;
  status: string | null;
  created_at: string;
}
