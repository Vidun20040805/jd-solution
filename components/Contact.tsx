"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
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

  return (
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
  );
}
