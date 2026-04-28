"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
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
    </>
  );
}
