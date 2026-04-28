"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-48 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#003366]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[#FF8C00]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#003366] text-sm font-semibold mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF8C00]"></span>
            Sri Lanka&apos;s Premier Agency for Educators
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm leading-[1.1] mb-6"
          >
            ELEVATE YOUR BRAND IN THE DIGITAL WORLD.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Expert Digital Solutions tailored for Sri Lankan Tuition Masters and Businesses. We transform your educational expertise into a powerful online presence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FF8C00] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#FF8C00]/20"
            >
              Start Your Journey
              <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              href="#about" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-[#003366] font-bold rounded-full border border-slate-200 hover:border-[#003366]/30 hover:bg-slate-50"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
