import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github, User, Code, Award } from 'lucide-react';
import WaveBackground from './WaveBackground';
import LangToggle from './LangToggle';
import { useLang } from '../useLang';

const GITHUB_URL = 'https://github.com/lucaskmk';
const LINKEDIN_URL = 'https://www.linkedin.com/in/lucas-kenji-malheiros-kamikawa-28417629a';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [lang] = useLang();

  // Layout effect: reset the scroll before the new page paints, so it doesn't jump
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: { en: 'Resume', pt: 'Currículo' }, path: '/', icon: User },
    { name: { en: 'Projects', pt: 'Projetos' }, path: '/projects', icon: Code },
    { name: { en: 'Certificates', pt: 'Certificados' }, path: '/certificates', icon: Award },
  ];

  return (
    <>
    <WaveBackground />
    <div className="min-h-screen flex flex-col" style={{ position: 'relative', zIndex: 1 }}>
      <header className="sticky top-0 z-50" style={{ background: 'rgba(10,13,21,0.75)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', boxShadow: '0 1px 0 rgba(255,255,255,0.05)', transform: 'translateZ(0)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform">
                <img src="images/Kamikawa-96.png" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-light text-lg md:text-xl tracking-tight text-white">
                Kamikawa
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {link.name[lang]}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <LangToggle />
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav aria-label={lang === 'en' ? 'Main' : 'Principal'} className="md:hidden fixed bottom-4 inset-x-4 z-50 flex justify-center">
        <div className="w-full max-w-sm p-1.5 rounded-2xl flex justify-between items-center border border-white/10 shadow-2xl" style={{ background: 'rgba(8,11,20,0.85)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-neutral-400 active:text-neutral-200'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2 : 1.75} />
                <span className="text-[11px] font-medium leading-none">{link.name[lang]}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <footer className="text-white py-24 pb-32 md:pb-24 border-t border-white/5" style={{ background: 'rgba(14,18,32,0.70)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="font-display font-light text-4xl mb-2 tracking-tight">Lucas Kamikawa</h3>
            <p className="text-neutral-400 uppercase tracking-widest text-xs">
              {lang === 'en' ? 'Computer Engineering @ Insper' : 'Engenharia da Computação @ Insper'}
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:lucaskamikawa@gmail.com" aria-label="Email" className="text-neutral-500 hover:text-white transition-colors">
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-500 hover:text-white transition-colors">
              <Github size={24} strokeWidth={1.5} />
            </a>
          </div>

          <div className="text-neutral-400 text-[11px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Lucas Kenji Malheiros Kamikawa. {lang === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
