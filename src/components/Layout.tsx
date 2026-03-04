import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github, Menu, X, User, Code, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CareerAssistant from './CareerAssistant';

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
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Certificates', path: '/certificates', icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform">
                <img src="images/Kamikawa.png" alt="K" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight">
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
              <a href="https://linkedin.com/in/lucas-kenji-kamikawa-28417629a/" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-white/10 px-6 py-3">
        <div className="flex justify-around items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="flex flex-col items-center gap-1"
              >
                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-white text-black scale-110' : 'text-neutral-500'}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-tighter ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <CareerAssistant />

      <footer className="bg-neutral-900 text-white py-12 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl mb-2">Lucas Kamikawa</h3>
              <p className="text-neutral-400">Computer Engineering Student @ Insper</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6">
                <a href="mailto:lucaskamikawa@gmail.com" className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com/in/lucas-kenji-kamikawa-28417629a/" target="_blank" className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/lucaskmk" target="_blank" className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Lucas Kenji Malheiros Kamikawa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
