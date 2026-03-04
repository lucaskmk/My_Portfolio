import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESUME_EN, RESUME_PT } from '../constants';
import { GraduationCap, Globe, Code, User, ChevronRight } from 'lucide-react';

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
          20 years old • São Paulo (SP) • Computer Engineering Student @ Insper
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
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="md:col-span-8 glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-white">
            <User size={24} />
            <h2 className="text-2xl font-display font-bold text-white">
              {lang === 'en' ? 'Professional Profile' : 'Perfil Profissional'}
            </h2>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed">
            {content.profile}
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="md:col-span-4 bg-white/5 border border-white/10 p-8 rounded-3xl text-white">
          <div className="flex items-center gap-3 mb-6 text-neutral-400">
            <Code size={24} />
            <h2 className="text-2xl font-display font-bold">
              {lang === 'en' ? 'Skills' : 'Habilidades'}
            </h2>
          </div>
          <div className="space-y-6">
            {content.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
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
          <div className="flex items-center gap-3 mb-6 text-white">
            <GraduationCap size={24} />
            <h2 className="text-2xl font-display font-bold text-white">
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
          <div className="flex items-center gap-3 mb-6 text-white">
            <Globe size={24} />
            <h2 className="text-2xl font-display font-bold text-white">
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

        {/* Final Section */}
        <motion.div variants={itemVariants} className="md:col-span-12 bg-white p-8 rounded-3xl text-black flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-medium text-center md:text-left">
            {content.final}
          </p>
          <a 
            href="https://linkedin.com/in/lucas-kenji-kamikawa-28417629a/" 
            target="_blank"
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-xl"
          >
            {lang === 'en' ? 'Connect on LinkedIn' : 'Conectar no LinkedIn'}
            <ChevronRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
