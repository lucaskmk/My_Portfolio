export interface Project {
  title: string;
  description: string;
  url: string | null;
  fileUrl?: string;
  videoUrl?: string;
}

export interface LanguageProjects {
  [key: string]: Project[];
}

export interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  direction: 'left' | 'right';
  category: 'Cybersecurity' | 'Programming' | 'Cloud' | 'Data';
  badge?: boolean;
}

export interface AcademicProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  url?: string;
  githubUrl?: string;
  fileUrl?: string;
  videoUrl?: string;
}

export interface ResumeContent {
  profile: string;
  education: { school: string; detail: string }[];
  international: { location: string; detail: string }[];
  skills: { category: string; items: string[] }[];
  final: string;
}
