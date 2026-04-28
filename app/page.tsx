"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Globe, 
  Share2, 
  GraduationCap, 
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaSun, FaMoon, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function JDSolutionLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      phone_number: formData.phone,
      reply_to: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_b7hmsyf',
      'template_71x0vug',
      templateParams,
      'QVwgFfsI2OGHswHez'
    )
    .then((response) => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      setSubmitStatus('error');
      console.error('EmailJS Error:', error);
    });
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-[#FF8C00] selection:text-white text-slate-800 dark:text-slate-200">
      
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32 py-24 relative overflow-hidden bg-[#003366] dark:bg-slate-950">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2 dark:opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Dominate Your Niche?
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-lg">
                Let&apos;s discuss how we can build a premium digital presence for your educational brand today. Fill out the form below or reach out directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="text-[#FF8C00]" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium mb-1">Call Us Directly</p>
                    <a href="tel:+94782909916" className="text-white text-lg font-bold hover:text-[#FF8C00] transition-colors">078 290 9916</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="text-[#FF8C00]" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium mb-1">Send an Email</p>
                    <a href="mailto:contact.jdsolution@gmail.com" className="text-white text-lg font-bold hover:text-[#FF8C00] transition-colors">contact.jdsolution@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 focus:border-[#FF8C00] outline-none py-3 transition-colors text-white dark:text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number" 
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 focus:border-[#FF8C00] outline-none py-3 transition-colors text-white dark:text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 focus:border-[#FF8C00] outline-none py-3 transition-colors text-white dark:text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 focus:border-[#FF8C00] outline-none py-3 transition-colors text-white dark:text-white placeholder:text-slate-400 resize-none"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 mt-4 bg-[#FF8C00] hover:bg-[#003366] text-white font-bold text-lg rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'shadow-[0_0_20px_rgba(255,140,0,0.4)] hover:shadow-[0_0_20px_rgba(0,51,102,0.4)]'}`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-200 text-sm text-center font-medium">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-sm text-center font-medium">
                    Failed to send message. Please try again later.
                  </div>
                )}
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001A33] dark:bg-slate-950 pt-16 pb-8 border-t border-blue-900/50 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/logo.png" alt="JD Solution Logo" width={800} height={300} className="h-40 w-auto object-contain" />
              </div>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
                Expert Digital Solutions tailored for Sri Lankan Tuition Masters and Businesses. We bring clarity to your digital presence.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1PKEueYcLN/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/jdsolutionsl?igsh=MTkxa3FjbG9pMXZzYg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.tiktok.com/@jdsolutionsl?_r=1&_t=ZS-95hP1ndsDlU" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <FaTiktok size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-blue-200/70 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="#services" className="text-blue-200/70 hover:text-white text-sm transition-colors">Services</a></li>
                <li><a href="#about" className="text-blue-200/70 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-blue-200/70 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li className="text-blue-200/70 text-sm">Web Design & Development</li>
                <li className="text-blue-200/70 text-sm">Social Media Management</li>
                <li className="text-blue-200/70 text-sm">LMS & Online Class Setup</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-200/70 text-sm">
                  <MapPin size={18} className="text-[#FF8C00] shrink-0 mt-0.5" />
                  <span>Colombo, Sri Lanka</span>
                </li>
                <li className="flex items-center gap-3 text-blue-200/70 text-sm">
                  <Phone size={18} className="text-[#FF8C00] shrink-0" />
                  <a href="tel:+94782909916" className="hover:text-white transition-colors">+94 78 290 9916</a>
                </li>
                <li className="flex items-center gap-3 text-blue-200/70 text-sm">
                  <Mail size={18} className="text-[#FF8C00] shrink-0" />
                  <a href="mailto:contact.jdsolution@gmail.com" className="hover:text-white transition-colors">contact.jdsolution@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200/50 text-sm">
              &copy; 2026 JD Solution. All rights reserved.
            </p>
            <p className="text-blue-200/50 text-sm">
              Designed with clarity and purpose.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/94782909916"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
        <FaWhatsapp size={30} className="relative z-10" />
      </motion.a>
    </div>
  );
}
