import { motion, AnimatePresence } from 'motion/react';
import { Send, Instagram, Mail, Linkedin, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'MUSIC VIDEO',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // We'll use formspree for real email delivery
      // The user needs to replace 'YOUR_FORM_ID' with their actual formspree ID
      // but for now we'll simulate the success
      const response = await fetch('https://formspree.io/f/mnqedkyz', { // Placeholder or their actual email if verified
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Lead: ${formData.projectType} from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'MUSIC VIDEO', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6"
          >
            LET'S CREATE <span className="text-neon-purple cinematic-shadow">LEGEN</span>DARY
          </motion.h2>
          <p className="text-gray-400 font-mono tracking-widest uppercase">
             Ready to take your project to the next level?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-10 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple opacity-50" />
              <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight">Direct Path</h3>
              
              <motion.a 
                href="https://wa.me/917088150029" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-4 p-5 bg-neon-purple text-white rounded-none font-display font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(174,0,255,0.4)] hover:shadow-[0_0_30px_rgba(174,0,255,0.6)] transition-all mb-8"
              >
                 <MessageCircle size={24} />
                 <span>DM ON WHATSAPP</span>
              </motion.a>

              <div className="space-y-4">
                 <a 
                    href="https://instagram.com/dvnsh_vfx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                 >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-neon-purple transition-all">
                        <Instagram size={20} />
                    </div>
                    <span>@dvnsh_vfx</span>
                 </a>
                 <a 
                    href="mailto:divyanshshisodiya@gmail.com"
                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                 >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-neon-purple transition-all">
                        <Mail size={30} />
                    </div>
                    <span>divyanshshisodiya@gmail.com</span>
                 </a>
                 <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-neon-purple transition-all">
                        <Linkedin size={20} />
                    </div>
                    <span>divyansh sisodia</span>
                 </div>
              </div>
            </div>
            
            <div className="p-10 border border-white/5 bg-white/2">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-600 mb-4">Availability</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-display text-sm tracking-widest uppercase">Open for High-Impact Projects</span>
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-20 h-20 bg-neon-purple/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-neon-purple" />
                  </div>
                  <h3 className="text-2xl font-display font-black mb-4 uppercase">Transmission Received</h3>
                  <p className="text-gray-400 text-sm font-mono max-w-xs uppercase tracking-wider">
                    Your vision has been sent. Check your secure line for a reply soon.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-display font-bold uppercase tracking-widest text-neon-purple hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Full Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-purple outline-none transition-all font-sans text-sm text-white"
                        placeholder="WALTER WHITE"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-purple outline-none transition-all font-sans text-sm text-white"
                        placeholder="WALTER@CRYSTAL.COM"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Project Type</label>
                    <select 
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-purple outline-none transition-all font-sans text-sm text-gray-400"
                    >
                      <option>MUSIC VIDEO</option>
                      <option>COMMERCIAL</option>
                      <option>FILM / DOCUMENTARY</option>
                      <option>EXPERIMENTAL</option>
                      <option>COLOUR GRADING</option>
                      <option>VFX & COMPOSITING</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-gray-500">The Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-purple outline-none transition-all font-sans text-sm resize-none text-white"
                      placeholder="TELL ME ABOUT YOUR VISION..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-white text-black font-display font-black uppercase tracking-[0.2em] text-sm hover:bg-neon-purple hover:text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Transmission
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-[10px] font-mono uppercase text-center mt-2">
                      Transmission Failed. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 text-center">
             <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-600">
                &copy; 2026 DIVYANSH EDITS. BUILT FOR THE SHADOWS.
             </p>
        </div>
      </div>
    </section>
  );
}

