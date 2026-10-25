const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    publication: "Research",
    experience: "Experience",
    blog: "Blog",
    contact: "Contact",
    externalTitle: "Opens an external link.",
    externalConfirm: "Do you want to open an external link?",
    menuOpen: "Open mobile menu",
    rotating: ["AI & Full-stack Developer", "Hyeonjeong's Portfolio"],
    switchLabel: "Switch language",
  },
  floating: {
    about: "About Me",
    projects: "Projects",
    publication: "Publication",
    awards: "Awards",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
  },
  hero: {
    hello: "Hello,",
    intro: "I'm Hyeonjeong Kwak, an AI & Full-stack developer.",
    desc: "From AI research to service development, I connect theory and practice to solve problems.\nThrough technology, I want to ease everyday inconveniences and create better value.",
    more: "Learn more",
  },
  profile: {
    name: "Hyeonjeong Kwak",
    role: "AI & Full-Stack Developer",
    university: "Computer Science & Mathematics @ Ewha Womans University",
    tagline: "Solving everyday problems with technology",
    description:
      "Grounded in AI research and full-stack development, I turn complex problems into practical services.\n\nBeyond exploring new technologies, I value the process of defining and solving problems from the real user's perspective.",
    cv: "Download Resume",
  },
  sections: {
    projects: {
      title: "Projects",
      desc: "Projects planned and built with AI and full-stack development technologies.",
    },
    publication: {
      title: "Publications",
      desc: "Research and academic achievements in artificial intelligence and cyber security.",
    },
    awards: {
      title: "Awards",
      desc: "Major awards in research and programming.",
    },
    experience: {
      title: "Experience",
      desc: "Experience built through AI research and hands-on projects.",
    },
    education: {
      title: "Education",
      desc: "",
    },
    skills: {
      title: "Skills",
      desc: "Key technologies used across projects and research.",
    },
    loadingProjects: "Loading projects...",
  },
  skillCategories: {
    languages: "Programming Languages",
    web: "Web Development",
    ai: "AI & Data Analysis",
    tools: "Dev Tools & Infrastructure",
  },
  education: {
    school: "Ewha Womans University",
    degree: "Computer Science & Engineering, Mathematics",
    period: "2021 – Present",
    gpa: "GPA",
    coursework: "Key Courses",
    courses:
      "Data Structures, Algorithms, Artificial Intelligence, Database Systems, Linear Algebra, Calculus, Probability & Statistics, Discrete Mathematics",
  },
  home: {
    projects: [
      {
        match: "Poever",
        desc: "A React Native mobile app that uses OpenPose to extract joint coordinates from side-view full-body images and analyze the user's posture.",
      },
      {
        match: "Silent Camera",
        desc: "A Flutter mobile app built to zoom in on and quietly photograph distant whiteboard content during lectures.",
      },
      {
        match: "ArtChemy",
        desc: "A conversational AI docent service built with a Vision-Language Model (VLM) to support visually impaired people in appreciating artworks.",
      },
      {
        match: "BOJ Auto Commit",
        desc: "A Chrome extension that automatically records Baekjoon Online Judge submission results to GitHub so you can manage your algorithm study history.",
      },
      {
        match: "What To Do?",
        desc: "A Flutter mobile app that recommends activities worth doing today based on context such as mood, location, and weather.",
      },
    ],
    publications: [
      {
        title:
          "An Inclusive AI Docent System for Accessible and Interactive Art Appreciation using Vision and Language Models",
        year: "2025",
        venue: "Journal of the Korea Society of Computer and Information",
        desc: "A study on a conversational AI docent system based on a Vision-Language Model to improve visually impaired people's access to artworks.",
      },
      {
        title:
          "StarPrint: Starlink Vulnerability Analysis and Transformer-Based Website Fingerprinting Attack",
        year: "2025",
        venue: "KIISC Summer Conference (CISC-S)",
        desc: "A study of security vulnerabilities in Starlink environments and a Transformer-based website fingerprinting attack.",
      },
      {
        title:
          "Exploring Vulnerabilities of Website Fingerprinting Defense Models through Deep Learning-Based Detection of Correlations in Split Data",
        year: "2024",
        venue: "KIISC Yeongnam Chapter Conference",
        desc: "A study of vulnerabilities in website fingerprinting defenses through correlation analysis of split network traffic.",
      },
      {
        title:
          "DeepCoAST: Unveiling Split Trace Correlation to Counter Traffic Splitting Defenses",
        year: "2024",
        venue: "IEEE Access",
        desc: "An analysis of vulnerabilities in website fingerprinting defenses by exploiting correlations between split traffic.",
      },
    ],
    awards: [
      {
        title: "KIISC Summer Conference President's Award",
        year: "2025",
        org: "Korea Institute of Information Security & Cryptology (KIISC)",
        desc: "President's Award at the CISC-S'25 conference.",
      },
      {
        title: "Grand Prize, College of AI Programming Contest",
        year: "2024",
        org: "College of Artificial Intelligence, Ewha Womans University",
        desc: "1st place at the 2024 College of Artificial Intelligence Programming Contest.",
      },
      {
        title: "1st Place, E-PPER Programming Contest",
        year: "2024",
        org: "School of Software, Ewha Womans University",
        desc: "1st place at the 2024 E-PPER Programming Contest.",
      },
      {
        title: "KIISC Yeongnam Chapter Conference President's Award",
        year: "2023",
        org: "Korea Institute of Information Security & Cryptology (KIISC)",
        desc: "President's Award at the KIISC Yeongnam Chapter Conference.",
      },
    ],
    experiences: [
      {
        role: "Undergraduate Research Intern",
        org: "KAIST SAILab",
        period: "Jun 19, 2025 – Present",
        desc: "Took part in explainable AI (XAI) and generative AI research, exploring the interpretability and robustness of time-series deep learning models.",
      },
      {
        role: "Undergraduate Research Intern",
        org: "AISec Lab, Ewha Womans University",
        period: "Jul 2022 – Feb 2024",
        desc: "Analyzed encrypted traffic from anonymity networks such as Tor and researched website fingerprinting attacks and defenses.",
      },
      {
        role: "Trainee",
        org: "SK Telecom FLY AI",
        period: "Dec 2024 – Feb 2025",
        desc: "Completed a practical AI and DevOps training program and developed an AI-based chatbot that describes artworks for visually impaired people.",
      },
    ],
  },
  projectPreview: {
    error: "Failed to load project data.",
    retry: "Retry",
    empty: "No projects yet.",
    emptyHint: "Check back later for new projects!",
    viewDetails: "View Details →",
  },
  pages: {
    projects: {
      title: "My Projects",
      description:
        "Explore my collection of projects showcasing various technologies and creative solutions.",
    },
    experience: {
      title: "Professional Experience",
      description:
        "Detailed journey through my professional experiences, research contributions, and key achievements.",
    },
    publication: {
      title: "Academic Publications",
      description:
        "Explore my research contributions in AI and Cyber Security.",
    },
    contact: {
      title: "Get in Touch",
      description:
        "I welcome the chance to think through new ideas and technologies together and to build valuable services.\nFeel free to reach out for project collaborations or any other inquiries.",
    },
  },
  projectsPage: {
    moreTitle: "Want to see more?",
    moreDesc: "Check out all my projects and contributions on GitHub",
    moreButton: "View All Projects on GitHub",
  },
  contact: {
    connect: "Let's Connect",
    ready: "Ready to start a conversation?",
    email: "Email",
    location: "Location",
    locationValue: "Seoul, South Korea",
    follow: "Follow Me",
    sendTitle: "Send a Message",
    sendDesc:
      "Fill out the form below and I'll get back to you as soon as possible.",
    name: "Your Name",
    namePlaceholder: "Enter your name",
    yourEmail: "Your Email",
    emailPlaceholder: "Enter your email",
    subject: "Subject",
    subjectPlaceholder: "What's this about?",
    message: "Your Message",
    messagePlaceholder: "Tell me about your project or just say hello!",
    sending: "Sending Message...",
    send: "Send Message",
    success: "✨ Message sent successfully! I'll get back to you soon.",
    error:
      "❌ Failed to send message. Please try again or contact me directly.",
  },
  projectCard: {
    explore: "Explore Project",
    keyFeatures: "Key Features",
    techStack: "Tech Stack",
    challenge: "Challenge:",
    solo: "Solo",
    members: "{n} members",
    moreFeatures: "+{n} more features",
    featured: "Featured",
    project: "Project",
  },
  paper: {
    authors: "Authors:",
    abstract: "Abstract",
    more: "More",
    less: "Less",
    impact: "Impact",
    methodology: "Methodology",
    keywords: "Keywords",
    authorsCount: "{n} authors",
    paper: "Paper",
    code: "Code",
    demo: "Demo",
    titleExpand: "Show full title",
    titleCollapse: "Collapse title",
  },
  timeline: {
    more: "Read more",
    summary: "Summary",
    responsibilities: "Key Responsibilities",
    achievements: "Key Achievements",
    features: "Features",
    skills: "Skills Developed",
    projects: "Major Projects",
    website: "Website",
    certificate: "Certificate",
    portfolio: "Portfolio",
  },
  detail: {
    back: "Back to Projects",
    notFound: "Project not found or an error occurred.",
    project: "Project",
    unknownPeriod: "Unknown period",
    overview: "Overview",
    noDescription: "No description available.",
    goal: "Project Goal",
    keyFeatures: "Key Features",
    challenges: "Challenges & Solutions",
    results: "Results & Achievements",
    technologies: "Technologies",
    team: "Team",
    links: "Links",
    visit: "Visit Project",
    github: "GitHub Repository",
    questions: "Have Questions?",
    questionsDesc:
      "Feel free to reach out if you have any questions about this project.",
    contactMe: "Contact Me",
  },
};

