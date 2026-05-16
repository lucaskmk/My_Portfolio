import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github, Menu, X, User, Code, Award, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Resume', path: '/', icon: User },
    { name: 'About', path: '/about', icon: GraduationCap },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Certificates', path: '/certificates', icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden transition-transform">
                <img src="images/Kamikawa.png" alt="K" className="w-full h-full object-cover" />
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
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/lucaskmk" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/lucas-kenji-malheiros-kamikawa-28417629a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Mobile Menu Button - Simplified */}
            <div className="md:hidden flex items-center gap-4">
               <a href="https://github.com/lucaskmk" target="_blank" className="text-neutral-400">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex justify-center">
        <div className="glass px-6 py-3 rounded-full flex gap-8 items-center border border-white/10 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`transition-all ${isActive ? 'text-white scale-125' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </nav>

      <footer className="bg-black text-white py-24 pb-32 md:pb-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h3 className="font-display font-light text-4xl mb-2 tracking-tight">Lucas Kamikawa</h3>
            <p className="text-neutral-500 uppercase tracking-widest text-xs">Computer Engineering @ Insper</p>
          </div>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:lucaskamikawa@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/lucas-kenji-malheiros-kamikawa-28417629a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/lucaskmk" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
              <Github size={24} strokeWidth={1.5} />
            </a>
          </div>

          <div className="text-neutral-600 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Lucas Kenji Malheiros Kamikawa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
