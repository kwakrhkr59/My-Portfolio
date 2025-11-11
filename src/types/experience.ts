import { ProjectShort } from "./project";

export interface ExperienceLinks {
  website?: string;
  certificate?: string;
  portfolio?: string;
}

export interface ExperienceDetails {
  overview: string;
  details: string[];
  responsibilities: string[];
  achievements: string[];
  features: string[];
  skills: string[];
  projects?: ProjectShort[];
  collaboration?: string;
  impact?: string;
  mentorship?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  details: ExperienceDetails;
  links?: ExperienceLinks;
}
