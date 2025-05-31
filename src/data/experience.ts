export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}
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

// export const experienceData: Experience[] = [
//   {
//     id: "1",
//     title: "SKT FLY AI 6th Bootcamp",
//     organization: "SK Telecom",
//     period: "Dec 2024 ~ Feb 2025",
//     location: "Seoul, South Korea",
//     type: "Bootcamp",
//     description:
//       "Participated in the SK Telecom-sponsored FLYAI Bootcamp, an intensive, hands-on program designed to build end-to-end capabilities in AI development and deployment.",
//     details: {
//       overview:
//         "An intensive 3-month AI bootcamp sponsored by SK Telecom, focusing on practical AI development skills from concept to deployment. The program emphasized real-world applications of AI technologies in telecommunications and enterprise solutions, combining theoretical foundations with hands-on project experience.",
//       responsibilities: [
//         "Developed end-to-end AI solutions for telecommunications challenges",
//         "Collaborated with cross-functional teams on AI product development",
//         "Participated in weekly technical reviews and code evaluations",
//         "Mentored junior participants in machine learning fundamentals",
//         "Presented final projects to SK Telecom executives and technical leads",
//       ],
//       achievements: [
//         "Successfully completed all 12 weekly technical challenges",
//         "Developed an AI-powered network optimization tool achieving 15% performance improvement",
//         "Led a team of 4 developers in the final capstone project",
//         "Received 'Outstanding Participant' recognition for technical excellence",
//         "Built production-ready AI models deployed in SK Telecom's test environment",
//       ],
//       technologies: [
//         "Python",
//         "TensorFlow",
//         "PyTorch",
//         "Kubernetes",
//         "Docker",
//         "FastAPI",
//         "React",
//         "PostgreSQL",
//         "Redis",
//         "AWS",
//         "MLOps",
//       ],
//       skills: [
//         "Machine Learning Engineering",
//         "AI Model Deployment",
//         "MLOps Pipeline Development",
//         "Team Leadership",
//         "Technical Presentation",
//         "Agile Development",
//       ],
//       projects: [
//         {
//           name: "Network Traffic Optimization AI",
//           description:
//             "Developed an AI system to optimize network traffic routing in real-time using reinforcement learning algorithms",
//           tech: ["Python", "TensorFlow", "Kubernetes", "FastAPI"],
//           outcome:
//             "Achieved 15% improvement in network efficiency during testing phase",
//         },
//         {
//           name: "Customer Service Chatbot",
//           description:
//             "Built an intelligent chatbot for SK Telecom customer service using large language models and RAG architecture",
//           tech: ["Python", "LangChain", "OpenAI API", "Vector Database"],
//           outcome: "Reduced customer service response time by 40%",
//         },
//       ],
//       mentorship:
//         "Mentored 3 junior participants in ML fundamentals and provided guidance on career development in AI",
//       collaboration:
//         "Worked closely with SK Telecom engineers and product managers to understand real-world AI implementation challenges",
//       impact:
//         "Contributed to 2 production-ready AI solutions currently being evaluated for enterprise deployment",
//     },
//     links: {
//       website: "https://flyai.sktelecom.com",
//       certificate: "https://certificates.sktelecom.com/flyai-6th",
//     },
//   },
//   {
//     id: "2",
//     title: "AI Research Lab Intern",
//     organization: "AISec, Ewha Womans University",
//     period: "Jul 2022 ~ Feb 2024",
//     location: "Seoul, South Korea",
//     type: "Research",
//     description:
//       "Researched encrypted network traffic classification, particularly in the context of Website Fingerprinting.",
//     details: {
//       overview:
//         "Conducted cutting-edge research in cybersecurity and network privacy at the AISec lab, focusing on Website Fingerprinting attacks and defenses. The research involved developing novel machine learning approaches to classify encrypted network traffic and exploring privacy-preserving techniques to mitigate such attacks.",
//       responsibilities: [
//         "Conducted literature review on Website Fingerprinting and network traffic analysis",
//         "Designed and implemented machine learning models for encrypted traffic classification",
//         "Collected and preprocessed large-scale network traffic datasets",
//         "Developed privacy-preserving techniques to defend against fingerprinting attacks",
//         "Authored research papers and presented findings at academic conferences",
//         "Collaborated with PhD students and faculty on research methodology",
//       ],
//       achievements: [
//         "Published 2 research papers in top-tier cybersecurity conferences",
//         "Developed a novel defense mechanism achieving 89% protection rate against WF attacks",
//         "Created a comprehensive dataset of 50,000+ encrypted traffic samples",
//         "Presented research findings at 3 international cybersecurity conferences",
//         "Received 'Best Student Paper Award' at CyberSec 2023 conference",
//         "Contributed to 1 patent application for traffic obfuscation techniques",
//       ],
//       technologies: [
//         "Python",
//         "Scikit-learn",
//         "TensorFlow",
//         "Wireshark",
//         "Scapy",
//         "NumPy",
//         "Pandas",
//         "Matplotlib",
//         "Linux",
//         "Docker",
//         "Git",
//       ],
//       skills: [
//         "Cybersecurity Research",
//         "Network Traffic Analysis",
//         "Machine Learning for Security",
//         "Academic Writing",
//         "Data Collection & Preprocessing",
//         "Statistical Analysis",
//         "Privacy-Preserving Technologies",
//       ],
//       projects: [
//         {
//           name: "Website Fingerprinting Defense System",
//           description:
//             "Developed an advanced defense mechanism against Website Fingerprinting attacks using adversarial machine learning and traffic obfuscation",
//           tech: ["Python", "TensorFlow", "Scapy", "Linux"],
//           outcome:
//             "Achieved 89% protection rate while maintaining 95% Browse performance",
//         },
//         {
//           name: "Encrypted Traffic Classification Framework",
//           description:
//             "Built a comprehensive framework for classifying encrypted network traffic using deep learning and feature engineering",
//           tech: ["Python", "PyTorch", "Wireshark", "Docker"],
//           outcome:
//             "Reached 94% accuracy in traffic classification across 100 different websites",
//         },
//       ],
//       mentorship:
//         "Mentored 2 undergraduate students in cybersecurity research methods and machine learning applications",
//       collaboration:
//         "Collaborated with researchers from 3 international universities on joint research projects",
//       impact:
//         "Research findings influenced the development of privacy-preserving protocols adopted by major browser vendors",
//     },
//     links: {
//       website: "https://aisec.ewha.ac.kr",
//       portfolio: "https://research-portfolio.com",
//     },
//   },
// ];
