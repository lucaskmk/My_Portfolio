import React from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'motion/react';
import { PROJECTS, ACADEMIC_PROJECTS } from '../constants';
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen, Calendar, Tag } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

const LANGUAGES = [
  { id: 'python', name: 'Python', icon: '/images/python-icon.png' },
  { id: 'web', name: 'Web Dev', icon: '/images/HTML-CSS-JS-icon.png' },
  { id: 'csharp', name: 'C#', icon: '/images/csharp-icon.png' },
  { id: 'c', name: 'C', icon: '/images/c-icon.png' },
  { id: 'java', name: 'Java', icon: '/images/java-icon.png' },
  { id: 'vhdl', name: 'VHDL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ieee/ieee-original.svg' },
  { id: 'assembly', name: 'Assembly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg' },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showAcademic, setShowAcademic] = React.useState(true);
  const rotation = useMotionValue(0);
  const currentStep = React.useRef(0);

  const rotate = (direction: number) => {
    // direction 1 = next (right), -1 = prev (left)
    currentStep.current += direction;
    
    const newIndex = (currentStep.current % LANGUAGES.length + LANGUAGES.length) % LANGUAGES.length;
    setActiveIndex(newIndex);
    
    const unitAngle = 360 / LANGUAGES.length;
    animate(rotation, -currentStep.current * unitAngle, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    });
  };

  const activeLanguage = LANGUAGES[activeIndex];
  const activeProjects = PROJECTS[activeLanguage.id] || [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white">Project <span className="text-gradient">Portfolio</span></h1>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto px-4">Explore my technical skills and academic journey through this interactive showcase.</p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-700 ease-in-out"
        >
          {/* Left Column: Language Projects */}
          <motion.div 
            layout
            className={`space-y-12 ${showAcademic ? 'xl:col-span-7' : 'xl:col-span-12 max-w-5xl mx-auto w-full'}`}
          >
            <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden h-full">
              <button 
                onClick={() => setShowAcademic(!showAcademic)}
                className={`hidden xl:block absolute top-0 right-0 p-8 text-neutral-400 hover:text-white transition-all duration-300 z-10 ${showAcademic ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}
                title={showAcademic ? "Hide Academic Projects" : "Show Academic Projects"}
              >
                <motion.div
                  animate={{ rotate: showAcademic ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  <ChevronRight size={56} />
                </motion.div>
              </button>
              <h2 className="text-xl md:text-2xl font-display font-bold mb-8 flex items-center gap-2 text-white">
                <span className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center text-black text-[10px] md:text-xs">01</span>
                Technical Skills
              </h2>

              {/* 3D Carousel Section */}
              <div className="relative h-[250px] md:h-[300px] mb-8 md:mb-12 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-dashed border-white/10" />
                </div>

                <motion.div 
                  style={{ rotateY: rotation, transformStyle: 'preserve-3d' }}
                  className="relative w-16 h-16 md:w-24 md:h-24"
                >
                  {LANGUAGES.map((lang, index) => {
                    const angle = (index * (360 / LANGUAGES.length));
                    const translateZ = window.innerWidth < 768 ? 100 : 140;
                    return (
                      <motion.div
                        key={lang.id}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <div 
                          className={`w-16 h-16 md:w-20 md:h-20 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border flex items-center justify-center transition-all duration-500 ${
                            activeIndex === index ? 'scale-110 md:scale-125 border-white shadow-xl shadow-white/10' : 'opacity-20 grayscale border-white/5'
                          }`}
                        >
                          <SafeImage src={lang.icon} alt={lang.name} className="w-full h-full !bg-transparent" />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Controls */}
                <div className="absolute bottom-0 flex gap-3">
                  <button 
                    onClick={() => rotate(-1)}
                    className="p-3 bg-white/5 rounded-full shadow-md hover:bg-white/10 transition-colors border border-white/10 text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => rotate(1)}
                    className="p-3 bg-white/5 rounded-full shadow-md hover:bg-white/10 transition-colors border border-white/10 text-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Project List Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    {activeLanguage.name} Projects
                  </h3>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    {activeProjects.length} Items
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <AnimatePresence mode="wait">
                    {activeProjects.map((project, idx) => (
                      <motion.div
                        key={`${activeLanguage.id}-${project.title}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white group-hover:text-neutral-300 transition-colors">
                            {project.title}
                          </h4>
                          {project.url && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              className="text-neutral-500 hover:text-white transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Projects */}
          <AnimatePresence mode="popLayout">
            {showAcademic && (
              <motion.div 
                layout
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  damping: 28, 
                  stiffness: 180,
                  opacity: { duration: 0.4 }
                }}
                className="xl:col-span-5 space-y-8"
              >
                <h2 className="text-xl md:text-2xl font-display font-bold mb-8 flex items-center gap-2 px-4 text-white">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-neutral-700 rounded-lg flex items-center justify-center text-white text-[10px] md:text-xs">02</span>
                  Academic Journey
                </h2>
                
                <div className="space-y-6">
                  {ACADEMIC_PROJECTS.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex flex-col md:flex-row bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
                    >
                      <div className="w-full md:w-40 h-40 md:h-auto shrink-0 overflow-hidden">
                        <SafeImage 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-display font-bold text-white group-hover:text-neutral-300 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-[10px] font-bold text-neutral-500 bg-white/5 px-2 py-1 rounded-md">
                            {project.date}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-400 line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-medium text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Academic Info Card */}
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-black">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Academic Excellence</h4>
                    <p className="text-neutral-500 text-xs">
                      Developed during Computer Engineering at Insper.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
