import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Dashboard from '../components/Dashboard';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Home;