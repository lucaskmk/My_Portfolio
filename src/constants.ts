import { LanguageProjects, Certificate, ResumeContent, AcademicProject } from './types';

export const PROJECTS: LanguageProjects = {
  python: [
    {
      title: "ML Pipeline (Adult Census)",
      description: "Advanced EDA and predictive modeling for income classification.",
      url: null
    },
    {
      title: "Battleship Strategy",
      description: "Strategic ocean battles with AI decision making.",
      url: "https://github.com/lucaskmk/EP2"
    },
    {
      title: "PyGame DK",
      description: "Donkey Kong inspired arcade game built with Pygame.",
      url: "https://github.com/lucaskmk/PyGame-DKarcade"
    }
  ],
  web: [
    {
      title: "Full Stack Web Player",
      description: "Streaming platform with Django REST and React (Vite).",
      url: null
    },
    {
      title: "Django Notes Platform",
      description: "Full-stack notes platform with PostgreSQL and Docker.",
      url: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
    },
    {
      title: "Enhanced Get-it",
      description: "Note manager with SQLite integration and refined CSS.",
      url: "https://github.com/insper-tecnologias-web/projeto-1a-lucaskmk"
    }
  ],
  java: [
    {
      title: "Backend API",
      description: "Robust backend services built with Java.",
      url: "https://github.com/desagil-2024-2/backend-1"
    }
  ],
  c: [
    {
      title: "MPU6050 Firmware Driver",
      description: "C library for accelerometer/gyroscope via I2C with RTOS.",
      url: null
    },
    {
      title: "Systems Optimization",
      description: "Low-level memory management and systems programming.",
      url: null
    }
  ],
  csharp: [
    {
      title: "To-Do Manager",
      description: "Task management with file persistence.",
      url: "https://github.com/lucaskmk/To-Do-List-Manager"
    }
  ],
  vhdl: [
    {
      title: "ALU & FSM Logic",
      description: "Implementation of control systems and digital security.",
      url: null
    }
  ],
  assembly: [
    {
      title: "Processor Logic",
      description: "Low-level instruction sets and memory optimization.",
      url: null
    }
  ],
  devops: [
    {
      title: "Terraform IaC",
      description: "Declarative scripts for infrastructure provisioning.",
      url: null
    },
    {
      title: "OpenStack Cloud",
      description: "Multi-tenant private cloud configuration.",
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
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 2,
    title: "Foundational C# with Microsoft",
    description: "Developer Certification from freeCodeCamp and Microsoft, covering core C# programming concepts and application development.",
    image: "images/certificates/Csharp.png",
    direction: 'right',
    category: 'Programming'
  },
  {
    id: 3,
    title: "C Intermediate",
    description: "Intermediate level certification in C programming from Sololearn, focusing on advanced data structures and algorithms.",
    image: "images/certificates/C.jpg",
    direction: 'left',
    category: 'Programming'
  },
  {
    id: 4,
    title: "Análise de Dados",
    description: "Data Analysis certification from Unova Cursos, covering statistical methods and data processing techniques.",
    image: "images/certificates/EscolaWeb_AnaliseDados.png",
    direction: 'right',
    category: 'Data'
  },
  {
    id: 5,
    title: "AWS Discovery Day",
    description: "Cloud Computing training by Kasolution and AWS, introducing fundamental cloud concepts and services.",
    image: "images/certificates/AWS_DiscoveryDay.png",
    direction: 'left',
    category: 'Cloud'
  },
  {
    id: 6,
    title: "Foundations of Cybersecurity",
    description: "Google certification covering the core principles of cybersecurity and the professional landscape.",
    image: "images/certificates/Google_Foundations_Cybersecurity.png",
    direction: 'right',
    category: 'Cybersecurity'
  },
  {
    id: 7,
    title: "Play It Safe: Manage Security Risks",
    description: "Google certification focused on identifying, assessing, and managing organizational security risks.",
    image: "images/certificates/Google_PlayItSafe_SecurityRisks.png",
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 8,
    title: "Connect and Protect: Networks and Network Security",
    description: "Google certification covering network protocols, architecture, and defensive security measures.",
    image: "images/certificates/Google_Connect_Protect_Networks.png",
    direction: 'right',
    category: 'Cybersecurity'
  },
  {
    id: 9,
    title: "Tools of the Trade: Linux and SQL",
    description: "Google certification focusing on essential technical tools for cybersecurity professionals: Linux and SQL.",
    image: "images/certificates/Google_Tools_Linux_SQL.png",
    direction: 'left',
    category: 'Cybersecurity'
  },
  {
    id: 10,
    title: "Assets, Threats, and Vulnerabilities",
    description: "Google certification covering asset management and the identification of threats and system vulnerabilities.",
    image: "images/certificates/Google_Assets_Threats_Vulnerabilities.png",
    direction: 'right',
    category: 'Cybersecurity'
  }
];

export const ACADEMIC_PROJECTS: AcademicProject[] = [
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
    date: "2024"
  }
];

