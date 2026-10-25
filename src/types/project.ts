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
  en?: Partial<
    Pick<
      Project,
      | "title"
      | "summary"
      | "details"
      | "goal"
      | "features"
      | "challenges"
      | "results"
    >
  >;
}

export interface ProjectShort {
  title: string;
  summary: string;
  features: string[];
  outcome: string;
}
