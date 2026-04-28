"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Share2, GraduationCap, ChevronRight } from 'lucide-react';

export default function Services() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="scroll-mt-32 py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#FF8C00] font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Crafting Digital Excellence</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">We provide specialized tools and services designed to help educators dominate their digital space.</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10 }} 
            className="group relative p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-[0_0_40px_-10px_rgba(0,51,102,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:border-[#003366]/30 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-800/50 rounded-3xl -z-10"></div>
            <motion.div 
              className="w-16 h-16 bg-blue-50/80 dark:bg-slate-700/80 rounded-full flex items-center justify-center mb-8 border border-blue-100 dark:border-slate-600 group-hover:scale-110 group-hover:bg-[#003366] group-hover:border-[#003366] group-hover:shadow-[0_0_20px_rgba(0,51,102,0.4)] transition-all duration-500"
            >
              <Globe className="text-[#003366] dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={32} />
            </motion.div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Web Design & Development</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              Specialized websites for educators, schools, and private classes. Fully responsive and SEO-optimized.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#003366] dark:text-slate-400 dark:hover:text-blue-400 transition-colors uppercase tracking-widest group/link">
                Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10 }} 
            className="group relative p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-[0_0_40px_-10px_rgba(255,140,0,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,140,0,0.2)] hover:border-[#FF8C00]/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-800/50 rounded-3xl -z-10"></div>
            <motion.div 
              className="w-16 h-16 bg-orange-50/80 dark:bg-slate-700/80 rounded-full flex items-center justify-center mb-8 border border-orange-100 dark:border-slate-600 group-hover:scale-110 group-hover:bg-[#FF8C00] group-hover:border-[#FF8C00] group-hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] transition-all duration-500"
            >
              <Share2 className="text-[#FF8C00] group-hover:text-white transition-colors duration-300" size={32} />
            </motion.div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Social Media Management</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              We handle your Facebook, TikTok, and Instagram growth. Professional content creation and daily management.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#FF8C00] dark:text-slate-400 dark:hover:text-[#FF8C00] transition-colors uppercase tracking-widest group/link">
                Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10 }} 
            className="group relative p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-[0_0_40px_-10px_rgba(0,51,102,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:border-[#003366]/30 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-800/50 rounded-3xl -z-10"></div>
            <motion.div 
              className="w-16 h-16 bg-blue-50/80 dark:bg-slate-700/80 rounded-full flex items-center justify-center mb-8 border border-blue-100 dark:border-slate-600 group-hover:scale-110 group-hover:bg-[#003366] group-hover:border-[#003366] group-hover:shadow-[0_0_20px_rgba(0,51,102,0.4)] transition-all duration-500"
            >
              <GraduationCap className="text-[#003366] dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={32} />
            </motion.div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">LMS & Online Class Setup</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              Complete setup of learning management systems for online teaching and course selling.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#003366] dark:text-slate-400 dark:hover:text-blue-400 transition-colors uppercase tracking-widest group/link">
                Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
