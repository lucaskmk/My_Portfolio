import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { Award, ExternalLink } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface CertificateCardProps {
  cert: any;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Scroll Animation: Fade in/out as it enters/leaves viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springConfigScroll = { damping: 30, stiffness: 100, mass: 1 };
  
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const opacity = useSpring(opacityValue, springConfigScroll);
  const scale = useSpring(scaleValue, springConfigScroll);
  
  // Alternating slide direction based on index
  const isEven = index % 2 === 0;
  const slideDistance = isEven ? -100 : 100;
  const xValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [slideDistance, 0, 0, slideDistance]);
  const x = useSpring(xValue, springConfigScroll);

  // 3D Tilt Animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, x }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
    >
      {/* Image Container */}
      <div 
        className="w-full md:w-1/2 group perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ 
            rotateX: springRotateX, 
            rotateY: springRotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10"
        >
          <SafeImage 
            src={cert.image} 
            alt={cert.title} 
            className="w-full aspect-[16/10] transform transition-opacity duration-700 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {cert.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
            {cert.title}
          </h2>
        </div>
        <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
          {cert.description}
        </p>
        <div className="pt-2 md:pt-4">
          <button className="px-5 py-2.5 md:px-6 md:py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-white text-sm md:text-base flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all shadow-sm">
            View Certificate
            <ExternalLink size={18} className="text-neutral-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const CATEGORIES = ['All', 'Cybersecurity', 'Programming', 'Cloud', 'Data'] as const;

export default function Certificates() {
  const [activeCategory, setActiveCategory] = React.useState<typeof CATEGORIES[number]>('All');

  const filteredCertificates = activeCategory === 'All' 
    ? CERTIFICATES 
    : CERTIFICATES.filter(cert => cert.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] py-12 md:py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 text-white font-medium text-xs md:text-sm border border-white/10"
          >
            <Award size={16} />
            Verified Achievements
          </motion.div>
          <h1 className="text-3xl md:text-6xl font-display font-bold mb-4 text-white">
            My <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto px-4">
            A collection of my professional certifications and educational milestones in technology and cybersecurity.
          </p>
        </div>

        {/* Filter UI */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 md:mb-24">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-black shadow-xl scale-105' 
                  : 'bg-white/5 text-neutral-500 border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-16 md:space-y-32">
          {filteredCertificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 p-8 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[3rem] text-center text-white relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-500/10 blur-[100px] rounded-full" />
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">
            Interested in my qualifications?
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto relative z-10">
            I'm constantly learning and expanding my skill set. Check back often for new certifications.
          </p>
          <a 
            href="https://linkedin.com/in/lucas-kenji-kamikawa-28417629a/"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-neutral-200 transition-colors relative z-10"
          >
            Connect on LinkedIn
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
