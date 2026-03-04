import { LanguageProjects, Certificate, ResumeContent, AcademicProject } from './types';

export const PROJECTS: LanguageProjects = {
  python: [
    {
      title: "Lessons",
      description: "Lessons and notes with various exercises.",
      url: "https://github.com/lucaskmk/Python"
    },
    {
      title: "Filtro_cores",
      description: "Interactive color filter for HSV, BGR, or RGB scales.",
      url: "https://github.com/lucaskmk/Filtro_cores"
    },
    {
      title: "Battleship",
      description: "Strategic ocean battles against the computer.",
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
      title: "Enhanced Get-it",
      description: "Note manager with SQLite integration and refined CSS.",
      url: "https://github.com/insper-tecnologias-web/projeto-1a-lucaskmk"
    },
    {
      title: "Django Notes Platform",
      description: "Full-stack notes platform with PostgreSQL and Docker.",
      url: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
    },
    {
      title: "Gym Scheduler",
      description: "React frontend for workout scheduling.",
      url: "https://github.com/desagil-2024-2/frontend-1"
    },
    {
      title: "CalmU",
      description: "Anxiety management app with exercises and forums.",
      url: "https://github.com/lucaskmk/Equipe6TurmaB_CalmU"
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
    },
    {
      title: "File Organizer",
      description: "Automated directory sorting tool.",
      url: "https://github.com/lucaskmk/Simple-File-Organizer"
    }
  ],
  vhdl: [
    {
      title: "Digital Systems",
      description: "FPGA implementation and hardware logic design.",
      url: null
    }
  ],
  assembly: [
    {
      title: "Processor Logic",
      description: "Low-level instruction sets and memory optimization.",
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
    title: "Informar Project",
    description: "A technological solution that allows students to practice programming and logic between classes. An interactive website built with React, with the possibility of a FastAPI backend.",
    image: "https://picsum.photos/seed/informar/800/600",
    tags: ["React", "FastAPI", "Education"],
    date: "2024"
  },
  {
    id: 2,
    title: "CalmU",
    description: "A model project for an app to manage anxiety crises, featuring exercises and a forum for community support.",
    image: "https://picsum.photos/seed/calmu/800/600",
    tags: ["UI/UX", "Social Impact", "Health"],
    date: "2024"
  },
  {
    id: 3,
    title: "Battleship Strategy",
    description: "Strategic ocean battles implemented in Python, focusing on game logic and computer AI decision making.",
    image: "https://picsum.photos/seed/battleship/800/600",
    tags: ["Python", "Game Dev", "Algorithms"],
    date: "2023"
  }
];

export const RESUME_EN: ResumeContent = {
  profile: "I am a dedicated and determined person with a passion for completing projects with excellence and a readiness to take on new challenges. I believe in the constant quest for improvement and overcoming obstacles by turning each difficulty into an opportunity for growth. My multicultural background and international experience provide me with adaptability, a global vision, and effective communication skills.",
  education: [
    { school: "Insper", detail: "Computer Engineering (Expected Graduation: 2028)" },
    { school: "Colégio Visconde de Porto Seguro", detail: "English and German courses" }
  ],
  international: [
    { location: "United States", detail: "Lived for 4 years, enhancing language skills and multicultural perspective." },
    { location: "Canada", detail: "Exchange program, boosting adaptability and cultural understanding." }
  ],
  skills: [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "C", "C#", "VHDL", "Assembly", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React", "Django", "FastAPI"] },
    { category: "Data Science", items: ["Pandas", "Matplotlib", "Numpy"] }
  ],
  final: "My career is defined by a continuous pursuit of knowledge and evolution, always aiming for excellence."
};

export const RESUME_PT: ResumeContent = {
  profile: "Sou uma pessoa dedicada e determinada, com vontade de concluir projetos com excelência e sempre pronto para iniciar novos desafios. Acredito na constante busca por melhorias e na superação dos obstáculos, transformando cada dificuldade em oportunidade de crescimento. Minha formação multicultural e experiência internacional me proporcionam adaptabilidade, visão global e comunicação eficaz.",
  education: [
    { school: "Insper", detail: "Engenharia da Computação (Previsão: 2028)" },
    { school: "Colégio Visconde de Porto Seguro", detail: "Aulas de Inglês e Alemão" }
  ],
  international: [
    { location: "Estados Unidos", detail: "Residente por 4 anos, desenvolvendo forte base multicultural." },
    { location: "Canadá", detail: "Intercâmbio, reforçando capacidade de adaptação." }
  ],
  skills: [
    { category: "Linguagens", items: ["Python", "Java", "JavaScript", "C", "C#", "VHDL", "Assembly", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React", "Django", "FastAPI"] },
    { category: "Ciência de Dados", items: ["Pandas", "Matplotlib", "Numpy"] }
  ],
  final: "Minha trajetória é marcada pela busca contínua por conhecimento e evolução."
};
