import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CERTIFICATES, PROJECTS, RESUME_EN, RESUME_PT } from '../constants';
import {
  User, Briefcase, Code, Compass, GraduationCap, Globe, Languages, FileText, ArrowUpRight, LayoutGrid, ChevronDown,
} from 'lucide-react';
import { useLang, type Lang } from '../useLang';
import { AREA_INFO, AREA_ORDER } from '../areas';
import { projectLinks } from '../projectLinks';
import type { AreaId } from '../types';
import { CertificateLightbox, useCertificateViewer } from '../components/CertificateLightbox';
import PageHeader from '../components/PageHeader';
import { CARD, CARD_HEADER, CARD_ICON, CARD_TITLE, LABEL } from '../ui';

// To update the CVs, replace the PDFs in public/cv keeping these exact file names
const CV_URL = {
  en: 'cv/Lucas_Kamikawa_CV_EN.pdf',
  pt: 'cv/Lucas_Kamikawa_Curriculo_PT.pdf',
};

const KEY_CERTIFICATES = [
  {
    id: 1,
    badge: 'images/certificates/thumbs/google-cybersecurity-badge.png',
    name: 'Google Cybersecurity',
    detail: { en: 'Professional Certificate', pt: 'Certificado Profissional' },
  },
  {
    id: 11,
    badge: 'images/certificates/thumbs/aws-academy-cloud-foundations-badge.png',
    name: 'AWS Academy Graduate',
    detail: { en: 'Cloud Foundations', pt: 'Cloud Foundations' },
  },
].flatMap(({ id, ...rest }) => {
  const cert = CERTIFICATES.find((c) => c.id === id);
  return cert ? [{ cert, ...rest }] : [];
});

const FEATURED_PROJECTS = PROJECTS.filter((p) => p.highlights);

// Each area card opens the project wheel on that area
const areaHref = (id: AreaId) => `/projects?area=${id}`;

const TILE_BASE = 'group flex flex-col p-4 md:p-5 rounded-2xl bg-white/[0.04] border hover:bg-white/[0.07] hover:border-white/15 transition-colors';
const TILE = `${TILE_BASE} border-white/[0.06]`;
const TILE_ALL = `${TILE_BASE} border-dashed border-white/15`;
const SECTION_DIVIDER = 'border-t border-white/10 pt-6 md:pt-8';

// Skills are listed by importance: each group shows its first items and the arrow opens the rest
const SKILLS_VISIBLE = 6;
// On desktop the skills card sits beside the taller profile card, so each group shows a few more items to fill it
const SKILLS_EXTRA_DESKTOP = 3;
const DESKTOP_QUERY = '(min-width: 1024px)';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return isDesktop;
}
const SKILL_CHIP = 'px-3 py-1 card-block rounded-lg text-sm border border-white/10 text-neutral-300';

interface SkillGroupProps {
  category: string;
  items: string[];
  visible?: number;
  hiddenOnDesktop?: number;
  lang: Lang;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ category, items, visible: visibleCount = SKILLS_VISIBLE, hiddenOnDesktop, lang }) => {
  const [expanded, setExpanded] = useState(false);
  const isDesktop = useIsDesktop();
  const hiddenCount = isDesktop
    ? hiddenOnDesktop ?? items.length - visibleCount - SKILLS_EXTRA_DESKTOP
    : items.length - visibleCount;
  const visible = expanded || hiddenCount <= 0 ? items : items.slice(0, items.length - hiddenCount);

  return (
    <div>
      <h3 className={`${LABEL} mb-3`}>{category}</h3>
      <div className="flex flex-wrap gap-2">
        {visible.map((item) => (
          <span key={item} className={SKILL_CHIP}>{item}</span>
        ))}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded
              ? (lang === 'en' ? 'Show less' : 'Mostrar menos')
              : (lang === 'en' ? `Show ${hiddenCount} more` : `Mostrar mais ${hiddenCount}`)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm border border-dashed border-white/15 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
          >
            {!expanded && `+${hiddenCount}`}
            <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
  );
};

