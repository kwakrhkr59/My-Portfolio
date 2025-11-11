export interface Paper {
  id: string;
  title: string;
  role: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  keywords: string[];
  doi?: string;
  github?: string;
  website?: string;
  citations?: number;
  status: "Published" | "In Review" | "Preprint";
  impact?: string;
  methodology?: string;
  field: string;
}
