import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import PixelCard from './PixelCard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !details) return;

    setIsSubmitting(true);
    
    const formattedMessage = `START A PROJECT INQUIRY\n\nName: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`;

    window.location.href = `mailto:edsonedwin01@gmail.com?subject=${encodeURIComponent(`Project Inquiry from ${name}`)}&body=${encodeURIComponent(formattedMessage)}`;
      
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setName('');
      setEmail('');
      setDetails('');
      onClose();
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg"
          >
            <button 
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-neon-green transition-colors bg-white/10 rounded-full p-2"
            >
              <X size={24} />
            </button>

            <div className="w-full bg-black border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,255,163,0.15)] relative overflow-hidden">
              <div className="p-8 md:p-10 w-full relative z-20">
                
                {showSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,163,0.3)]">
                      <CheckCircle2 size={40} className="text-neon-green" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white tracking-widest uppercase mb-4">Request Sent</h3>
                    <p className="text-text-muted font-sans">I'll get back to you shortly to discuss your project.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-3xl font-display font-bold text-white tracking-widest uppercase mb-2">
                      Start A <span className="text-neon-green">Project</span>
                    </h2>
                    <p className="text-text-muted font-sans text-sm mb-8">
                      Let's build something incredible together. Fill out the details below.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-sans uppercase tracking-widest text-white/50">Your Name</label>
                          <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors placeholder:text-white/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-sans uppercase tracking-widest text-white/50">Your Email</label>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors placeholder:text-white/20"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans uppercase tracking-widest text-white/50">Project Details</label>
                        <textarea 
                          required
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors h-32 resize-none placeholder:text-white/20"
                          placeholder="Describe your vision..."
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting || !name || !email || !details}
                        className="group flex items-center justify-center gap-4 w-full py-4 border border-neon-green rounded-xl hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,163,0.1)] hover:shadow-[0_0_25px_rgba(0,255,163,0.3)] mt-4 disabled:opacity-50"
                      >
                        <span className="text-sm font-sans uppercase tracking-widest text-white group-hover:text-neon-green transition-colors font-bold">
                          {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                        </span>
                        {isSubmitting ? (
                          <Loader2 size={18} className="text-neon-green animate-spin" />
                        ) : (
                          <Send size={18} className="text-neon-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
