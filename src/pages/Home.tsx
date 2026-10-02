import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CERTIFICATES, PROJECTS, RESUME_EN, RESUME_PT } from '../constants';
import {
  User, Code, Compass, GraduationCap, Globe, Languages, FileText, ArrowUpRight, LayoutGrid, ChevronDown,
} from 'lucide-react';
import { useLang, type Lang } from '../useLang';
import { AREA_INFO, AREA_ORDER } from '../areas';
import { projectLinks } from '../projectLinks';
import type { AreaId } from '../types';
import { CertificateLightbox, useCertificateViewer } from '../components/CertificateLightbox';
import PageHeader from '../components/PageHeader';
import { CARD, CARD_HEADER, CARD_ICON, CARD_TITLE, LABEL } from '../ui';

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

// Each area card opens the project wheel on that area; cybersecurity has no projects yet, so it opens its certificates
const areaHref = (id: AreaId) =>
  id === 'cyber' ? '/certificates?category=Cybersecurity' : `/projects?area=${id}`;

const TILE_BASE = 'group flex flex-col p-4 md:p-5 rounded-2xl bg-white/[0.04] border hover:bg-white/[0.07] hover:border-white/15 transition-colors';
const TILE = `${TILE_BASE} border-white/[0.06]`;
const TILE_ALL = `${TILE_BASE} border-dashed border-white/15`;
const SECTION_DIVIDER = 'border-t border-white/10 pt-6 md:pt-8';

// Skills are listed by importance: each group shows its first items and the arrow opens the rest
const SKILLS_VISIBLE = 6;
const SKILL_CHIP = 'px-3 py-1 card-block rounded-lg text-sm border border-white/10 text-neutral-300';

interface SkillGroupProps {
  category: string;
  items: string[];
  visible?: number;
  lang: Lang;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ category, items, visible: visibleCount = SKILLS_VISIBLE, lang }) => {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - visibleCount;
  const visible = expanded || hiddenCount <= 0 ? items : items.slice(0, visibleCount);

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function getAge() {
  const birthDate = new Date('2005-02-19');
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <PageHeader
        title="Lucas"
        highlight="Kamikawa"
        subtitle={lang === 'en'
          ? `${age} years old • São Paulo (SP) • Computer Engineering Student @ Insper`
          : `${age} anos • São Paulo (SP) • Estudante de Engenharia da Computação @ Insper`}
      >
        <div className="flex flex-wrap justify-center items-center gap-3">
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
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">{content.profile}</p>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {FEATURED_PROJECTS.map((project) => (
                  <article key={project.title.en} className="flex flex-col p-4 md:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
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
              <SkillGroup key={index} category={group.category} items={group.items} visible={group.visible} lang={lang} />
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
