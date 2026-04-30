import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { RESUME_EN, RESUME_PT } from '../constants';
import { GraduationCap, Globe, Code, User, ChevronRight, Play, Award, ExternalLink, Terminal } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = React.useState<'en' | 'pt'>('en');
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-12 md:mb-20 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 text-white font-medium text-xs md:text-sm border border-white/10"
        >
          {lang === 'en' ? 'Available for new opportunities' : 'Disponível para novas oportunidades'}
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 md:mb-6 tracking-tight leading-tight"
        >
          Lucas <span className="text-gradient">Kamikawa</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-8 md:mb-10 px-4"
        >
          {lang === 'en' ? `${age} years old` : `${age} anos`} • São Paulo (SP) • Computer Engineering Student @ Insper
        </motion.p>

        <div className="flex justify-center p-1 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
          <button
            onClick={() => setLang('en')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              lang === 'en' ? 'bg-white text-black shadow-lg' : 'text-neutral-500 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('pt')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              lang === 'pt' ? 'bg-white text-black shadow-lg' : 'text-neutral-500 hover:text-white'
            }`}
          >
            PT
          </button>
        </div>
      </section>

      {/* Resume Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Profile Section & Mini Resume */}
        <motion.div variants={itemVariants} className="md:col-span-8 glass p-6 md:p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6 text-white">
            <User size={20} className="md:w-6 md:h-6 text-neutral-300" />
            <h2 className="text-xl md:text-2xl font-display font-light">
              {lang === 'en' ? 'Professional Profile' : 'Perfil Profissional'}
            </h2>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
              {content.profile}
            </p>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <h3 className="text-xs md:text-sm font-display font-bold text-white mb-4 md:mb-6 uppercase tracking-wider text-blue-400">
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
              <h3 className="text-[10px] md:text-sm font-light uppercase tracking-widest text-neutral-400 mb-4 md:mb-6">
                {lang === 'en' ? 'Key Certifications' : 'Principais Certificações'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white/[0.02] p-3 md:p-4 rounded-2xl border border-white/5">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Award size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-sm font-medium leading-tight">Google Cybersecurity</p>
                    <p className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-tighter">Professional Certificate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/[0.02] p-3 md:p-4 rounded-2xl border border-white/5">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Globe size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-sm font-medium leading-tight">AWS Discovery Day</p>
                    <p className="text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-tighter">Cloud Fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="md:col-span-4 glass p-8 rounded-3xl text-white">
          <div className="flex items-center gap-3 mb-6 text-neutral-400">
            <Code size={24} className="text-neutral-300" />
            <h2 className="text-2xl font-display font-light">
              {lang === 'en' ? 'Skills' : 'Habilidades'}
            </h2>
          </div>
          <div className="space-y-6">
            {content.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 rounded-lg text-sm border border-white/10 text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="md:col-span-6 glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-neutral-300">
            <GraduationCap size={24} />
            <h2 className="text-2xl font-display font-light text-white">
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
        <motion.div variants={itemVariants} className="md:col-span-6 glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-neutral-300">
            <Globe size={24} />
            <h2 className="text-2xl font-display font-light text-white">
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
        </motion.div>


      </motion.div>
    </div>
  );
}
