import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function JDSolutionLanding() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-[#FF8C00] selection:text-white text-slate-800 dark:text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
