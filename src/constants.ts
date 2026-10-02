import { Project, Certificate, ResumeContent } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Financial RAG",
    description: "RAG pipeline for Q&A over financial documents: LLM + vector search over structured financial data. Dockerized full-stack app with separate frontend and backend containers and local LLM inference via Ollama.",
    areas: ['ai', 'data'],
    tags: ["Python", "RAG", "LLM", "Ollama", "Docker"],
    date: "2026",
    repoUrl: "https://github.com/lucaskmk/Financial-RAG",
    demoUrl: "https://youtu.be/nk8veFssCHg"
  },
  {
    title: "Ollama AI Agent Demo",
    description: "Local AI agent using Ollama (LLaMA 3.2). Full tool-use loop with planning, self-correction, confirmation for risky operations, and persistent memory across sessions.",
    areas: ['ai'],
    tags: ["Python", "LLM", "Ollama", "AI Agents"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/Ollama_AI-AgentDemo",
    demoUrl: "https://youtu.be/GWQIyWlHVg4"
  },
  {
    title: "CloudPay — Serverless Payments on AWS",
    description: "100% serverless payments platform MVP on AWS: 6 Lambda functions (Node.js), API Gateway, async processing via SQS, DynamoDB persistence, and a React frontend on S3. Load-tested with JMeter (100 concurrent users).",
    areas: ['cloud', 'backend'],
    tags: ["AWS", "Node.js", "Lambda", "SQS", "DynamoDB"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/ComputacaoNuvem_Projeto",
    reportUrl: "images/projects/relatorio-tecnico-cloudpay.pdf"
  },
  {
    title: "Portfolio Optimization with HRP/HERC",
    description: "Hierarchical Risk Parity and Hierarchical Equal Risk Contribution allocation with a backtesting pipeline comparing them to Equal-Weight and Buy & Hold (Sharpe, Sortino, Maximum Drawdown).",
    areas: ['data'],
    tags: ["Python", "Quant Finance", "Backtesting"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/Otimiza-o-de-Portf-lio-com-HERC"
  },
  {
    title: "Triage System — Organizational Network Diagnosis",
    description: "Graph-based triage system for diagnosing organizational network structures. Identifies bottlenecks, key nodes, and communication failure points.",
    areas: ['data'],
    tags: ["Python", "Graph Theory", "Network Analysis"],
    date: "2025",
    liveUrl: "https://lucaskmk.github.io/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais/",
    repoUrl: "https://github.com/lucaskmk/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais"
  },
  {
    title: "Churn Prediction Interface",
    description: "End-to-end solution from the Databricks Hackathon: an ML churn model integrated with a manager-focused web interface for decision makers.",
    areas: ['data'],
    tags: ["Databricks", "Machine Learning", "Hackathon"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Databricks-Hackathon",
    demoUrl: "https://www.youtube.com/watch?v=JsDl4ME_sWU"
  },
  {
    title: "Machine Learning — Adult Census",
    description: "Advanced EDA, feature engineering, and predictive modeling for income classification, evaluated with accuracy, F1, and ROC-AUC.",
    areas: ['data'],
    tags: ["Python", "Scikit-learn", "Pandas"],
    repoUrl: "https://github.com/lucaskmk/Machine-Learning-Adult-Census"
  },
  {
    title: "FastAPI NoSQL REST",
    description: "High-performance REST API built with FastAPI, implementing NoSQL data modeling and RESTful architectural patterns.",
    areas: ['backend'],
    tags: ["Python", "FastAPI", "NoSQL"],
    demoUrl: "https://youtu.be/WZ7uJ-U6sPU?si=1CaozLn-pBMCkZbo"
  },
  {
    title: "Full Stack Web Player",
    description: "Audio streaming and download platform integrated with the YouTube API. Django REST backend and React (Vite) frontend.",
    areas: ['backend'],
    tags: ["Python", "Django REST", "React"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Web-Player"
  },
  {
    title: "Django Notes Platform",
    description: "Full-stack notes service with PostgreSQL, containerized with Docker.",
    areas: ['backend'],
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
  },
  {
    title: "Multi-process Downloader",
    description: "Parallel downloader using fork() and waitpid(), with robust signal handling, resource cleanup, and real-time process status monitoring.",
    areas: ['systems'],
    tags: ["C", "Linux", "Processes"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Multi-process-Downloader",
    demoUrl: "https://youtu.be/o0PQdfjXw7I"
  },
  {
    title: "Algorithm Analysis & Optimization",
    description: "Study of computational complexity (O, Ω, Θ), comparison of sorting and search algorithms, and pattern matching with Rabin-Karp for large volumes of data.",
    areas: ['systems'],
    tags: ["C", "Big O", "Rabin-Karp"],
    repoUrl: "https://github.com/lucaskmk/Algorithms-Analysis"
  },
  {
    title: "Battleship Strategy",
    description: "Battleship game with AI decision-making logic for the computer opponent.",
    areas: ['systems'],
    tags: ["Python", "Game AI"],
    repoUrl: "https://github.com/lucaskmk/EP2"
  },
  {
    title: "Private Cloud with OpenStack",
    description: "Multi-tenant environments, SDN virtual networks, and Keystone identity management, with a focus on isolation and security.",
    areas: ['cloud'],
    tags: ["OpenStack", "SDN", "Linux"],
    date: "2024"
  },
  {
    title: "Bare-Metal Provisioning",
    description: "Automated infrastructure for hardware management and orchestration of distributed applications using MAAS and Juju.",
    areas: ['cloud'],
    tags: ["MAAS", "Juju", "Infrastructure"],
    date: "2024"
  },
  {
    title: "Terraform Automation (IaC)",
    description: "Declarative infrastructure provisioning scripts with full idempotency and environment standardization.",
    areas: ['cloud'],
    tags: ["Terraform", "IaC"],
    date: "2024"
  },
  {
    title: "MPU6050 Firmware Driver",
    description: "C library for accelerometer and gyroscope reading via I2C, integrated with an RTOS (tasks and semaphores) on Raspberry Pi Pico.",
    areas: ['hardware'],
    tags: ["C", "RTOS", "I2C"],
    date: "2024"
  },
  {
    title: "Light Following Robot",
    description: "Autonomous vehicle with PWM control via oscillator circuits and operational amplifiers: speed controlled by LDRs, without microcontrollers.",
    areas: ['hardware'],
    tags: ["Analog Electronics", "PWM"],
    date: "2024"
  },
  {
    title: "ALU & FSM Logic",
    description: "Hardware-level design and implementation of an arithmetic logic unit and finite state machines.",
    areas: ['hardware'],
    tags: ["VHDL", "Digital Logic"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 12,
    title: "Introduction to Cybersecurity",
    description: "Cisco Networking Academy course covering cyber threats, attack techniques, data protection, and the fundamentals of securing devices and networks.",
    image: "images/certificates/introduction-to-cybersecurity.png",
    url: "https://www.credly.com/badges/7bd791d4-d7c5-4b9e-8d03-be0271499db8/public_url",
    direction: 'left',
    category: 'Cybersecurity',
    badge: true
  },
  {
    id: 11,
    title: "AWS Academy Graduate — Cloud Foundations",
    description: "AWS Academy certification covering core cloud concepts, AWS global infrastructure, compute, storage, databases, and security fundamentals.",
    image: "images/certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
    url: "images/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260607-31-y5eait.pdf",
    direction: 'left',
    category: 'Cloud',
    badge: true,
    fullImage: "images/certificates/AWS_Academy_Cloud_Foundations.jpg"
  },
  {
    id: 5,
    title: "AWS Discovery Day",
    description: "Cloud Computing training by Kasolution and AWS, introducing fundamental cloud concepts and services.",
    image: "images/certificates/AWS_DiscoveryDay.png",
    url: "#",
    direction: 'right',
    category: 'Cloud'
  },
  {
    id: 1,
    title: "Google Cybersecurity Professional",
    description: "Professional Certificate from Google via Coursera including 8 comprehensive courses covering the entire cybersecurity landscape.",
    image: "images/certificates/google-cybersecurity-professional-certificate-v2.png",
    url: "images/certificates/Google_Cybersecurity_Professional.png",
    direction: 'left',
    category: 'Cybersecurity',
    badge: true
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
    id: 4,
    title: "Análise de Dados",
    description: "Data Analysis certification from Unova Cursos, covering statistical methods and data processing techniques.",
    image: "images/certificates/EscolaWeb_AnaliseDados.png",
    url: "#",
    direction: 'left',
    category: 'Data'
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
  }
];

export const RESUME_EN: ResumeContent = {
  profile: "I am a Computer Engineering student at Insper with a solid foundation in Python, SQL, and Data Science libraries. I have practical experience in exploratory analysis, predictive modeling (classification and regression), network analysis, ML pipelines, and RAG (Retrieval-Augmented Generation) architectures with LLMs. I was a participant in the Databricks Hackathon, where I developed an end-to-end Churn prediction solution with a web interface accessible to managers. I am disciplined and results-oriented, with fluency in English and the ability to communicate technical insights to non-technical audiences.",
  education: [
    { school: "Insper", detail: "Computer Engineering (2023 – 2028) - Focus on Data Engineering & Science" },
    { school: "Colégio Visconde de Porto Seguro", detail: "English and German courses" }
  ],
  international: [
    { location: "United States", detail: "Lived for 4 years (2006–2011), achieving full cultural and linguistic immersion." },
    { location: "Canada", detail: "Exchange program, developing intercultural adaptability and advanced technical conversation skills." }
  ],
  languages: [
    { name: "English", level: "Fluent (C1)" },
    { name: "Portuguese", level: "Native" },
    { name: "German", level: "Intermediate (B1)" }
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
  profile: "Sou estudante de Engenharia da Computação no Insper com sólida base em Python, SQL e bibliotecas de Ciência de Dados. Tenho experiência prática em análise exploratória, modelagem preditiva (classificação e regressão), análise de redes, pipelines de ML e arquiteturas de RAG (Retrieval-Augmented Generation) com LLMs. Participei do Hackathon Databricks, onde desenvolvi uma solução end-to-end de predição de Churn com interface web acessível a gestores. Sou disciplinado e orientado a resultados, com fluência em inglês e capacidade de comunicar insights técnicos para audiências não técnicas.",
  education: [
    { school: "Insper", detail: "Engenharia da Computação (2023 – 2028) - Foco em Engenharia & Ciência de Dados" },
    { school: "Colégio Visconde de Porto Seguro", detail: "Cursos de Inglês e Alemão" }
  ],
  international: [
    { location: "Estados Unidos", detail: "Residência por 4 anos (2006–2011), alfabetização e vivência cultural completa em inglês." },
    { location: "Canadá", detail: "Intercâmbio, desenvolvimento de adaptabilidade intercultural e fluência avançada em conversação técnica." }
  ],
  languages: [
    { name: "Inglês", level: "Fluente (C1)" },
    { name: "Português", level: "Nativo" },
    { name: "Alemão", level: "Intermediário (B1)" }
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
