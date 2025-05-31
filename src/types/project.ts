export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  details: string | null;
  goal: string | null;
  period: string | null;
  priority: string | null;
  status: string | null;
  link: string | null;
  github: string | null;
  stack: string[];
  type: string | undefined;
  createdAt: string;
  features: string[];
  team: string[];
  results: string | null;
  challenges: string | null;
  images: string[];
}
