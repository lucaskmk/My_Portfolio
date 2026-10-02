import { Project, Certificate, ResumeContent } from './types';

export const PROJECTS: Project[] = [
  {
    title: { en: "Financial RAG", pt: "Financial RAG" },
    description: {
      en: "RAG pipeline for Q&A over financial documents: LLM + vector search over structured financial data. Dockerized full-stack app with separate frontend and backend containers and local LLM inference via Ollama.",
      pt: "Pipeline de RAG para perguntas e respostas sobre documentos financeiros: LLM + busca vetorial sobre dados financeiros estruturados. Aplicação full-stack dockerizada, com containers separados para frontend e backend e inferência de LLM local via Ollama."
    },
    areas: ['ai', 'data'],
    tags: ["Python", "RAG", "LLM", "Ollama", "Docker"],
    date: "2026",
    repoUrl: "https://github.com/lucaskmk/Financial-RAG",
    demoUrl: "https://youtu.be/nk8veFssCHg",
    highlights: {
      en: ["RAG pipeline for Q&A over financial documents.", "Dockerized full-stack app with local LLM inference (Ollama)."],
      pt: ["Pipeline RAG para perguntas sobre documentos financeiros.", "App full-stack dockerizado com LLM local (Ollama)."]
    }
  },
  {
    title: { en: "Endpoint Investigator", pt: "Endpoint Investigator" },
    description: {
      en: "Security investigation tool for GNU/Linux endpoints. It collects processes, permissions, services and logs, correlates these sources and produces findings that separate what was observed from what is interpretation and what remains a hypothesis, with Markdown and JSON reports. Pair project for the Hacker Technologies course at Insper.",
      pt: "Ferramenta de investigação de segurança para endpoints GNU/Linux. Coleta processos, permissões, serviços e logs, cruza essas fontes e gera achados que separam o que foi observado do que é interpretação e do que ainda é hipótese, com relatórios em Markdown e JSON. Projeto em dupla da disciplina Tecnologias Hackers do Insper."
    },
    areas: ['cyber'],
    tags: ["Python", "Linux", "Log Analysis", "Security"],
    date: "2026",
    repoUrl: "https://github.com/lucaskmk/ai-grupo6-endpoint-investigator"
  },
  {
    title: { en: "Ollama AI Agent Demo", pt: "Agente de IA com Ollama" },
    description: {
      en: "Local AI agent using Ollama (LLaMA 3.2). Full tool-use loop with planning, self-correction, confirmation for risky operations, and persistent memory across sessions.",
      pt: "Agente de IA local usando Ollama (LLaMA 3.2). Loop completo de uso de ferramentas, com planejamento, autocorreção, confirmação para operações arriscadas e memória persistente entre sessões."
    },
    areas: ['ai'],
    tags: ["Python", "LLM", "Ollama", "AI Agents"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/Ollama_AI-AgentDemo",
    demoUrl: "https://youtu.be/GWQIyWlHVg4"
  },
  {
    title: { en: "CloudPay — Serverless Payments on AWS", pt: "CloudPay — Pagamentos Serverless na AWS" },
    description: {
      en: "100% serverless payments platform MVP on AWS: 6 Lambda functions (Node.js), API Gateway, async processing via SQS, DynamoDB persistence, and a React frontend on S3. Load-tested with JMeter (100 concurrent users).",
      pt: "MVP de plataforma de pagamentos 100% serverless na AWS: 6 funções Lambda (Node.js), API Gateway, processamento assíncrono via SQS, persistência em DynamoDB e frontend React no S3. Testes de carga com JMeter (100 usuários simultâneos)."
    },
    areas: ['cloud', 'backend'],
    tags: ["AWS", "Node.js", "Lambda", "SQS", "DynamoDB"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/ComputacaoNuvem_Projeto",
    reportUrl: "images/projects/relatorio-tecnico-cloudpay.pdf",
    highlights: {
      en: ["100% serverless payments MVP on AWS (Lambda, SQS, DynamoDB).", "Load-tested with JMeter: 100 concurrent users."],
      pt: ["MVP de pagamentos 100% serverless na AWS (Lambda, SQS, DynamoDB).", "Teste de carga com JMeter: 100 usuários simultâneos."]
    }
  },
  {
    title: { en: "Portfolio Optimization with HRP/HERC", pt: "Otimização de Portfólio com HRP/HERC" },
    description: {
      en: "Hierarchical Risk Parity and Hierarchical Equal Risk Contribution allocation with a backtesting pipeline comparing them to Equal-Weight and Buy & Hold (Sharpe, Sortino, Maximum Drawdown).",
      pt: "Alocação por Hierarchical Risk Parity e Hierarchical Equal Risk Contribution, com pipeline de backtesting comparando com Equal-Weight e Buy & Hold (Sharpe, Sortino e drawdown máximo)."
    },
    areas: ['data'],
    tags: ["Python", "Quant Finance", "Backtesting"],
    date: "2025",
    repoUrl: "https://github.com/lucaskmk/Otimiza-o-de-Portf-lio-com-HERC"
  },
  {
    title: { en: "Triage System — Organizational Network Diagnosis", pt: "Sistema de Triagem — Diagnóstico de Redes Organizacionais" },
    description: {
      en: "Graph-based triage system for diagnosing organizational network structures. Identifies bottlenecks, key nodes, and communication failure points.",
      pt: "Sistema de triagem baseado em grafos para diagnosticar estruturas de redes organizacionais. Identifica gargalos, nós-chave e pontos de falha na comunicação."
    },
    areas: ['data'],
    tags: ["Python", "Graph Theory", "Network Analysis"],
    date: "2025",
    liveUrl: "https://lucaskmk.github.io/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais/",
    repoUrl: "https://github.com/lucaskmk/Sistema-de-Triagem-para-Diagn-stico-de-Redes-Organizacionais",
    highlights: {
      en: ["Diagnoses organizational networks using graph analysis.", "Identifies bottlenecks, key nodes and communication failure points."],
      pt: ["Diagnóstico de redes organizacionais com análise de grafos.", "Identifica gargalos, nós centrais e pontos de falha na comunicação."]
    }
  },
  {
    title: { en: "Churn Prediction Interface", pt: "Interface de Predição de Churn" },
    description: {
      en: "End-to-end solution from the Databricks Hackathon: an ML churn model integrated with a manager-focused web interface for decision makers.",
      pt: "Solução end-to-end do Hackathon Databricks: modelo de ML de churn integrado a uma interface web pensada para gestores e tomadores de decisão."
    },
    areas: ['data'],
    tags: ["Databricks", "Machine Learning", "Hackathon"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Databricks-Hackathon",
    demoUrl: "https://www.youtube.com/watch?v=JsDl4ME_sWU",
    highlights: {
      en: ["End-to-end churn prediction solution (Databricks Hackathon).", "Accessible frontend for managers."],
      pt: ["Solução end-to-end de predição de Churn (Hackathon Databricks).", "Frontend acessível voltado a gestores."]
    }
  },
  {
    title: { en: "Machine Learning — Adult Census", pt: "Machine Learning — Adult Census" },
    description: {
      en: "Advanced EDA, feature engineering, and predictive modeling for income classification, evaluated with accuracy, F1, and ROC-AUC.",
      pt: "EDA avançada, feature engineering e modelagem preditiva para classificação de renda, avaliada com acurácia, F1 e ROC-AUC."
    },
    areas: ['data'],
    tags: ["Python", "Scikit-learn", "Pandas"],
    repoUrl: "https://github.com/lucaskmk/APS1-EDA"
  },
  {
    title: { en: "FastAPI NoSQL REST", pt: "FastAPI NoSQL REST" },
    description: {
      en: "High-performance REST API built with FastAPI, implementing NoSQL data modeling and RESTful architectural patterns.",
      pt: "API REST de alta performance com FastAPI, aplicando modelagem de dados NoSQL e padrões de arquitetura RESTful."
    },
    areas: ['backend'],
    tags: ["Python", "FastAPI", "NoSQL"],
    demoUrl: "https://youtu.be/WZ7uJ-U6sPU?si=1CaozLn-pBMCkZbo"
  },
  {
    title: { en: "Full Stack Web Player", pt: "Web Player Full Stack" },
    description: {
      en: "Audio streaming and download platform integrated with the YouTube API. Django REST backend and React (Vite) frontend.",
      pt: "Plataforma de streaming e download de áudio integrada à API do YouTube. Backend em Django REST e frontend em React (Vite)."
    },
    areas: ['backend'],
    tags: ["Python", "Django REST", "React"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Web-Player"
  },
  {
    title: { en: "Django Notes Platform", pt: "Plataforma de Notas em Django" },
    description: {
      en: "Full-stack notes service with PostgreSQL, containerized with Docker.",
      pt: "Serviço full-stack de notas com PostgreSQL, containerizado com Docker."
    },
    areas: ['backend'],
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
  },
  {
    title: { en: "Multi-process Downloader", pt: "Downloader Multiprocesso" },
    description: {
      en: "Parallel downloader using fork() and waitpid(), with robust signal handling, resource cleanup, and real-time process status monitoring.",
      pt: "Downloader paralelo com fork() e waitpid(), com tratamento robusto de sinais, liberação de recursos e monitoramento dos processos em tempo real."
    },
    areas: ['systems'],
    tags: ["C", "Linux", "Processes"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/Multi-process-Downloader",
    demoUrl: "https://youtu.be/o0PQdfjXw7I"
  },
  {
    title: { en: "Algorithm Analysis & Optimization", pt: "Análise e Otimização de Algoritmos" },
    description: {
      en: "Study of computational complexity (O, Ω, Θ), comparison of sorting and search algorithms, and pattern matching with Rabin-Karp for large volumes of data.",
      pt: "Estudo de complexidade computacional (O, Ω, Θ), comparação de algoritmos de ordenação e busca e busca de padrões com Rabin-Karp para grandes volumes de dados."
    },
    areas: ['systems'],
    tags: ["C", "Big O", "Rabin-Karp"],
    repoUrl: "https://github.com/lucaskmk/Algorithms-Analysis"
  },
  {
    title: { en: "Battleship Strategy", pt: "Estratégia de Batalha Naval" },
    description: {
      en: "Battleship game with AI decision-making logic for the computer opponent.",
      pt: "Jogo de Batalha Naval com lógica de decisão por IA para o oponente controlado pelo computador."
    },
    areas: ['systems'],
    tags: ["Python", "Game AI"],
    repoUrl: "https://github.com/lucaskmk/EP2"
  },
  {
    title: { en: "Private Cloud with OpenStack", pt: "Nuvem Privada com OpenStack" },
    description: {
      en: "Multi-tenant environments, SDN virtual networks, and Keystone identity management, with a focus on isolation and security.",
      pt: "Ambientes multi-tenant, redes virtuais SDN e gerenciamento de identidade com Keystone, com foco em isolamento e segurança."
    },
    areas: ['cloud'],
    tags: ["OpenStack", "SDN", "Linux"],
    date: "2024"
  },
  {
    title: { en: "Bare-Metal Provisioning", pt: "Provisionamento Bare-Metal" },
    description: {
      en: "Automated infrastructure for hardware management and orchestration of distributed applications using MAAS and Juju.",
      pt: "Infraestrutura automatizada para gerenciamento de hardware e orquestração de aplicações distribuídas com MAAS e Juju."
    },
    areas: ['cloud'],
    tags: ["MAAS", "Juju", "Infrastructure"],
    date: "2024"
  },
  {
    title: { en: "Terraform Automation (IaC)", pt: "Automação com Terraform (IaC)" },
    description: {
      en: "Declarative infrastructure provisioning scripts with full idempotency and environment standardization.",
      pt: "Scripts declarativos de provisionamento de infraestrutura, com idempotência completa e padronização de ambientes."
    },
    areas: ['cloud'],
    tags: ["Terraform", "IaC"],
    date: "2024"
  },
  {
    title: { en: "MPU6050 Firmware Driver", pt: "Driver de Firmware MPU6050" },
    description: {
      en: "C library for accelerometer and gyroscope reading via I2C, integrated with an RTOS (tasks and semaphores) on Raspberry Pi Pico.",
      pt: "Biblioteca em C para leitura de acelerômetro e giroscópio via I2C, integrada a um RTOS (tasks e semáforos) na Raspberry Pi Pico."
    },
    areas: ['hardware'],
    tags: ["C", "RTOS", "I2C"],
    date: "2024",
    repoUrl: "https://github.com/lucaskmk/ExpertFirmware_Driver",
    demoUrl: "https://www.youtube.com/watch?v=MI4Uhup1_dE"
  },
  {
    title: { en: "Light Following Robot", pt: "Robô Seguidor de Luz" },
    description: {
      en: "Autonomous vehicle with PWM control via oscillator circuits and operational amplifiers: speed controlled by LDRs, without microcontrollers.",
      pt: "Veículo autônomo com controle PWM por circuitos osciladores e amplificadores operacionais: a velocidade é controlada por LDRs, sem microcontroladores."
    },
    areas: ['hardware'],
    tags: ["Analog Electronics", "PWM"],
    date: "2024"
  },
  {
    title: { en: "ALU & FSM Logic", pt: "Lógica de ULA e FSM" },
    description: {
      en: "Hardware-level design and implementation of an arithmetic logic unit and finite state machines.",
      pt: "Projeto e implementação em nível de hardware de uma unidade lógica e aritmética e de máquinas de estados finitos."
    },
    areas: ['hardware'],
    tags: ["VHDL", "Digital Logic"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Google Cybersecurity Professional",
    description: {
      en: "Professional Certificate from Google via Coursera including 8 comprehensive courses covering the entire cybersecurity landscape.",
      pt: "Certificado Profissional do Google pela Coursera, com 8 cursos completos que cobrem todo o panorama de cibersegurança."
    },
    image: "images/certificates/google-cybersecurity-professional-certificate-v2.png",
    thumb: "images/certificates/thumbs/google-cybersecurity-professional-card.png",
    url: "images/certificates/Google_Cybersecurity_Professional.png",
    category: 'Cybersecurity',
    badge: true
  },
  {
    id: 11,
    title: "AWS Academy Graduate — Cloud Foundations",
    description: {
      en: "AWS Academy certification covering core cloud concepts, AWS global infrastructure, compute, storage, databases, and security fundamentals.",
      pt: "Certificação da AWS Academy sobre conceitos fundamentais de nuvem, infraestrutura global da AWS, computação, armazenamento, bancos de dados e fundamentos de segurança."
    },
    image: "images/certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
    url: "images/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260607-31-y5eait.pdf",
    category: 'Cloud',
    badge: true,
    fullImage: "images/certificates/AWS_Academy_Cloud_Foundations.jpg"
  },
  {
    id: 12,
    title: "Introduction to Cybersecurity",
    description: {
      en: "Cisco Networking Academy course covering cyber threats, attack techniques, data protection, and the fundamentals of securing devices and networks.",
      pt: "Curso da Cisco Networking Academy sobre ameaças cibernéticas, técnicas de ataque, proteção de dados e os fundamentos da segurança de dispositivos e redes."
    },
    image: "images/certificates/introduction-to-cybersecurity.png",
    url: "https://www.credly.com/badges/7bd791d4-d7c5-4b9e-8d03-be0271499db8/public_url",
    category: 'Cybersecurity',
    badge: true
  },
  {
    id: 6,
    title: "Foundations of Cybersecurity",
    description: {
      en: "Google certification covering the core principles of cybersecurity and the professional landscape.",
      pt: "Certificação do Google sobre os princípios fundamentais da cibersegurança e o cenário profissional da área."
    },
    image: "images/certificates/Google_Foundations_Cybersecurity.png",
    thumb: "images/certificates/thumbs/Google_Foundations_Cybersecurity-card.jpg",
    url: "#",
    category: 'Cybersecurity'
  },
  {
    id: 7,
    title: "Play It Safe: Manage Security Risks",
    description: {
      en: "Google certification focused on identifying, assessing, and managing organizational security risks.",
      pt: "Certificação do Google focada em identificar, avaliar e gerenciar riscos de segurança nas organizações."
    },
    image: "images/certificates/Google_PlayItSafe_SecurityRisks.png",
    thumb: "images/certificates/thumbs/Google_PlayItSafe_SecurityRisks-card.jpg",
    url: "#",
    category: 'Cybersecurity'
  },
  {
    id: 8,
    title: "Connect and Protect: Networks and Network Security",
    description: {
      en: "Google certification covering network protocols, architecture, and defensive security measures.",
      pt: "Certificação do Google sobre protocolos de rede, arquitetura e medidas de segurança defensiva."
    },
    image: "images/certificates/Google_Connect_Protect_Networks.png",
    thumb: "images/certificates/thumbs/Google_Connect_Protect_Networks-card.jpg",
    url: "#",
    category: 'Cybersecurity'
  },
  {
    id: 9,
    title: "Tools of the Trade: Linux and SQL",
    description: {
      en: "Google certification focusing on essential technical tools for cybersecurity professionals: Linux and SQL.",
      pt: "Certificação do Google focada em ferramentas técnicas essenciais para profissionais de cibersegurança: Linux e SQL."
    },
    image: "images/certificates/Google_Tools_Linux_SQL.png",
    thumb: "images/certificates/thumbs/Google_Tools_Linux_SQL-card.jpg",
    url: "#",
    category: 'Cybersecurity'
  },
  {
    id: 10,
    title: "Assets, Threats, and Vulnerabilities",
    description: {
      en: "Google certification covering asset management and the identification of threats and system vulnerabilities.",
      pt: "Certificação do Google sobre gestão de ativos e identificação de ameaças e vulnerabilidades em sistemas."
    },
    image: "images/certificates/Google_Assets_Threats_Vulnerabilities.png",
    thumb: "images/certificates/thumbs/Google_Assets_Threats_Vulnerabilities-card.jpg",
    url: "#",
    category: 'Cybersecurity'
  },
  {
    id: 5,
    title: "AWS Discovery Day",
    description: {
      en: "Cloud Computing training by Kasolution and AWS, introducing fundamental cloud concepts and services.",
      pt: "Treinamento de Cloud Computing da Kasolution com a AWS, apresentando conceitos e serviços fundamentais de nuvem."
    },
    image: "images/certificates/AWS_DiscoveryDay.png",
    thumb: "images/certificates/thumbs/AWS_DiscoveryDay-card.jpg",
    url: "#",
    category: 'Cloud'
  },
  {
    id: 4,
    title: "Análise de Dados",
    description: {
      en: "Data Analysis certification from Unova Cursos, covering statistical methods and data processing techniques.",
      pt: "Certificação em Análise de Dados da Unova Cursos, cobrindo métodos estatísticos e técnicas de processamento de dados."
    },
    image: "images/certificates/EscolaWeb_AnaliseDados.png",
    thumb: "images/certificates/thumbs/EscolaWeb_AnaliseDados-card.jpg",
    url: "#",
    category: 'Data'
  },
  {
    id: 2,
    title: "Foundational C# with Microsoft",
    description: {
      en: "Developer Certification from freeCodeCamp and Microsoft, covering core C# programming concepts and application development.",
      pt: "Certificação de desenvolvedor da freeCodeCamp com a Microsoft, cobrindo conceitos fundamentais de programação em C# e desenvolvimento de aplicações."
    },
    image: "images/certificates/Csharp.png",
    thumb: "images/certificates/thumbs/Csharp-card.jpg",
    url: "#",
    category: 'Programming'
  },
  {
    id: 3,
    title: "C Intermediate",
    description: {
      en: "Intermediate level certification in C programming from Sololearn, focusing on advanced data structures and algorithms.",
      pt: "Certificação de nível intermediário em programação C da Sololearn, com foco em estruturas de dados e algoritmos avançados."
    },
    image: "images/certificates/C.jpg",
    url: "#",
    category: 'Programming'
  }
];

export const RESUME_EN: ResumeContent = {
  profile: "I'm a student at Insper, where I study Computer Engineering, and I'm currently a Process and Data Engineering intern at Neria Energia. I've built several projects across different areas of technology. I'm most interested in cloud development, data analysis, cybersecurity, and delivering complete solutions from start to finish. One of the projects I'm proudest of is the churn prediction solution I built at the Databricks Hackathon, from the model all the way to an interface for managers. I also built CloudPay, a fully serverless payments platform on AWS (Lambda, SQS and DynamoDB) tested under load with 100 concurrent users, and FinRAG, a RAG pipeline that answers questions about financial reports using a local LLM. In quantitative finance, I did a portfolio optimization study with HRP and HERC, comparing the results with equal weight and buy and hold strategies. I hold Google's Cybersecurity Professional Certificate. I'm disciplined and curious, fluent in English, and comfortable explaining technical decisions to people outside the field, something I put into practice in my Triage System, which turns an organization's network analysis into clear diagnoses for decision makers.",
  education: [
    { school: "Insper", detail: "Computer Engineering (2023 – 2028)" },
    { school: "Colégio Visconde de Porto Seguro (Panamby)", detail: "English and German courses" }
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
    { category: "Languages", visible: 4, items: ["Python", "C", "Java", "SQL (MySQL · SQLite)", "C++", "JavaScript", "TypeScript", "C#", "VHDL", "Assembly (MIPS)"] },
    { category: "Tools & Environment", items: ["Git", "Docker", "Linux Shell", "AWS Console", "Valgrind", "GDB"] },
    { category: "Data Science & AI", items: ["Pandas", "NumPy", "Scikit-learn", "RAG", "LLMs", "Databricks", "ML Pipelines", "EDA", "Feature Engineering", "Matplotlib", "Seaborn", "SciPy", "PCA", "t-SNE", "UMAP", "ChromaDB", "Algorithm Analysis (O, Ω, Θ)"] },
    { category: "Web & Backend", items: ["FastAPI", "Django REST", "Node.js", "React (Vite)", "REST/JSON", "SQLAlchemy", "NoSQL", "Next.js", "Process Management"] },
    { category: "Cloud & DevOps", items: ["AWS (Lambda · SQS · DynamoDB · S3)", "MAAS", "Kubernetes", "OpenStack", "Prometheus", "Grafana", "Terraform (IaC)", "Juju", "Bare-metal Provisioning"] },
    { category: "Cybersecurity", items: ["Linux (Kali)", "Network Security", "Threats & Vulnerabilities", "Risk Management", "Python Automation"] },
    { category: "Embedded Systems", items: ["Firmware (C)", "RTOS", "I2C / SPI", "Digital Logic (ALU · FSM)"] }
  ]
};

export const RESUME_PT: ResumeContent = {
  profile: "Sou aluno do Insper, onde curso Engenharia da Computação, e atualmente sou estagiário de Engenharia de Processos e Dados na Neria Energia. Já desenvolvi vários projetos em diferentes áreas da tecnologia. Tenho mais interesse em desenvolvimento em nuvem, análise de dados, cibersegurança e em entregar soluções de ponta a ponta. Um dos projetos de que mais me orgulho é a solução de predição de churn que criei no Hackathon Databricks, do modelo até a interface para gestores. Também desenvolvi o CloudPay, uma plataforma de pagamentos 100% serverless na AWS (Lambda, SQS e DynamoDB) testada com 100 usuários simultâneos, e o FinRAG, um pipeline de RAG que responde perguntas sobre relatórios financeiros com um LLM local. Em finanças quantitativas, fiz um estudo de otimização de portfólio com HRP e HERC, comparando os resultados com estratégias de pesos iguais e buy and hold. Tenho o Certificado Profissional de Cibersegurança do Google. Sou disciplinado e curioso, fluente em inglês e tenho facilidade para explicar decisões técnicas para quem não é da área, algo que coloquei em prática no meu Sistema de Triagem, que transforma a análise da rede de uma organização em diagnósticos claros para quem toma as decisões.",
  education: [
    { school: "Insper", detail: "Engenharia da Computação (2023 – 2028)" },
    { school: "Colégio Visconde de Porto Seguro (Panamby)", detail: "Cursos de Inglês e Alemão" }
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
    { category: "Linguagens", visible: 4, items: ["Python", "C", "Java", "SQL (MySQL · SQLite)", "C++", "JavaScript", "TypeScript", "C#", "VHDL", "Assembly (MIPS)"] },
    { category: "Ferramentas e Ambiente", items: ["Git", "Docker", "Linux Shell", "Console da AWS", "Valgrind", "GDB"] },
    { category: "Ciência de Dados & IA", items: ["Pandas", "NumPy", "Scikit-learn", "RAG", "LLMs", "Databricks", "Pipelines de ML", "EDA", "Feature Engineering", "Matplotlib", "Seaborn", "SciPy", "PCA", "t-SNE", "UMAP", "ChromaDB", "Análise de Algoritmos (O, Ω, Θ)"] },
    { category: "Web & Backend", items: ["FastAPI", "Django REST", "Node.js", "React (Vite)", "REST/JSON", "SQLAlchemy", "NoSQL", "Next.js", "Gerenciamento de Processos"] },
    { category: "Nuvem & DevOps", items: ["AWS (Lambda · SQS · DynamoDB · S3)", "MAAS", "Kubernetes", "OpenStack", "Prometheus", "Grafana", "Terraform (IaC)", "Juju", "Provisionamento Bare-metal"] },
    { category: "Cibersegurança", items: ["Linux (Kali)", "Segurança de Redes", "Ameaças e Vulnerabilidades", "Gestão de Riscos", "Automação com Python"] },
    { category: "Sistemas Embarcados", items: ["Firmware (C)", "RTOS", "I2C / SPI", "Lógica Digital (ULA · FSM)"] }
  ]
};
