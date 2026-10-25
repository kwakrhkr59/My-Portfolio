export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  description: string;
  en?: Partial<Pick<Award, "title" | "organization" | "description">>;
}
