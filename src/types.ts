export type Lang = 'en' | 'pt';

// Text written in both site languages
export type Localized = Record<Lang, string>;

export type ProjectArea = 'ai' | 'data' | 'cloud' | 'backend' | 'systems' | 'hardware';

// Areas shown on the Home; cybersecurity has certificates but no projects yet
export type AreaId = ProjectArea | 'cyber';

export interface Project {
  title: Localized;
  description: Localized;
  // First area is the main one; a project shows up in every area it lists
  areas: ProjectArea[];
  // Languages and technologies
  tags: string[];
  date?: string;
  repoUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
  // Short bullets for "Featured Projects" on the Home; projects with highlights are the featured ones
  highlights?: Record<Lang, string[]>;
}

export interface Certificate {
  id: number;
  // Official certificate name, shown as-is in both languages
  title: string;
  description: Localized;
  image: string;
  url: string;
  category: 'Cybersecurity' | 'Programming' | 'Cloud' | 'Data';
  badge?: boolean;
  // Lighter copy of `image` for the card; the lightbox keeps the original
  thumb?: string;
  // Image of the full certificate for the lightbox, when `url` is not an image (e.g. a PDF)
  fullImage?: string;
}

export interface ResumeContent {
  profile: string;
  education: { school: string; detail: string }[];
  international: { location: string; detail: string }[];
  languages: { name: string; level: string }[];
  // `visible` is how many items show before the "show more" arrow (default 6)
  skills: { category: string; items: string[]; visible?: number }[];
}
