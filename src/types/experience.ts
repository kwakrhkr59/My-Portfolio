// export interface Experience {
//   id: string;
//   title: string;
//   organization: string;
//   period: string;
//   description: string;
//   location?: string;
//   type: "Bootcamp" | "Internship" | "Research" | "Project";
//   details: {
//     overview: string;
//     responsibilities: string[];
//     achievements: string[];
//     technologies: string[];
//     skills: string[];
//     projects?: {
//       name: string;
//       description: string;
//       tech: string[];
//       outcome?: string;
//     }[];
//     mentorship?: string;
//     collaboration?: string;
//     impact?: string;
//   };
//   links?: {
//     website?: string;
//     certificate?: string;
//     portfolio?: string;
//   };
// }

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}
