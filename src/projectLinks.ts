import { Github, Play, ExternalLink, FileText, type LucideIcon } from 'lucide-react';
import type { Project } from './types';
import type { Lang } from './useLang';

type LinkKind = 'code' | 'demo' | 'live' | 'report';

const LINK_LABELS: Record<Lang, Record<LinkKind, string>> = {
  en: { code: 'Code', demo: 'Demo', live: 'Live', report: 'Report' },
  pt: { code: 'Código', demo: 'Demo', live: 'Site', report: 'Relatório' },
};

const LINK_ICONS: Record<LinkKind, LucideIcon> = {
  code: Github,
  demo: Play,
  live: ExternalLink,
  report: FileText,
};

export function projectLinks(project: Project, lang: Lang = 'en') {
  const urls: [LinkKind, string | undefined][] = [
    ['code', project.repoUrl],
    ['demo', project.demoUrl],
    ['live', project.liveUrl],
    ['report', project.reportUrl],
  ];
  return urls
    .filter((entry): entry is [LinkKind, string] => Boolean(entry[1]))
    .map(([kind, href]) => ({ href, label: LINK_LABELS[lang][kind], icon: LINK_ICONS[kind] }));
}
