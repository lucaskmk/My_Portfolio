export type ProjectArea = 'ai' | 'data' | 'cloud' | 'backend' | 'systems' | 'hardware';

export interface Project {
  title: string;
  description: string;
  // First area is the main one; a project shows up in every area it lists
  areas: ProjectArea[];
  // Languages and technologies
  tags: string[];
  date?: string;
  repoUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
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
  // Image of the full certificate for the lightbox, when `url` is not an image (e.g. a PDF)
  fullImage?: string;
}

export interface ResumeContent {
  profile: string;
  education: { school: string; detail: string }[];
  international: { location: string; detail: string }[];
  languages: { name: string; level: string }[];
  skills: { category: string; items: string[] }[];
  final: string;
}
