import React from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'motion/react';
import { PROJECTS, ACADEMIC_PROJECTS } from '../constants';
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen, Calendar, Tag, Play, FileText, Github } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

const LANGUAGES = [
  { id: 'data', name: 'Data Engineering', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { id: 'api', name: 'APIs & Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { id: 'c', name: 'Problem Solving', icon: 'images/c-icon.png' },
  { id: 'python', name: 'Python/ML', icon: 'images/python-icon.png' },
  { id: 'devops', name: 'Interests (Cloud)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { id: 'embedded', name: 'Interests (Embedded)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ieee/ieee-original.svg' },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showAcademic, setShowAcademic] = React.useState(true);
  const rotation = useMotionValue(0);
  const currentStep = React.useRef(0);
  const isDragging = React.useRef(false);

  // Sync activeIndex with rotation for real-time feedback while dragging
  React.useEffect(() => {
    return rotation.on('change', (v) => {
      if (isDragging.current) {
        const unitAngle = 360 / LANGUAGES.length;
        const normalizedRotation = (-v % 360 + 360) % 360;
        const index = Math.round(normalizedRotation / unitAngle) % LANGUAGES.length;
        if (index !== activeIndex) {
          setActiveIndex(index);
        }
      }
    });
  }, [rotation, activeIndex]);

  const rotateTo = (step: number) => {
    currentStep.current = step;
    const newIndex = (step % LANGUAGES.length + LANGUAGES.length) % LANGUAGES.length;
    setActiveIndex(newIndex);
    
    const unitAngle = 360 / LANGUAGES.length;
    animate(rotation, -step * unitAngle, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    });
  };

  const rotate = (direction: number) => {
    rotateTo(currentStep.current + direction);
  };

  // Drag handling
  const onPan = (_: any, info: { delta: { x: number } }) => {
    isDragging.current = true;
    // Stop any ongoing animation to prevent fighting the user
    rotation.stop();
    const sensitivity = 0.4; // Slightly lower for smoother control
    rotation.set(rotation.get() + info.delta.x * sensitivity);
  };

  const onPanEnd = () => {
    // Add a small delay before clearing isDragging to prevent accidental clicks
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
    
    const unitAngle = 360 / LANGUAGES.length;
    const currentRotation = rotation.get();
    
    // Calculate nearest step based on current rotation
    const nearestStep = Math.round(-currentRotation / unitAngle);
    rotateTo(nearestStep);
  };

  const activeLanguage = LANGUAGES[activeIndex];
  const activeProjects = PROJECTS[activeLanguage.id] || [];

  return (
    <div className="min-h-screen bg-black py-8 md:py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-3 md:mb-4 text-white">Project <span className="text-gradient">Portfolio</span></h1>
          <p className="text-xs md:text-base text-neutral-500 max-w-xl mx-auto px-4">Explore technical skills with the interactive roulette.</p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start transition-all duration-700 ease-in-out"
        >
          {/* Left Column: Language Projects */}
          <motion.div 
            layout
            className={`space-y-6 md:space-y-12 ${showAcademic ? 'xl:col-span-7' : 'xl:col-span-12 max-w-5xl mx-auto w-full'}`}
          >
            <div className="glass p-4 md:p-10 rounded-[1.5rem] md:rounded-[3rem] relative overflow-hidden h-full">
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
              <h2 className="text-lg md:text-2xl font-display font-light mb-4 md:mb-8 flex items-center gap-2 text-white">
                <span className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center text-black text-[10px] md:text-xs font-bold">01</span>
                Technical Skills
              </h2>

              {/* 3D Carousel Section */}
              <div 
                className="relative h-[180px] md:h-[300px] mb-6 md:mb-12 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none overflow-visible"
                onPointerDown={(e) => {
                  (e.currentTarget as HTMLElement).setAttribute('data-dragging', 'true');
                }}
              >
                {/* Pan Handler Container - Now wraps the carousel but doesn't block icons */}
                <motion.div
                  onPan={onPan}
                  onPanEnd={onPanEnd}
                  className="absolute inset-0 z-0 bg-transparent" // Lower Z so icons are clickable
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full border border-dashed border-white/10" />
                </div>

                <motion.div 
                  style={{ rotateY: rotation, transformStyle: 'preserve-3d' }}
                  className="relative w-12 h-12 md:w-24 md:h-24 z-10"
                >
                  {LANGUAGES.map((lang, index) => {
                    const angle = (index * (360 / LANGUAGES.length));
                    const translateZ = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 140;
                    return (
                      <motion.div
                        key={lang.id}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (!isDragging.current) {
                              const diff = ((index - activeIndex + LANGUAGES.length / 2) % LANGUAGES.length + LANGUAGES.length) % LANGUAGES.length - LANGUAGES.length / 2;
                              rotateTo(currentStep.current + diff);
                            }
                          }}
                          className={`w-12 h-12 md:w-20 md:h-20 p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border flex items-center justify-center transition-all duration-500 cursor-pointer pointer-events-auto ${
                            activeIndex === index ? 'scale-110 md:scale-125 border-white shadow-xl shadow-white/10' : 'opacity-20 grayscale border-white/5 hover:opacity-100 hover:grayscale-0'
                          }`}
                        >
                          <SafeImage src={lang.icon} alt={lang.name} className="w-8 h-8 md:w-full md:h-full !bg-transparent pointer-events-none" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Controls */}
                <div className="absolute bottom-0 flex gap-2 md:gap-3">
                  <button 
                    onClick={() => rotate(-1)}
                    className="p-2 md:p-3 bg-white/5 rounded-full shadow-md hover:bg-white/10 transition-colors border border-white/10 text-white"
                  >
                    <ChevronLeft size={16} className="md:w-5 md:h-5" />
                  </button>
                  <button 
                    onClick={() => rotate(1)}
                    className="p-2 md:p-3 bg-white/5 rounded-full shadow-md hover:bg-white/10 transition-colors border border-white/10 text-white"
                  >
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* Project List Section */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <h3 className="text-lg md:text-xl font-display font-light text-white">
                    {activeLanguage.name} Projects
                  </h3>
                  <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    {activeProjects.length} Items
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  <AnimatePresence mode="wait">
                    {activeProjects.map((project, idx) => {
                      const primaryUrl = project.url || project.videoUrl || project.fileUrl;
                      return (
                        <motion.div
                          key={`${activeLanguage.id}-${project.title}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => primaryUrl && window.open(primaryUrl, '_blank')}
                          className={`group bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all ${primaryUrl ? 'cursor-pointer' : ''}`}
                        >
                          <div className="flex justify-between items-start mb-1 md:mb-2">
                            <h4 className="font-bold text-white text-sm md:text-base group-hover:text-neutral-300 transition-colors">
                              {project.title}
                            </h4>
                            <div className="flex gap-3 text-neutral-500">
                              {project.videoUrl && (
                                <a
                                  href={project.videoUrl}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                  title="Watch Demo"
                                >
                                  <Play size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                              {project.fileUrl && (
                                <a
                                  href={project.fileUrl}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                  title="View Document"
                                >
                                  <FileText size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                  title="View Source"
                                >
                                  <ExternalLink size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                            {project.description}
                          </p>
                        </motion.div>
                      );
                    })}
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
                <h2 className="text-xl md:text-2xl font-display font-light mb-8 flex items-center gap-2 px-4 text-white">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-white text-[10px] md:text-xs font-bold">02</span>
                  Academic Journey
                </h2>
                
                <div className="space-y-4 md:space-y-6">
                  {ACADEMIC_PROJECTS.map((project, index) => {
                    const primaryUrl = project.url || project.videoUrl || project.fileUrl;
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => primaryUrl && window.open(primaryUrl, '_blank')}
                        className={`group flex flex-col md:flex-row bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 ${primaryUrl ? 'cursor-pointer' : ''}`}
                      >
                        <div className="p-4 md:p-6 flex flex-col justify-center">
                          <div className="flex items-center justify-between mb-1 md:mb-2 text-sm md:text-base">
                            <h3 className="font-display font-medium text-white group-hover:text-neutral-300 transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 md:gap-3 text-neutral-500">
                              {project.videoUrl && (
                                <a
                                  href={project.videoUrl}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                >
                                  <Play size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                  title="View on GitHub"
                                >
                                  <Github size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                              {project.fileUrl && (
                                <a
                                  href={project.fileUrl}
                                  target="_blank"
                                  onClick={e => e.stopPropagation()}
                                  className="hover:text-white transition-colors"
                                  title="Technical Report"
                                >
                                  <FileText size={14} className="md:w-4 md:h-4" />
                                </a>
                              )}
                              <span className="text-[9px] md:text-[10px] font-bold text-neutral-600 bg-white/5 px-2 py-0.5 md:py-1 rounded-md">
                                {project.date}
                              </span>
                            </div>
                          </div>
                          <p className="text-[11px] md:text-sm text-neutral-400 line-clamp-2 mb-2 md:mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {project.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="text-[9px] md:text-[10px] font-medium text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Academic Info Card */}
                <div className="p-4 md:p-6 glass rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white shrink-0">
                    <BookOpen size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-[10px] uppercase tracking-widest leading-tight">Academic Excellence</h4>
                    <p className="text-neutral-500 text-[10px] md:text-xs">
                      Engineering projects @ Insper.
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
