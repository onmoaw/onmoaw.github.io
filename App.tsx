import React, { useState } from 'react';
import { Tab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Career } from './views/Career';
import { Photography } from './views/Photography';
import { Gaming } from './views/Gaming';
import { Admin } from './views/Admin';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CAREER);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.CAREER:
        return <Career />;
      case Tab.PHOTOGRAPHY:
        return <Photography />;
      case Tab.GAMING:
        return <Gaming />;
      case Tab.ADMIN:
        return <Admin />;
      default:
        return <Career />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-navy font-sans transition-colors duration-500">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="animate-float">
            {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}