"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      {/* Our Story / Intro Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[#FF8C00] font-bold tracking-wider uppercase text-sm mb-6">Our Story</h2>
            <p className="text-2xl md:text-3xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              <span className="text-[#003366] dark:text-blue-400 font-bold">JD Solution</span> is a forward-thinking digital agency dedicated to empowering educators and businesses. We combine technical expertise with creative strategy to help our clients grow their online presence and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-32 py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glassmorphism abstract shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003366] to-[#0055A4] rounded-[2rem] transform -rotate-3 scale-105 opacity-10 dark:opacity-20"></div>
              <div className="bg-white/60 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-slate-700 p-10 rounded-[2rem] shadow-xl relative z-10">
                <h3 className="text-2xl font-bold text-[#003366] dark:text-blue-400 mb-4">Solutions With Clarity.</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  At JD Solution, we believe that every great educator deserves a brand that reflects their brilliance. Navigating the digital landscape can be overwhelming, but we bring clarity to the chaos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#003366] dark:bg-blue-400"></div>
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Tailored for Sri Lankan Educators</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-slate-700 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF8C00]"></div>
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">End-to-End Digital Execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#003366] dark:bg-blue-400"></div>
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Proven Results & ROI Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#FF8C00] font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Your Partner in Digital Growth</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We specialize in turning local Tuition Masters into household names. By combining cutting-edge production quality with strategic digital marketing, we ensure your message reaches the right students at the right time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-[#003366] dark:border-blue-400 pl-4">
                <div className="text-4xl font-extrabold text-[#003366] dark:text-blue-400 mb-1">50+</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">Studios Setup</div>
              </div>
              <div className="border-l-4 border-[#FF8C00] pl-4">
                <div className="text-4xl font-extrabold text-[#FF8C00] mb-1">100%</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
