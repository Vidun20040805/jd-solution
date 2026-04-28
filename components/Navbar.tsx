"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 py-8' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="JD Solution Logo" width={600} height={200} quality={100} unoptimized className="h-32 w-auto object-contain object-left scale-150" priority />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-lg font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-all">Home</a>
          <a href="#services" className="text-lg font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-all">Services</a>
          <a href="#about" className="text-lg font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-all">About</a>
          <a href="tel:+94782909916" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold hover:text-orange-500 transition-all text-sm tracking-widest uppercase"><Phone size={16} /> 078 290 9916</a>
          <a href="#contact" className="px-6 py-3 bg-[#003366] text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#002244] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-4">
          {mounted ? (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          ) : (
            <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 pointer-events-none" aria-hidden="true">
              <FaMoon size={20} />
            </button>
          )}
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-slate-100 dark:border-slate-800">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600 dark:text-slate-300">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600 dark:text-slate-300">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600 dark:text-slate-300">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center px-5 py-3 bg-[#003366] text-white font-medium rounded-lg">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