export const RESUME_EN: ResumeContent = {
  profile: "Computer Engineering student at Insper with a solid technical foundation in Infrastructure as Code (IaC), Private Cloud, and Embedded Systems. Practical experience in the engineering cycle, from hardware and firmware design (VHDL/C) to orchestrating scalable cloud services (OpenStack/Kubernetes). Fluent in English with 4 years of international experience in the USA, ready to work in global teams and international projects. Characterized by a disciplined and determined posture, focused on overcoming technical obstacles and learning from new challenges that require innovative solutions.",
  education: [
    { school: "Insper", detail: "Computer Engineering (2023 – 2028)" },
    { school: "Colégio Visconde de Porto Seguro", detail: "English and German courses" }
  ],
  international: [
    { location: "United States", detail: "Lived for 4 years (2006–2011), achieving full cultural and linguistic immersion." },
    { location: "Canada", detail: "Exchange program, developing intercultural adaptability and advanced technical conversation skills." }
  ],
  skills: [
    { category: "Languages", items: ["Python", "Java", "C", "C#", "JavaScript", "SQL", "VHDL", "Assembly (MIPS)"] },
    { category: "Cloud & DevOps", items: ["Terraform (IaC)", "OpenStack", "Docker", "Kubernetes", "MAAS", "Juju", "Grafana", "Prometheus"] },
    { category: "Data Science & AI", items: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "PCA", "t-SNE", "UMAP"] },
    { category: "Web & Backend", items: ["Django REST", "React (Vite)", "Node.js", "Next.js", "HTML5", "CSS3"] },
    { category: "Embedded Systems", items: ["Firmware (C)", "RTOS", "I2C/SPI", "PWM", "ESP32", "ROS2"] }
  ],
  final: "My trajectory is marked by a continuous search for knowledge and evolution, always aiming for technical excellence and innovation."
};

export const RESUME_PT: ResumeContent = {
  profile: "Estudante de Engenharia da Computação no Insper com sólida base técnica em Infraestrutura como Código (IaC), Nuvem Privada e Sistemas Embarcados. Experiência prática no ciclo de engenharia, do design de hardware e firmware (VHDL/C) à orquestração de serviços escaláveis em nuvem (OpenStack/Kubernetes). Fluente em inglês com vivência internacional de 4 anos nos EUA, apto para atuar em times globais e projetos internacionais. Caracterizo-me por uma postura disciplinada e determinada, com foco na superação de obstáculos técnicos e no aprendizado diante de novos desafios que exijam soluções inovadoras.",
  education: [
    { school: "Insper", detail: "Engenharia da Computação (2023 – 2028)" },
    { school: "Colégio Visconde de Porto Seguro", detail: "Cursos de Inglês e Alemão" }
  ],
  international: [
    { location: "Estados Unidos", detail: "Residência por 4 anos (2006–2011), alfabetização e vivência cultural completa em inglês." },
    { location: "Canadá", detail: "Intercâmbio, desenvolvimento de adaptabilidade intercultural e fluência avançada em conversação técnica." }
  ],
  skills: [
    { category: "Linguagens", items: ["Python", "Java", "C", "C#", "JavaScript", "SQL", "VHDL", "Assembly (MIPS)"] },
    { category: "Nuvem & DevOps", items: ["Terraform (IaC)", "OpenStack", "Docker", "Kubernetes", "MAAS", "Juju", "Grafana", "Prometheus"] },
    { category: "Ciência de Dados & IA", items: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "PCA", "t-SNE", "UMAP"] },
    { category: "Web & Backend", items: ["Django REST", "React (Vite)", "Node.js", "Next.js", "HTML5", "CSS3"] },
    { category: "Sistemas Embarcados", items: ["Firmware (C)", "RTOS", "I2C/SPI", "PWM", "ESP32", "ROS2"] }
  ],
  final: "Minha trajetória é marcada pela busca contínua por conhecimento e evolução, sempre visando a excelência técnica e inovação."
};