export type Dictionary = typeof en;

const ko: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    publication: "Research",
    experience: "Experience",
    blog: "Blog",
    contact: "Contact",
    externalTitle: "외부 링크로 이동합니다.",
    externalConfirm: "외부 링크로 이동하시겠습니까?",
    menuOpen: "모바일 메뉴 열기",
    rotating: ["AI & Fullstack 개발자", "곽현정 포트폴리오"],
    switchLabel: "언어 전환",
  },
  floating: {
    about: "About Me",
    projects: "Projects",
    publication: "Publication",
    awards: "Awards",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
  },
  hero: {
    hello: "안녕하세요,",
    intro: "AI & 풀스택 개발자 곽현정입니다.",
    desc: "AI 연구부터 서비스 개발까지, 이론과 실무를 연결하며 문제를 해결합니다.\n기술을 통해 일상의 불편함을 개선하고, 더 나은 가치를 만들어가고자 합니다.",
    more: "자세히 알아보기",
  },
  profile: {
    name: "곽현정",
    role: "AI & Full-Stack Developer",
    university: "이화여자대학교 컴퓨터공학·수학 전공",
    tagline: "일상의 문제를 기술로 해결하다",
    description:
      "인공지능 연구와 풀스택 개발을 기반으로, 복잡한 문제를 실용적인 서비스로 구현하는 개발자입니다.\n\n새로운 기술을 탐구하는 데 그치지 않고, 실제 사용자의 관점에서 문제를 정의하고 해결하는 과정에 가치를 둡니다.",
    cv: "이력서 다운로드",
  },
  sections: {
    projects: {
      title: "Projects",
      desc: "AI와 풀스택 개발 기술을 활용하여 기획하고 구현한 프로젝트를 소개합니다.",
    },
    publication: {
      title: "Publications",
      desc: "인공지능과 사이버 보안 분야에서 수행한 연구 및 학술적 성과를 소개합니다.",
    },
    awards: {
      title: "Awards",
      desc: "연구 및 프로그래밍 분야에서의 주요 수상 성과입니다.",
    },
    experience: {
      title: "Experience",
      desc: "AI 연구와 실무 프로젝트를 통해 쌓아온 경험을 소개합니다.",
    },
    education: {
      title: "Education",
      desc: "",
    },
    skills: {
      title: "Skills",
      desc: "프로젝트와 연구 과정에서 활용한 주요 기술입니다.",
    },
    loadingProjects: "프로젝트를 불러오는 중...",
  },
  skillCategories: {
    languages: "Programming Languages",
    web: "Web Development",
    ai: "AI & Data Analysis",
    tools: "Dev Tools & Infrastructure",
  },
  education: {
    school: "이화여자대학교",
    degree: "컴퓨터공학·수학 전공",
    period: "2021 ~ 현재",
    gpa: "학점",
    coursework: "주요 이수 과목",
    courses:
      "자료구조, 알고리즘, 인공지능, 데이터베이스, 선형대수학, 미적분학, 확률과 통계, 이산수학",
  },
  home: {
    projects: [
      {
        match: "Poever",
        desc: "OpenPose를 활용하여 측면 전신 이미지에서 관절 좌표를 추출하고, 사용자의 자세를 분석하는 React Native 기반 모바일 애플리케이션입니다.",
      },
      {
        match: "Silent Camera",
        desc: "강의 중 멀리 있는 판서 내용을 확대하고 조용히 촬영할 수 있도록 개발한 Flutter 기반 모바일 애플리케이션입니다.",
      },
      {
        match: "ArtChemy",
        desc: "시각장애인의 미술 작품 감상을 지원하기 위해 Vision-Language Model(VLM)을 활용하여 개발한 대화형 AI 도슨트 서비스입니다.",
      },
      {
        match: "BOJ Auto Commit",
        desc: "백준 온라인 저지의 문제 제출 결과를 GitHub에 자동으로 기록하여 알고리즘 학습 이력을 관리할 수 있도록 개발한 Chrome 확장 프로그램입니다.",
      },
      {
        match: "What To Do?",
        desc: "사용자의 기분, 위치, 날씨 등의 상황 정보를 바탕으로 오늘 할 만한 활동을 추천하는 Flutter 기반 모바일 애플리케이션입니다.",
      },
    ],
    publications: [
      {
        title:
          "An Inclusive AI Docent System for Accessible and Interactive Art Appreciation using Vision and Language Models",
        year: "2025",
        venue: "한국컴퓨터정보학회 논문지",
        desc: "시각장애인의 미술 작품 접근성 향상을 위한 Vision-Language Model 기반 대화형 AI 도슨트 시스템 연구",
      },
      {
        title:
          "StarPrint: Starlink Vulnerability Analysis and Transformer-Based Website Fingerprinting Attack",
        year: "2025",
        venue: "한국정보보호학회 하계학술대회",
        desc: "Starlink 환경의 보안 취약점 분석 및 Transformer 기반 웹사이트 핑거프린팅 공격 연구",
      },
      {
        title:
          "Exploring Vulnerabilities of Website Fingerprinting Defense Models through Deep Learning-Based Detection of Correlations in Split Data",
        year: "2024",
        venue: "한국정보보호학회 영남지부학술대회",
        desc: "분할된 네트워크 트래픽의 상관관계 분석을 통한 웹사이트 핑거프린팅 방어 기법의 취약점 연구",
      },
      {
        title:
          "DeepCoAST: Unveiling Split Trace Correlation to Counter Traffic Splitting Defenses",
        year: "2024",
        venue: "IEEE Access",
        desc: "분할 트래픽 간 상관관계를 활용한 웹사이트 핑거프린팅 방어 기법의 취약점 분석 연구",
      },
    ],
    awards: [
      {
        title: "한국정보보호학회 하계학술대회 학회장상",
        year: "2025",
        org: "한국정보보호학회",
        desc: "CISC-S'25 학술대회 학회장상 수상",
      },
      {
        title: "인공지능대학 프로그래밍 경진대회 대상",
        year: "2024",
        org: "이화여자대학교 인공지능대학",
        desc: "2024 인공지능대학 프로그래밍 경진대회 1위",
      },
      {
        title: "E-PPER 프로그래밍 경진대회 1위",
        year: "2024",
        org: "이화여자대학교 소프트웨어학부",
        desc: "2024 E-PPER 프로그래밍 경진대회 1위",
      },
      {
        title: "한국정보보호학회 영남지부학술대회 학회장상",
        year: "2023",
        org: "한국정보보호학회",
        desc: "한국정보보호학회 영남지부학술대회 학회장상 수상",
      },
    ],
    experiences: [
      {
        role: "학부 연구 인턴",
        org: "KAIST SAILab",
        period: "2025.06.19 ~ 현재",
        desc: "설명가능한 인공지능(XAI) 및 생성형 AI 연구에 참여하며, 시계열 딥러닝 모델의 해석 가능성과 강건성을 탐구했습니다.",
      },
      {
        role: "학부 연구 인턴",
        org: "이화여자대학교 AISec Lab",
        period: "2022.07 ~ 2024.02",
        desc: "Tor 브라우저 등 익명 네트워크 환경에서 발생하는 암호화 트래픽을 분석하고, 웹사이트 핑거프린팅 공격 및 방어 기법을 연구했습니다.",
      },
      {
        role: "교육생",
        org: "SK텔레콤 FLY AI",
        period: "2024.12 ~ 2025.02",
        desc: "AI 및 DevOps 실무 교육과정을 이수하고, 시각장애인을 위한 AI 기반 미술 작품 해설 챗봇을 개발했습니다.",
      },
    ],
  },
  projectPreview: {
    error: "프로젝트 데이터를 불러오는데 실패했습니다.",
    retry: "다시 시도",
    empty: "아직 프로젝트가 없습니다.",
    emptyHint: "곧 새로운 프로젝트가 추가됩니다!",
    viewDetails: "자세히 보기 →",
  },
  pages: {
    projects: {
      title: "My Projects",
      description:
        "AI부터 웹 서비스까지, 다양한 기술을 활용하여 문제를 해결한 프로젝트를 소개합니다.",
    },
    experience: {
      title: "Professional Experience",
      description:
        "실무 프로젝트와 연구개발 과정에서 쌓아온 경험, 담당 역할 및 주요 성과를 소개합니다.",
    },
    publication: {
      title: "Academic Publications",
      description:
        "인공지능과 사이버 보안 분야에서 수행한 연구와 학술적 성과를 소개합니다.",
    },
    contact: {
      title: "Get in Touch",
      description:
        "새로운 아이디어와 기술을 함께 고민하고, 가치 있는 서비스를 만들어가는 기회를 환영합니다.\n프로젝트 협업이나 기타 문의가 있으시면 편하게 연락해 주세요.",
    },
  },
  projectsPage: {
    moreTitle: "더 보고 싶으신가요?",
    moreDesc: "GitHub에서 모든 프로젝트와 기여 내역을 확인하세요",
    moreButton: "GitHub에서 전체 프로젝트 보기",
  },
  contact: {
    connect: "함께 이야기해요",
    ready: "대화를 시작할 준비가 되셨나요?",
    email: "이메일",
    location: "위치",
    locationValue: "대한민국 서울",
    follow: "팔로우",
    sendTitle: "메시지 보내기",
    sendDesc: "아래 양식을 작성해 주시면 최대한 빨리 답장드리겠습니다.",
    name: "이름",
    namePlaceholder: "이름을 입력하세요",
    yourEmail: "이메일",
    emailPlaceholder: "이메일을 입력하세요",
    subject: "제목",
    subjectPlaceholder: "어떤 내용인가요?",
    message: "메시지",
    messagePlaceholder:
      "프로젝트에 대해 이야기해 주시거나 가볍게 인사해 주세요!",
    sending: "전송 중...",
    send: "메시지 보내기",
    success: "✨ 메시지가 전송되었습니다! 곧 답장드릴게요.",
    error: "❌ 전송에 실패했습니다. 다시 시도하시거나 직접 연락해 주세요.",
  },
  projectCard: {
    explore: "프로젝트 보기",
    keyFeatures: "주요 기능",
    techStack: "기술 스택",
    challenge: "도전 과제:",
    solo: "개인",
    members: "{n}명",
    moreFeatures: "+{n}개 기능 더 있음",
    featured: "대표작",
    project: "프로젝트",
  },
  paper: {
    authors: "저자:",
    abstract: "초록",
    more: "더보기",
    less: "접기",
    impact: "영향",
    methodology: "연구 방법",
    keywords: "키워드",
    authorsCount: "저자 {n}명",
    paper: "논문",
    code: "코드",
    demo: "데모",
    titleExpand: "제목 전체 보기",
    titleCollapse: "제목 접기",
  },
  timeline: {
    more: "더보기",
    summary: "요약",
    responsibilities: "주요 역할",
    achievements: "주요 성과",
    features: "기능",
    skills: "습득한 기술",
    projects: "주요 프로젝트",
    website: "웹사이트",
    certificate: "수료증",
    portfolio: "포트폴리오",
  },
  detail: {
    back: "프로젝트 목록으로",
    notFound: "프로젝트를 찾을 수 없거나 오류가 발생했습니다.",
    project: "프로젝트",
    unknownPeriod: "기간 미정",
    overview: "개요",
    noDescription: "설명이 없습니다.",
    goal: "프로젝트 목표",
    keyFeatures: "주요 기능",
    challenges: "도전 과제와 해결",
    results: "결과 및 성과",
    technologies: "사용 기술",
    team: "팀",
    links: "링크",
    visit: "프로젝트 방문",
    github: "GitHub 저장소",
    questions: "궁금한 점이 있으신가요?",
    questionsDesc: "이 프로젝트에 대해 궁금한 점이 있다면 편하게 연락 주세요.",
    contactMe: "연락하기",
  },
};

export const dictionaries = { ko, en };
export type Lang = keyof typeof dictionaries;
