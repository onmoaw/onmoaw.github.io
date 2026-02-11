
import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-navy text-sand py-12 border-t-8 border-brick">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display font-bold text-2xl text-cream">onmoaw</h3>
          <p className="mt-2 text-sm opacity-80 max-w-xs text-center md:text-left">
            Building digital experiences with code, cameras, and controllers.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/onmoaw" target="_blank" rel="noopener noreferrer" className="hover:text-tangerine hover:-translate-y-1 transition-all"><Github /></a>
          <a href="https://www.linkedin.com/in/onmoaw" target="_blank" rel="noopener noreferrer" className="hover:text-tangerine hover:-translate-y-1 transition-all"><Linkedin /></a>
          <a href="mailto:mhmoon.info@gmail.com" className="hover:text-tangerine hover:-translate-y-1 transition-all"><Mail /></a>
          <a href="https://www.instagram.com/onmoaw" className="hover:text-tangerine hover:-translate-y-1 transition-all"><Instagram /></a>
        </div>

        <div className="text-xs font-mono opacity-50">
          © {new Date().getFullYear()} onmoaw. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
