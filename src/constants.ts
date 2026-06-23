import { LanguageProjects, Certificate, ResumeContent, AcademicProject } from './types';

export const PROJECTS: LanguageProjects = {
  data: [
    {
      title: "Churn Prediction Interface",
      description: "End-to-end ML solution from Databricks Hackathon. Integrates a predictive model with a clean web interface for decision markers.",
      url: "https://github.com/lucaskmk/Databricks-Hackathon",
      videoUrl: "https://www.youtube.com/watch?v=JsDl4ME_sWU"
    },
    {
      title: "Machine Learning (Adult Census)",
      description: "Advanced EDA, feature engineering, and predictive modeling for income classification (Classification & Regression).",
      url: "https://github.com/lucaskmk/Machine-Learning-Adult-Census"
    }
  ],
  api: [
    {
      title: "FastAPI NoSQL REST",
      description: "Recent development of high-performance APIs using FastAPI, implementing NoSQL logic and RESTful architectural patterns.",
      url: null
    },
    {
      title: "Full Stack Web Player",
      description: "Streaming platform with Django REST and React. Handled complex API integration and backend logic.",
      url: "https://github.com/lucaskmk/Web-Player",
      videoUrl: "https://youtu.be/o0PQdfjXw7I"
    },
    {
      title: "Django Notes Platform",
      description: "Full-stack notes service with PostgreSQL and Docker.",
      url: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
    }
  ],
  c: [
    {
      title: "Parallel Downloader (C)",
      description: "Demonstrates complex problem solving: multi-process management with fork(), signal handling, and robust resource cleanup.",
      url: "https://github.com/lucaskmk/Multi-process-Downloader"
    },
    {
      title: "Algorithm Analysis & Optimization",
      description: "Deep study of O, Ω, Θ complexity and implementation of efficient data structures for large-scale information.",
      url: "https://github.com/lucaskmk/Algorithms-Analysis"
    }
  ],
  python: [
    {
      title: "Battleship Strategy",
      description: "Strategic ocean battles with AI decision making logic.",
      url: "https://github.com/lucaskmk/EP2"
    }
  ],
  devops: [
    {
      title: "Terraform & IaC",
      description: "Infrastructure as Code for automated provisioning.",
      url: null
    },
    {
      title: "OpenStack Private Cloud",
      description: "Configuration of multi-tenant virtualized environments.",
      url: null
    }
  ],
  embedded: [
    {
      title: "MPU6050 Driver",
      description: "C library for real-time sensor reading with RTOS.",
      url: null
    },
    {
      title: "ALU & FSM Logic (VHDL)",
      description: "Hardware level logic design and implementation.",
      url: null
    }
  ]
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Google Cybersecurity Professional",
    description: "Professional Certificate from Google via Coursera including 8 comprehensive courses covering the entire cybersecurity landscape.",
    image: "images/certificates/Google_Cybersecurity_Professional.png",
    url: "#",
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 2,
    title: "Foundational C# with Microsoft",
    description: "Developer Certification from freeCodeCamp and Microsoft, covering core C# programming concepts and application development.",
    image: "images/certificates/Csharp.png",
    url: "#",
    direction: 'right',
    category: 'Programming'
  },
  {
    id: 3,
    title: "C Intermediate",
    description: "Intermediate level certification in C programming from Sololearn, focusing on advanced data structures and algorithms.",
    image: "images/certificates/C.jpg",
    url: "#",
    direction: 'left',
    category: 'Programming'
  },
  {
    id: 4,
    title: "Análise de Dados",
    description: "Data Analysis certification from Unova Cursos, covering statistical methods and data processing techniques.",
    image: "images/certificates/EscolaWeb_AnaliseDados.png",
    url: "#",
    direction: 'right',
    category: 'Data'
  },
  {
    id: 5,
    title: "AWS Discovery Day",
    description: "Cloud Computing training by Kasolution and AWS, introducing fundamental cloud concepts and services.",
    image: "images/certificates/AWS_DiscoveryDay.png",
    url: "#",
    direction: 'left',
    category: 'Cloud'
  },
  {
    id: 6,
    title: "Foundations of Cybersecurity",
    description: "Google certification covering the core principles of cybersecurity and the professional landscape.",
    image: "images/certificates/Google_Foundations_Cybersecurity.png",
    url: "#",
    direction: 'right',
    category: 'Cybersecurity'
  },
  {
    id: 7,
    title: "Play It Safe: Manage Security Risks",
    description: "Google certification focused on identifying, assessing, and managing organizational security risks.",
    image: "images/certificates/Google_PlayItSafe_SecurityRisks.png",
    url: "#",
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 8,
    title: "Connect and Protect: Networks and Network Security",
    description: "Google certification covering network protocols, architecture, and defensive security measures.",
    image: "images/certificates/Google_Connect_Protect_Networks.png",
    url: "#",
    direction: 'right',
    category: 'Cybersecurity'
  },
  {
    id: 9,
    title: "Tools of the Trade: Linux and SQL",
    description: "Google certification focusing on essential technical tools for cybersecurity professionals: Linux and SQL.",
    image: "images/certificates/Google_Tools_Linux_SQL.png",
    url: "#",
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 10,
    title: "Assets, Threats, and Vulnerabilities",
    description: "Google certification covering asset management and the identification of threats and system vulnerabilities.",
    image: "images/certificates/Google_Assets_Threats_Vulnerabilities.png",
    url: "#",
    direction: 'right',
    category: 'Cybersecurity'
  },
  {
    id: 11,
    title: "AWS Academy Graduate — Cloud Foundations",
    description: "AWS Academy certification covering core cloud concepts, AWS global infrastructure, compute, storage, databases, and security fundamentals.",
    image: "images/certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
    url: "images/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260607-31-y5eait.pdf",
    direction: 'left',
    category: 'Cloud',
    badge: true
  }
];

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: 9,
    title: "CloudPay — Cloud Computing Project",
    description: "Distributed payment processing system designed for cloud infrastructure. Covers architecture design, deployment, and scalability on AWS services.",
    image: "",
    tags: ["AWS", "Cloud", "Architecture"],
    date: "2025",
    url: "https://github.com/lucaskmk/ComputacaoNuvem_Projeto",
    fileUrl: "images/projects/relatorio-tecnico-cloudpay.pdf"
  },
  {
    id: 10,
    title: "Triage System — Organizational Network Diagnosis",
    description: "Graph-based triage system for diagnosing organizational network structures. Identifies bottlenecks, key nodes, and communication failure points.",
    image: "",
    tags: ["Networks", "Python", "Graph Theory"],
    date: "2025",
    url: "https://lucaskmk.github.io/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais/",
    githubUrl: "https://github.com/lucaskmk/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais"
  },
  {
    id: 7,
    title: "Churn Prediction Interface",
    description: "End-to-end solution developed during the Databricks Hackathon. Integrates an ML model with a manager-focused web interface to democratize data analysis.",
    image: "https://picsum.photos/seed/databricks/800/600",
    tags: ["Databricks", "ML", "Hackathon"],
    date: "2024",
    videoUrl: "https://www.youtube.com/watch?v=JsDl4ME_sWU"
  },
  {
    id: 8,
    title: "Multi-process Downloader",
    description: "C-based parallel downloader using fork() and waitpid(). Features robust signal handling and real-time process status monitoring.",
    image: "https://picsum.photos/seed/downloader/800/600",
    tags: ["C", "Linux", "Systems"],
    date: "2024"
  },
  {
    id: 1,
    title: "Private Cloud OpenStack",
    description: "Configuration of multi-tenant environments, SDN virtual networks, and Keystone identity management with a focus on isolation and security.",
    image: "https://picsum.photos/seed/openstack/800/600",
    tags: ["OpenStack", "SDN", "Cloud"],
    date: "2024"
  },
  {
    id: 2,
    title: "Bare-Metal Provisioning",
    description: "Implementation of automated infrastructure for hardware management and orchestration of large-scale distributed applications using MAAS and Juju.",
    image: "https://picsum.photos/seed/maas/800/600",
    tags: ["MAAS", "Juju", "Infrastructure"],
    date: "2024"
  },
  {
    id: 3,
    title: "Terraform Automation (IaC)",
    description: "Development of declarative scripts for infrastructure provisioning with full idempotency and environment standardization.",
    image: "https://picsum.photos/seed/terraform/800/600",
    tags: ["Terraform", "IaC", "Automation"],
    date: "2024"
  },
  {
    id: 4,
    title: "Light Following Robot",
    description: "Autonomous vehicle project with PWM control via oscillator circuits and operational amplifiers — speed control by LDR without microcontrollers.",
    image: "https://picsum.photos/seed/robot/800/600",
    tags: ["Analog", "PWM", "Robotics"],
    date: "2024"
  },
  {
    id: 5,
    title: "MPU6050 Firmware Driver",
    description: "C library development for accelerometer and gyroscope reading via I2C, integrated with RTOS (tasks and semaphores) on Raspberry Pi Pico.",
    image: "https://picsum.photos/seed/pico/800/600",
    tags: ["C", "RTOS", "Embedded"],
    date: "2024"
  },
  {
    id: 6,
    title: "Full Stack Web Player",
    description: "Audio streaming and download platform integrated with the YouTube API. Django REST backend and React (Vite) frontend.",
    image: "https://picsum.photos/seed/webplayer/800/600",
    tags: ["Django", "React", "API"],
    date: "2024",
    videoUrl: "https://youtu.be/o0PQdfjXw7I"
  }
];

