import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES, RESUME_EN, RESUME_PT } from '../constants';
import { GraduationCap, Globe, Code, User, ChevronRight, Play, Award, ExternalLink, Terminal, FileText } from 'lucide-react';
import { useLang } from '../useLang';
import { CertificateLightbox, useCertificateViewer } from '../components/CertificateLightbox';
import PageHeader from '../components/PageHeader';
import LangToggle from '../components/LangToggle';
import { CARD, CARD_HEADER, CARD_ICON, CARD_TITLE, LABEL } from '../ui';

const CV_URL = {
  en: 'cv/Lucas_Kamikawa_CV_EN.pdf',
  pt: 'cv/Lucas_Kamikawa_Curriculo_PT.pdf',
};

const KEY_CERTIFICATES = [
  { id: 1, badge: 'images/certificates/thumbs/google-cybersecurity-badge.png', name: 'Google Cybersecurity', detail: 'Professional Certificate' },
  { id: 11, badge: 'images/certificates/thumbs/aws-academy-cloud-foundations-badge.png', name: 'AWS Academy Graduate', detail: 'Cloud Foundations' },
].flatMap(({ id, ...rest }) => {
  const cert = CERTIFICATES.find((c) => c.id === id);
  return cert ? [{ cert, ...rest }] : [];
});

export default function Home() {
  const [lang, setLang] = useLang();
  const viewer = useCertificateViewer();
  const content = lang === 'en' ? RESUME_EN : RESUME_PT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const birthDate = new Date('2005-02-19');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <PageHeader
        title="Lucas"
        highlight="Kamikawa"
        subtitle={`${lang === 'en' ? `${age} years old` : `${age} anos`} • São Paulo (SP) • Computer Engineering Student @ Insper`}
      >
        <div className="flex flex-wrap justify-center items-center gap-3">
          <LangToggle lang={lang} onChange={setLang} />
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

      {/* Resume Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Profile Section & Mini Resume */}
        <motion.div variants={itemVariants} className={`md:col-span-8 ${CARD}`}>
          <div className={CARD_HEADER}>
            <User className={CARD_ICON} />
            <h2 className={CARD_TITLE}>
              {lang === 'en' ? 'Professional Profile' : 'Perfil Profissional'}
            </h2>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
              {content.profile}
            </p>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <h3 className={`${LABEL} mb-4 md:mb-6`}>
                {lang === 'en' ? 'Featured Projects' : 'Projetos em Destaque'}
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1 md:mb-2 text-sm md:text-base">
                    <h4 className="font-bold text-white leading-tight">
                      {lang === 'en' ? 'Churn Prediction' : 'Predição de Churn'} 
                      <span className="text-neutral-500 font-normal block sm:inline sm:ml-2 text-[10px] sm:text-sm uppercase tracking-tighter sm:normal-case sm:tracking-normal">| Hackathon Databricks</span>
                    </h4>
                    <a href="https://www.youtube.com/watch?v=JsDl4ME_sWU" target="_blank" className="text-white hover:text-neutral-300 flex items-center gap-1 text-[10px] sm:text-xs transition-colors shrink-0">
                      <Play size={10} strokeWidth={3} className="sm:w-3 sm:h-3" /> {lang === 'en' ? 'Demo' : 'Video'}
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm text-neutral-400 space-y-1 ml-1 md:ml-2">
                    <li>{lang === 'en' ? 'End-to-end churn prediction solution.' : 'Solução end-to-end de predição de Churn.'}</li>
                    <li>{lang === 'en' ? 'Accessible frontend for managers.' : 'Frontend acessível voltado a gestores.'}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Machine Learning – Adult Census</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-neutral-400 space-y-1 ml-1 md:ml-2">
                    <li>{lang === 'en' ? 'Advanced EDA and feature engineering.' : 'EDA avançada e feature engineering.'}</li>
                    <li>{lang === 'en' ? 'Predictive modeling with Scikit-learn.' : 'Modelagem preditiva com Scikit-learn.'}</li>
                  </ul>
                </div>

                <div className="pb-2 md:pb-4">
                  <h4 className="font-bold text-white mb-2 text-sm md:text-base">{lang === 'en' ? 'Algorithm Analysis & Optimization' : 'Análise de Algoritmos e Otimização'}</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-neutral-400 space-y-1 ml-2">
                    <li>{lang === 'en' ? 'In-depth study of computational complexity (O, Ω, Θ) applied to data pipelines.' : 'Estudo aprofundado de complexidade computacional (notações O, Omega, Theta).'}</li>
                    <li>{lang === 'en' ? 'Pattern matching with Rabin-Karp; efficient data structures for large volumes.' : 'Busca de padrões com Rabin-Karp; estruturas de dados eficientes para grandes volumes.'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <h3 className={`${LABEL} mb-4 md:mb-6`}>
                {lang === 'en' ? 'Key Certifications' : 'Principais Certificações'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {KEY_CERTIFICATES.map(({ cert, badge, name, detail }) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => viewer.open(cert)}
                    className="flex items-center gap-3 md:gap-4 bg-white/[0.02] p-3 md:p-4 rounded-2xl border border-white/5 text-left hover:bg-white/[0.05] hover:border-white/10 transition-colors"
                  >
                    <img
                      src={badge}
                      alt={`${name} badge`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0"
                    />
                    <div>
                      <p className="text-white text-xs md:text-sm font-medium leading-tight">{name}</p>
                      <p className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-tighter">{detail}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className={`md:col-span-4 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Code className={CARD_ICON} />
            <h2 className={CARD_TITLE}>
              {lang === 'en' ? 'Skills' : 'Habilidades'}
            </h2>
          </div>
          <div className="space-y-6">
            {content.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className={`${LABEL} mb-3`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 card-block rounded-lg text-sm border border-white/10 text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className={`md:col-span-6 ${CARD}`}>
          <div className={CARD_HEADER}>
            <GraduationCap className={CARD_ICON} />
            <h2 className={CARD_TITLE}>
              {lang === 'en' ? 'Education' : 'Formação'}
            </h2>
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
        </motion.div>

        {/* International Section */}
        <motion.div variants={itemVariants} className={`md:col-span-6 ${CARD}`}>
          <div className={CARD_HEADER}>
            <Globe className={CARD_ICON} />
            <h2 className={CARD_TITLE}>
              {lang === 'en' ? 'International Experience' : 'Experiência Internacional'}
            </h2>
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

          <div className="mt-6 md:mt-8 pt-6 border-t border-white/10">
            <h3 className={`${LABEL} mb-4`}>{lang === 'en' ? 'Spoken Languages' : 'Idiomas'}</h3>
            <div className="grid grid-cols-3 gap-3">
              {content.languages.map((language) => (
                <div key={language.name}>
                  <p className="font-bold text-white text-sm md:text-base">{language.name}</p>
                  <p className="text-xs md:text-sm text-neutral-400">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


      </motion.div>

      <CertificateLightbox image={viewer.viewing} onClose={viewer.close} lang={lang} />
    </div>
  );
}
