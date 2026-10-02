import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  highlight: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

// Shared page title: same position, size and fade-only entrance on every page,
// so the title doesn't jump when navigating between pages
export default function PageHeader({ title, highlight, subtitle, children }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-10 md:pt-16 pb-10 md:pb-14 text-center"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-tight text-white">
        {title} <span className="text-gradient">{highlight}</span>
      </h1>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </motion.header>
  );
}
