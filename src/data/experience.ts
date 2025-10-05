export interface ProjectDetail {
  name: string;
  description: string;
  tech: string[];
  outcome: string;
}

export interface ExperienceLinks {
  website?: string;
  certificate?: string;
  portfolio?: string;
}

export interface ExperienceDetails {
  overview: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  skills: string[];
  projects?: ProjectDetail[];
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


export const experienceData = [
  {
    id: "1",
    title: "Undergraduate Intern",
    organization: "SAILab, KAIST",
    period: "Jun 2025 ~ Present",
    location: "Sungnam, South Korea",
    type: "Research",
    description:
      "Undergraduate intern conducting in-depth research on explainable AI (XAI) and diffusion models with a focus on adversarial perturbations under Prof. Jaesik Choi.",
    details: {
      overview:
        "Engaged in advanced studies on XAI and diffusion probabilistic models, emphasizing robustness against adversarial attacks. Conducted experiments to analyze model interpretability and vulnerability.",
      responsibilities: [
        "Reviewed recent literature on XAI and adversarial machine learning",
        "Implemented and evaluated diffusion model variants with adversarial perturbation techniques",
        "Collaborated with research team for experiment design and result analysis",
        "Prepared reports and presentations for lab meetings",
      ],
      achievements: [
        "Developed novel adversarial perturbation purification methods improving model robustness",
        "Contributed to ongoing research manuscripts for top AI conferences",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Jupyter Notebook",
        "Git",
        "Vessel",
      ],
      skills: [
        "Explainable AI research",
        "Adversarial machine learning",
        "Deep learning experimentation",
        "Collaborative research",
      ],
      projects: [
        {
          name: "Adversarially Robust Diffusion Models",
          description:
            "Designed and tested diffusion models with integrated adversarial perturbation to improve robustness and interpretability.",
          tech: ["PyTorch", "Python"],
          outcome:
            "Improved adversarial robustness metrics by 15% compared to baseline models.",
        },
      ],
      collaboration:
        "Collaborated with PhD students and fellow interns on model development and experiment coordination.",
      impact:
        "Advanced understanding of XAI methods applicable to safety-critical AI systems.",
    },
  },
  {
    id: "2",
    title: "FLYAI Bootcamp Participant",
    organization: "SK Telecom",
    period: "Dec 2024 ~ Feb 2025",
    location: "Seoul, South Korea",
    type: "Bootcamp",
    description:
      "Participated in an intensive bootcamp focused on AI development, DevOps, and MLOps practices in cloud environments, including hands-on LLM application deployment.",
    details: {
      overview:
        "Completed a 3-month program emphasizing practical AI and MLOps skills, with a curriculum covering cloud infrastructure, model deployment, and AI product development.",
      responsibilities: [
        "Developed end-to-end AI applications for telecommunications scenarios",
        "Collaborated on LLM-based real-world AI projects",
        "Managed cloud deployments and CI/CD pipelines",
        "Engaged in team code reviews and technical presentations",
      ],
      achievements: [
        "Successfully deployed production-ready AI models in cloud environments",
        "Led a project improving network optimization via reinforcement learning",
        "Recognized for technical excellence and teamwork",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Docker",
        "FastAPI",
        "React",
        "AWS",
        "MLOps",
      ],
      skills: [
        "Machine Learning Engineering",
        "Cloud Deployment",
        "MLOps Pipeline Development",
        "Team Collaboration",
        "Technical Communication",
      ],
      projects: [
        {
          name: "ArtChemy: AI-based Art Appreciation Assistant for Visually Impaired",
          description:
            "Integrated VLM-based image captioning models to generate detailed descriptions of artworks. Applied prompt engineering techniques to tailor explanations according to the flow of art appreciation. Continuously improved UI and conversational interfaces based on feedback from visually impaired users. Optimized image classification, metadata processing, and AWS S3 integration for efficient data management.",
          tech: ["AI/ML", "Prompt Engineering", "AWS S3", "Cloud Backend", "Frontend"],
          outcome:
            "Enhanced accessibility and user experience for visually impaired individuals, enabling richer cultural engagement through AI-assisted art appreciation.",
        },
      ],
      mentorship:
        "Mentored junior participants on machine learning fundamentals and career development.",
      collaboration:
        "Worked closely with engineers and product managers on AI integration challenges.",
      impact:
        "Contributed to multiple AI solutions evaluated for enterprise deployment.",
    },
    links: {
      portfolio: "https://github.com/orgs/SKT-FLY-AI-project/repositories",
    },
  },
  {
    id: "3",
    title: "Undergraduate Intern",
    organization: "AISec Lab, Ewha Womans University",
    period: "Jul 2022 ~ Feb 2024",
    location: "Seoul, South Korea",
    type: "Research",
    description:
      "Led research on AI-driven network security focusing on website fingerprinting and encrypted traffic classification.",
    details: {
      overview:
        "Conducted research on Website Fingerprinting attacks and defenses using machine learning approaches to analyze encrypted network traffic. Published findings in peer-reviewed journals and conferences.",
      responsibilities: [
        "Reviewed literature on encrypted traffic analysis and fingerprinting",
        "Designed and implemented deep learning models for traffic classification",
        "Collected and processed large-scale network traffic datasets",
        "Authored research papers and presented at academic conferences",
        "Collaborated with faculty and graduate students on research methodologies",
      ],
      achievements: [
        "Published papers in IEEE Access and KIISC journals",
        "Developed a traffic classification model achieving state-of-the-art accuracy",
        "Created a large-scale encrypted traffic dataset with over 50,000 samples",
        "Presented at multiple international cybersecurity conferences",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Wireshark",
        "NumPy",
        "Pandas",
        "Linux",
        "Docker",
        "Git",
      ],
      skills: [
        "Cybersecurity research",
        "Network traffic analysis",
        "Deep learning for security",
        "Academic writing and presentation",
      ],
      projects: [
        {
          name: "Website Fingerprinting Defense System",
          description:
            "Developed adversarial machine learning-based defense mechanisms against website fingerprinting attacks.",
          tech: ["Python", "TensorFlow", "Scapy"],
          outcome:
            "Achieved 89% defense effectiveness while maintaining network performance.",
        },
      ],
      mentorship:
        "Mentored undergraduate students in security research methods and machine learning applications.",
      collaboration:
        "Collaborated with international researchers on joint cybersecurity projects.",
      impact:
        "Contributed to advancements in privacy-preserving network security technologies.",
    },
    links: {
      website: "https://sites.google.com/view/ewha-aisec/",
    },
  },
];