export const RESUME_EN: ResumeContent = {
  profile: "I am a Computer Engineering student at Insper with a solid foundation in Python, SQL, and Data Science libraries. I have practical experience in exploratory analysis, predictive modeling (classification and regression), network analysis, and ML pipelines. I was a participant in the Databricks Hackathon, where I developed an end-to-end Churn prediction solution with a web interface accessible to managers. I am disciplined and results-oriented, with fluency in English and the ability to communicate technical insights to non-technical audiences.",
  education: [
    { school: "Insper", detail: "Computer Engineering (2023 – 2028) - Focus on Data Engineering & Science" },
    { school: "Colégio Visconde de Porto Seguro", detail: "English and German courses" }
  ],
  international: [
    { location: "United States", detail: "Lived for 4 years (2006–2011), achieving full cultural and linguistic immersion." },
    { location: "Canada", detail: "Exchange program, developing intercultural adaptability and advanced technical conversation skills." }
  ],
  skills: [
    { category: "Languages", items: ["Python", "SQL (MySQL · SQLite)", "C", "Java", "C#", "JavaScript", "VHDL", "Assembly (MIPS)"] },
    { category: "Data Science & AI", items: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "PCA", "t-SNE", "UMAP", "ML Pipelines"] },
    { category: "Web & Backend", items: ["FastAPI", "SQLAlchemy", "REST/JSON", "Django REST", "Node.js", "Next.js", "React (Vite)"] },
    { category: "Cloud & DevOps", items: ["Terraform (IaC)", "OpenStack", "Docker", "Kubernetes", "MAAS", "Juju", "Grafana", "Prometheus", "AWS"] },
    { category: "Problem Solving & Embedded", items: ["Algorithm Analysis", "Complexity (Big O)", "Linux Shell", "Firmware (C)", "RTOS", "VHDL"] }
  ],
  final: "My trajectory is marked by a continuous search for knowledge and evolution, always aiming for technical excellence and innovation."
};

