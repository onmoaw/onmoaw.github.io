
import React from 'react';
import { Tab } from '../types';
import { Terminal, Camera, Gamepad2, Lock, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: Tab.CAREER, label: 'CAREER', icon: Terminal },
    { id: Tab.PHOTOGRAPHY, label: 'PHOTOS', icon: Camera },
    { id: Tab.GAMING, label: 'GAMING', icon: Gamepad2 },
    { id: Tab.ADMIN, label: 'ADMIN', icon: Lock },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-cream border-b-4 border-tangerine shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => setActiveTab(Tab.CAREER)}>
            <div className="w-10 h-10 bg-brick rounded-none rotate-3 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 border-2 border-cream">
              <span className="font-display font-bold text-xl text-cream">O</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-wider">ONMOAW</span>
              <span className="text-xs text-tangerine font-mono">v0.0.5</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    relative px-6 py-2 rounded-t-lg font-bold tracking-wide transition-all duration-200 flex items-center space-x-2
                    ${isActive 
                      ? 'bg-cream text-navy translate-y-2 pb-4' 
                      : 'text-sand hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-tangerine hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t-2 border-navy/50 absolute w-full left-0 animate-float">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    flex items-center space-x-4 p-4 rounded border-2 font-bold
                    ${activeTab === item.id 
                      ? 'bg-tangerine border-tangerine text-navy' 
                      : 'border-sand/20 text-sand hover:border-tangerine'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
