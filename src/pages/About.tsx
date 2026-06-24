import React from 'react';
import { motion } from 'motion/react';
import { KNOWLEDGE_BASE } from '../constants';
import { Book, Wrench, GraduationCap, Award, CheckCircle2, Code } from 'lucide-react';

export default function About() {
  const [lang, setLang] = React.useState<'en' | 'pt'>('en');

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
      <section className="mb-16 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
        >
          {lang === 'en' ? 'About' : 'Sobre'} <span className="text-gradient">Me</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-8"
        >
          {lang === 'en' 
            ? "I'm a Computer Engineering student at Insper, passionate about solving complex problems through data and efficient systems."
            : "Sou estudante de Engenharia da Computação no Insper, apaixonado por resolver problemas complexos através de dados e sistemas eficientes."}
        </motion.p>

        <div className="flex justify-center p-1 card-block border border-white/10 rounded-full w-fit mx-auto">
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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Programming Languages */}
        <motion.div variants={itemVariants} className="md:col-span-2 glass p-6 md:p-8 rounded-3xl mb-4">
          <div className="flex items-center gap-3 mb-4 md:mb-6 text-white text-xl md:text-2xl">
            <Code size={24} className="md:w-7 md:h-7 text-neutral-300" />
            <h2 className="font-display font-light">
              {lang === 'en' ? 'Programming Languages' : 'Linguagens de Programação'}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {KNOWLEDGE_BASE.languages.map((lang) => (
              <span key={lang} className="px-3 py-1.5 md:px-4 md:py-2 card-block text-neutral-300 border border-white/10 rounded-xl font-bold text-xs md:text-sm">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Knowledge Base / Courses */}
        <motion.div variants={itemVariants} className="glass p-6 md:p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 md:mb-8 text-white text-xl md:text-2xl">
            <Book size={24} className="md:w-7 md:h-7 text-neutral-300" />
            <h2 className="font-display font-light">
              {lang === 'en' ? 'Academic Focus' : 'Foco Acadêmico'}
            </h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            {KNOWLEDGE_BASE.courses.map((course) => (
              <div key={course.name} className="relative pl-6 border-l border-white/5">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{course.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <span key={topic} className="px-2 py-0.5 md:px-3 md:py-1 card-block rounded-full text-[10px] md:text-xs text-neutral-400 border border-white/10 whitespace-nowrap">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* Tools & Environment */}
          <motion.div variants={itemVariants} className="glass p-6 md:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6 text-white text-xl md:text-2xl">
              <Wrench size={24} className="md:w-7 md:h-7 text-neutral-300" />
              <h2 className="font-display font-light">
                {lang === 'en' ? 'Tools & Environment' : 'Ferramentas e Ambiente'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {KNOWLEDGE_BASE.tools.map((tool) => (
                <div key={tool} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 card-block rounded-2xl border border-white/10 text-neutral-300">
                  <CheckCircle2 size={14} className="md:w-4 md:h-4 text-neutral-400" />
                  <span className="font-medium text-xs md:text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Highlights */}
          <motion.div variants={itemVariants} className="glass p-6 md:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6 text-white text-xl md:text-2xl">
              <Award size={24} className="md:w-7 md:h-7 text-neutral-300" />
              <h2 className="font-display font-light">
                {lang === 'en' ? 'Key Certifications' : 'Principais Certificações'}
              </h2>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <GraduationCap size={18} className="md:w-5 md:h-5 text-neutral-300 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm md:text-base">Google Cybersecurity Professional</p>
                  <p className="text-xs md:text-sm text-neutral-400">Coursera • 8 Courses</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap size={18} className="md:w-5 md:h-5 text-neutral-300 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm md:text-base">AWS Discovery Day</p>
                  <p className="text-xs md:text-sm text-neutral-400">Kasolution • Cloud Fundamentals</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Resume Strategy Section */}
        <motion.div variants={itemVariants} className="md:col-span-2 glass border border-white/5 p-8 rounded-3xl">
          <h2 className="text-2xl font-display font-light text-white mb-4">
            {lang === 'en' ? 'Professional Strategy' : 'Estratégia Profissional'}
          </h2>
          <p className="text-neutral-400 leading-relaxed max-w-4xl">
            {lang === 'en' 
              ? "My current focus is on Data Engineering, API development (FastAPI/REST), and complex problem solving. I use my strong foundation in Cloud Infrastructure and Embedded Systems as a technical advantage to understand the end-to-end data lifecycle—from the hardware level to scalable cloud distribution. This multi-disciplinary background allows me to build robust and efficient data-driven solutions."
              : "Meu foco atual está em Engenharia de Dados, desenvolvimento de APIs (FastAPI/REST) e resolução de problemas complexos. Utilizo minha sólida base em Infraestrutura de Nuvem e Sistemas Embarcados como uma vantagem técnica para entender o ciclo de vida completo do dado — desde o nível de hardware até a distribuição escalável em nuvem. Essa formação multidisciplinar me permite construir soluções robustas e eficientes baseadas em dados."}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
