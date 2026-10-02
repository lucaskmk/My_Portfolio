import React from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Github, Play, ExternalLink, FileText,
  LayoutGrid, Sparkles, ChartColumn, Cloud, Server, Puzzle, Cpu, type LucideIcon,
} from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project, ProjectArea } from '../types';
import PageHeader from '../components/PageHeader';

type AreaId = 'all' | ProjectArea;

const AREAS: { id: AreaId; name: string; icon: LucideIcon }[] = [
  { id: 'all', name: 'All Projects', icon: LayoutGrid },
  { id: 'ai', name: 'AI & LLMs', icon: Sparkles },
  { id: 'data', name: 'Data Science', icon: ChartColumn },
  { id: 'cloud', name: 'Cloud & Infra', icon: Cloud },
  { id: 'backend', name: 'Backend & APIs', icon: Server },
  { id: 'systems', name: 'Problem Solving', icon: Puzzle },
  { id: 'hardware', name: 'Hardware', icon: Cpu },
];

const AREA_NAME = Object.fromEntries(AREAS.map((a) => [a.id, a.name])) as Record<AreaId, string>;
const UNIT_ANGLE = 360 / AREAS.length;

const projectsIn = (area: AreaId) =>
  area === 'all' ? PROJECTS : PROJECTS.filter((p) => p.areas.includes(area));

export default function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const rotation = useMotionValue(0);
  const currentStep = React.useRef(0);
  const isDragging = React.useRef(false);

  // Track activeIndex in a ref so the motion listener doesn't need it as a dependency
  const activeIndexRef = React.useRef(activeIndex);
  React.useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  // Sync activeIndex with rotation for real-time feedback while dragging
  React.useEffect(() => {
    return rotation.on('change', (v) => {
      if (isDragging.current) {
        const normalizedRotation = (-v % 360 + 360) % 360;
        const index = Math.round(normalizedRotation / UNIT_ANGLE) % AREAS.length;
        if (index !== activeIndexRef.current) {
          activeIndexRef.current = index;
          setActiveIndex(index);
        }
      }
    });
  }, [rotation]);

  const rotateTo = (step: number) => {
    currentStep.current = step;
    setActiveIndex((step % AREAS.length + AREAS.length) % AREAS.length);
    animate(rotation, -step * UNIT_ANGLE, { type: 'spring', stiffness: 300, damping: 30 });
  };

  // Shortest way around the wheel to a given index
  const rotateToIndex = (index: number) => {
    const diff = ((index - activeIndex + AREAS.length / 2) % AREAS.length + AREAS.length) % AREAS.length - AREAS.length / 2;
    rotateTo(currentStep.current + Math.round(diff));
  };

  const onPan = (_: unknown, info: { delta: { x: number } }) => {
    isDragging.current = true;
    rotation.stop();
    rotation.set(rotation.get() + info.delta.x * 0.4);
  };

  const onPanEnd = () => {
    // Small delay before clearing isDragging to prevent accidental clicks
    setTimeout(() => { isDragging.current = false; }, 50);
    rotateTo(Math.round(-rotation.get() / UNIT_ANGLE));
  };

  const activeArea = AREAS[activeIndex];
  const activeProjects = projectsIn(activeArea.id);
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 150;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <PageHeader
        title="Project"
        highlight="Portfolio"
        subtitle="Spin the wheel or use the arrows to explore projects by area."
      />

      {/* 3D wheel of areas */}
      <section className="mb-10 md:mb-14">
        <div className="relative h-[170px] md:h-[240px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y select-none">
          <motion.div onPan={onPan} onPanEnd={onPanEnd} className="absolute inset-0 z-0" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120px] h-[120px] md:w-[220px] md:h-[220px] rounded-full border border-dashed border-white/10" />
          </div>

          <motion.div
            style={{ rotateY: rotation, transformStyle: 'preserve-3d' }}
            className="relative w-14 h-14 md:w-20 md:h-20 z-10"
          >
            {AREAS.map((area, index) => {
              const Icon = area.icon;
              const isActive = index === activeIndex;
              return (
                <div
                  key={area.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotateY(${index * UNIT_ANGLE}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <motion.button
                    type="button"
                    aria-label={area.name}
                    aria-pressed={isActive}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { if (!isDragging.current) rotateToIndex(index); }}
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center transition-all duration-500 pointer-events-auto ${
                      isActive
                        ? 'bg-white/10 border-white/50 text-white shadow-xl shadow-white/5 scale-110'
                        : 'card-block border-white/5 text-neutral-500 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                  </motion.button>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Active area + controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-2">
          <button
            type="button"
            onClick={() => rotateTo(currentStep.current - 1)}
            aria-label="Previous area"
            className="p-2.5 card-block rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="w-44 md:w-56 text-center">
            <p className="font-display text-lg md:text-xl text-white leading-tight">{activeArea.name}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              {activeProjects.length} {activeProjects.length === 1 ? 'project' : 'projects'}
              {activeArea.id !== 'all' && (
                <>
                  {' · '}
                  <button type="button" onClick={() => rotateToIndex(0)} className="uppercase hover:text-white transition-colors">
                    View all
                  </button>
                </>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={() => rotateTo(currentStep.current + 1)}
            aria-label="Next area"
            className="p-2.5 card-block rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Project grid */}
      <motion.div
        key={activeArea.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
      >
        {activeProjects.map((project) => (
          <ProjectCard key={project.title} project={project} showArea={activeArea.id === 'all'} />
        ))}
      </motion.div>
    </div>
  );
}

const LINK_CLASS = 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-neutral-400 hover:text-white hover:bg-white/10 transition-colors';

const ProjectCard: React.FC<{ project: Project; showArea: boolean }> = ({ project, showArea }) => {
  const links = [
    project.repoUrl && { href: project.repoUrl, label: 'Code', icon: Github },
    project.demoUrl && { href: project.demoUrl, label: 'Demo', icon: Play },
    project.liveUrl && { href: project.liveUrl, label: 'Live', icon: ExternalLink },
    project.reportUrl && { href: project.reportUrl, label: 'Report', icon: FileText },
  ].filter(Boolean) as { href: string; label: string; icon: LucideIcon }[];

  return (
    <article className="flex flex-col h-full p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          {showArea && (
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              {AREA_NAME[project.areas[0]]}
            </p>
          )}
          <h3 className="font-display font-medium text-white text-base md:text-lg leading-snug">{project.title}</h3>
        </div>
        {project.date && (
          <span className="shrink-0 mt-0.5 text-[10px] md:text-xs font-bold text-neutral-500">{project.date}</span>
        )}
      </div>

      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] md:text-[11px] font-medium text-neutral-400">
            {tag}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5 -ml-2.5">
            {links.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