// On phones the featured projects become a swipe carousel (one card at a time, the next one peeking in)
// so they take one card of height instead of four; from the sm breakpoint up they are a 2-column grid
const FeaturedProjects: React.FC<{ lang: Lang }> = ({ lang }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = (track: HTMLDivElement) => {
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0') : 0;
  };

  const onScroll = () => {
    const track = trackRef.current;
    const step = track && cardStep(track);
    if (!track || !step) return;
    // The last card can't snap to the left edge, so reaching the end counts as the last one
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    setActive(atEnd ? FEATURED_PROJECTS.length - 1 : Math.round(track.scrollLeft / step));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: index * cardStep(track), behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory overscroll-x-contain -mx-6 px-6 scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 md:gap-4"
      >
        {FEATURED_PROJECTS.map((project) => (
          <article key={project.title.en} className="w-[85%] shrink-0 snap-start sm:w-auto flex flex-col p-4 md:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            <p className={`${LABEL} mb-1.5`}>{AREA_INFO[project.areas[0]].name[lang]}</p>
            <h4 className="font-display font-medium text-white text-sm md:text-base leading-snug">{project.title[lang]}</h4>
            <ul className="mt-2 pl-4 list-disc text-xs md:text-sm text-neutral-400 space-y-1">
              {project.highlights?.[lang].map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="mt-auto pt-3 flex flex-wrap gap-1 -ml-2.5">
              {projectLinks(project, lang).map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-3 flex justify-center sm:hidden">
        {FEATURED_PROJECTS.map((project, index) => (
          <button
            key={project.title.en}
            type="button"
            onClick={() => goTo(index)}
            aria-label={lang === 'en'
              ? `Project ${index + 1} of ${FEATURED_PROJECTS.length}`
              : `Projeto ${index + 1} de ${FEATURED_PROJECTS.length}`}
            aria-current={index === active}
            className="relative p-1.5 after:absolute after:inset-x-0 after:-inset-y-3"
          >
            <span className={`block h-1.5 rounded-full transition-all ${index === active ? 'w-4 bg-white/70' : 'w-1.5 bg-white/25'}`} />
          </button>
        ))}
      </div>
    </>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function getAge() {
  // Local date (month is 0-based): a '2005-02-19' string is read as UTC and turns into Feb 18 in Brazil
  const birthDate = new Date(2005, 1, 19);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function Home() {
  const [lang] = useLang();
  const viewer = useCertificateViewer();
  const content = lang === 'en' ? RESUME_EN : RESUME_PT;
  const age = getAge();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <PageHeader
        title="Lucas"
        highlight="Kamikawa"
        subtitle={lang === 'en'
          ? `${age} years old • São Paulo (SP) • Computer Engineering Student @ Insper`
          : `${age} anos • São Paulo (SP) • Estudante de Engenharia da Computação @ Insper`}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs md:text-sm text-neutral-300">
            <span className="relative flex w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <Briefcase size={14} className="shrink-0 text-neutral-400" />
            <span>
              {lang === 'en' ? 'Process & Data Engineering Intern' : 'Estagiário em Engenharia de Processos e Dados'}
              {' @ '}
              <span className="font-bold text-white">Neria Energia</span>
            </span>
          </p>
          <a
            href={CV_URL[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 card-block border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <FileText size={16} />
            {lang === 'en' ? 'Download CV' : 'Baixar Currículo'}
          </a>
        </div>
      </PageHeader>

      {/* Phones and tablets: profile, areas, skills, education, international, languages. Desktop (lg): profile with skills on the side, then areas, then education, international and languages */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Profile, key certifications and featured projects */}
        <motion.section variants={itemVariants} className={`order-1 md:col-span-12 lg:col-span-8 ${CARD}`}>
          <div className={CARD_HEADER}>
            <User className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'Professional Profile' : 'Perfil Profissional'}</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* On phones the long profile starts with its first lines and "Read more" shows the rest */}
            <div>
              <p className={`text-base md:text-lg text-neutral-400 leading-relaxed md:line-clamp-none ${profileOpen ? '' : 'line-clamp-5'}`}>
                {content.profile}
              </p>
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                aria-expanded={profileOpen}
                className="md:hidden mt-1 -ml-2 inline-flex items-center gap-1 px-2 py-2.5 text-sm font-bold text-neutral-300 hover:text-white transition-colors"
              >
                {profileOpen
                  ? (lang === 'en' ? 'Show less' : 'Mostrar menos')
                  : (lang === 'en' ? 'Read more' : 'Ler mais')}
                <ChevronDown size={14} className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={SECTION_DIVIDER}>
              <h3 className={`${LABEL} mb-4 md:mb-6`}>{lang === 'en' ? 'Key Certifications' : 'Principais Certificações'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {KEY_CERTIFICATES.map(({ cert, badge, name, detail }) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => viewer.open(cert)}
                    className="flex items-center gap-3 md:gap-4 bg-white/[0.02] p-3 md:p-4 rounded-2xl border border-white/5 text-left hover:bg-white/[0.05] hover:border-white/10 transition-colors"
                  >
                    <img src={badge} alt={`${name} badge`} className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0" />
                    <div>
                      <p className="text-white text-xs md:text-sm font-medium leading-tight">{name}</p>
                      <p className="text-[11px] text-neutral-400 uppercase tracking-wide">{detail[lang]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className={SECTION_DIVIDER}>
              <h3 className={`${LABEL} mb-4 md:mb-6`}>{lang === 'en' ? 'Featured Projects' : 'Projetos em Destaque'}</h3>
              <FeaturedProjects lang={lang} />
            </div>
          </div>
        </motion.section>

        {/* Skills, with everything, on the side */}
        <motion.section variants={itemVariants} className={`order-3 lg:order-2 md:col-span-12 lg:col-span-4 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Code className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'Skills' : 'Habilidades'}</h2>
          </div>
          <div className="space-y-6">
            {/* Index keys keep each group open or closed when the language changes */}
            {content.skills.map((group, index) => (
              <SkillGroup key={index} category={group.category} items={group.items} visible={group.visible} hiddenOnDesktop={group.hiddenOnDesktop} lang={lang} />
            ))}
          </div>
        </motion.section>

        {/* Areas */}
        <motion.section variants={itemVariants} className={`order-2 lg:order-3 md:col-span-12 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Compass className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'Areas' : 'Áreas'}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {AREA_ORDER.map((id) => {
              const { icon: Icon, name, description } = AREA_INFO[id];
              return (
                <Link key={id} to={areaHref(id)} className={TILE}>
                  <div className="flex items-start justify-between text-neutral-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mt-3 md:mt-4 font-display font-medium text-white text-sm md:text-base leading-tight">{name[lang]}</p>
                  <p className="mt-1 text-xs md:text-sm text-neutral-400 leading-snug">{description[lang]}</p>
                </Link>
              );
            })}
            <Link to="/projects" className={TILE_ALL}>
              <div className="flex items-start justify-between text-neutral-400 group-hover:text-white transition-colors">
                <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-3 md:mt-4 font-display font-medium text-white text-sm md:text-base leading-tight">
                {lang === 'en' ? 'All Projects' : 'Todos os Projetos'}
              </p>
              <p className="mt-1 text-xs md:text-sm text-neutral-400 leading-snug">
                {lang === 'en' ? 'Explore the wheel' : 'Explorar a roleta'}
              </p>
            </Link>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={itemVariants} className={`order-4 md:col-span-6 lg:col-span-4 ${CARD}`}>
          <div className={CARD_HEADER}>
            <GraduationCap className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'Education' : 'Formação'}</h2>
          </div>
          <div className="space-y-6">
            {content.education.map((edu) => (
              <div key={edu.school} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-white">{edu.school}</h3>
                  <p className="text-neutral-400">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* International experience */}
        <motion.section variants={itemVariants} className={`order-5 md:col-span-6 lg:col-span-4 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Globe className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'International Experience' : 'Experiência Internacional'}</h2>
          </div>
          <div className="space-y-6">
            {content.international.map((exp) => (
              <div key={exp.location} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-white">{exp.location}</h3>
                  <p className="text-neutral-400">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Spoken languages: a row of three on phones and tablets, a list in the three-column desktop row */}
        <motion.section variants={itemVariants} className={`order-6 md:col-span-12 lg:col-span-4 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Languages className={CARD_ICON} />
            <h2 className={CARD_TITLE}>{lang === 'en' ? 'Spoken Languages' : 'Idiomas'}</h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-5">
            {content.languages.map((language) => (
              <div key={language.name}>
                <p className="font-bold text-white text-sm md:text-base">{language.name}</p>
                <p className="text-xs md:text-sm text-neutral-400">{language.level}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      <CertificateLightbox image={viewer.viewing} onClose={viewer.close} lang={lang} />
    </div>
  );
}