export const RESUME_PT: ResumeContent = {
  profile: "Sou estudante de Engenharia da Computação no Insper com sólida base em Python, SQL e bibliotecas de Ciência de Dados. Tenho experiência prática em análise exploratória, modelagem preditiva (classificação e regressão), análise de redes e pipelines de ML. Participei do Hackathon Databricks, onde desenvolvi uma solução end-to-end de predição de Churn com interface web acessível a gestores. Sou disciplinado e orientado a resultados, com fluência em inglês e capacidade de comunicar insights técnicos para audiências não técnicas.",
  education: [
    { school: "Insper", detail: "Engenharia da Computação (2023 – 2028) - Foco em Engenharia & Ciência de Dados" },
    { school: "Colégio Visconde de Porto Seguro", detail: "Cursos de Inglês e Alemão" }
  ],
  international: [
    { location: "Estados Unidos", detail: "Residência por 4 anos (2006–2011), alfabetização e vivência cultural completa em inglês." },
    { location: "Canadá", detail: "Intercâmbio, desenvolvimento de adaptabilidade intercultural e fluência avançada em conversação técnica." }
  ],
  skills: [
    { category: "Linguagens", items: ["Python", "SQL (MySQL · SQLite)", "C", "Java", "C#", "JavaScript", "VHDL", "Assembly (MIPS)"] },
    { category: "Ciência de Dados & IA", items: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "PCA", "t-SNE", "UMAP", "ML Pipelines"] },
    { category: "Web & Backend", items: ["FastAPI", "SQLAlchemy", "REST/JSON", "Django REST", "Node.js", "Next.js", "React (Vite)"] },
    { category: "Nuvem & DevOps", items: ["Terraform (IaC)", "OpenStack", "Docker", "Kubernetes", "MAAS", "Juju", "Grafana", "Prometheus", "AWS"] },
    { category: "Resolução de Problemas & Embarcados", items: ["Análise de Algoritmos", "Complexidade (Big O)", "Linux Shell", "Firmware (C)", "RTOS", "VHDL"] }
  ],
  final: "Minha trajetória é marcada pela busca contínua por conhecimento e evolução, sempre visando a excelência técnica e inovação."
};

export const KNOWLEDGE_BASE = {
  languages: ["Python", "SQL (MySQL · SQLite)", "C", "Java", "C#", "JavaScript", "VHDL", "Assembly (MIPS)"],
  courses: [
    {
      name: "API & Backend Development",
      topics: ["FastAPI", "RESTful Architecture", "NoSQL (Database Design)", "Process Management", "Django REST"]
    },
    {
      name: "Data Engineering",
      topics: ["EDA", "Feature Engineering", "ML Pipelines", "Databricks", "Scikit-learn"]
    },
    {
      name: "Algorithm Analysis",
      topics: ["Computational Complexity (O, Ω, Θ)", "Sorting Algorithms", "Search Algorithms", "Rabin-Karp"]
    },
    {
      name: "Cloud Computing",
      topics: ["OpenStack", "Terraform", "AWS Fundamentals", "Bare-metal Provisioning"]
    },
    {
      name: "Embedded Systems",
      topics: ["Firmware in C", "RTOS", "I2C/SPI Communication", "VHDL Logic Design"]
    }
  ],
  tools: ["Valgrind", "GDB", "Docker", "Git", "Linux Shell"]
};
