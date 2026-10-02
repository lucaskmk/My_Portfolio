import { Sparkles, ChartColumn, Cloud, Server, Puzzle, ShieldCheck, Cpu, type LucideIcon } from 'lucide-react';
import type { AreaId, ProjectArea } from './types';
import type { Lang } from './useLang';

interface AreaInfo {
  icon: LucideIcon;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
}

// Single source for the areas, so the Home cards and the project wheel always match
export const AREA_INFO: Record<AreaId, AreaInfo> = {
  ai: {
    icon: Sparkles,
    name: { en: 'AI & LLMs', pt: 'IA e LLMs' },
    description: { en: 'RAG and AI agents', pt: 'RAG e agentes de IA' },
  },
  data: {
    icon: ChartColumn,
    name: { en: 'Data Science', pt: 'Ciência de Dados' },
    description: { en: 'Analysis and ML models', pt: 'Análise e modelos de ML' },
  },
  cloud: {
    icon: Cloud,
    name: { en: 'Cloud & Infra', pt: 'Cloud e Infra' },
    description: { en: 'Infrastructure and deployment', pt: 'Infraestrutura e deploy' },
  },
  backend: {
    icon: Server,
    name: { en: 'Backend & APIs', pt: 'Backend e APIs' },
    description: { en: 'APIs and web applications', pt: 'APIs e aplicações web' },
  },
  systems: {
    icon: Puzzle,
    name: { en: 'Problem Solving', pt: 'Resolução de Problemas' },
    description: { en: 'Algorithms and systems', pt: 'Algoritmos e sistemas' },
  },
  cyber: {
    icon: ShieldCheck,
    name: { en: 'Cybersecurity', pt: 'Cibersegurança' },
    description: { en: 'Networks and security tools', pt: 'Redes e ferramentas de segurança' },
  },
  hardware: {
    icon: Cpu,
    name: { en: 'Hardware', pt: 'Hardware' },
    description: { en: 'Firmware and digital logic', pt: 'Firmware e lógica digital' },
  },
};

export const AREA_ORDER: AreaId[] = ['ai', 'data', 'cloud', 'backend', 'systems', 'cyber', 'hardware'];

export const PROJECT_AREAS: ProjectArea[] = ['ai', 'data', 'cloud', 'backend', 'systems', 'hardware'];
