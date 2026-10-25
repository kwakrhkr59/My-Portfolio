export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  description: string;
  featured: boolean;
  order: number;
  en?: Partial<Pick<Award, "title" | "organization" | "description">>;
}
