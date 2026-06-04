'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = async () => {
    if (rating === 0 || message.trim() === '') return;
    
    setIsSubmitting(true);
    
    const bodyText = `Rating: ${rating} / 5 Stars\n\nMessage:\n${message}`;
    window.location.href = `mailto:edsonedwin01@gmail.com?subject=${encodeURIComponent('Portfolio Feedback & Rating! ⭐')}&body=${encodeURIComponent(bodyText)}`;
    
    setShowSuccess(true);
    setMessage('');
    setRating(0);
    
    // Hide success popup after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsSubmitting(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 max-w-6xl relative z-10 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl relative"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-widest uppercase">
          INITIATE <span className="text-neon-green">SEQUENCE</span>
        </h2>
        <p className="text-text-muted text-lg font-sans mb-12 leading-relaxed">
          Currently seeking internship and full-time opportunities in Backend Development, 
          Cloud Computing, and DevOps. Let's build the future together.
        </p>

        <div className="flex gap-6 items-center mb-12">
          <a 
            href="https://linkedin.com/in/edson-edwin-ninan" 
            target="_blank" 
            rel="noreferrer"
            className="text-white font-sans hover:text-neon-green hover:tracking-widest transition-all duration-300 text-sm font-medium uppercase tracking-wide border-b border-transparent hover:border-neon-green pb-1"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Edson-Edwin" 
            target="_blank" 
            rel="noreferrer"
            className="text-white font-sans hover:text-neon-green hover:tracking-widest transition-all duration-300 text-sm font-medium uppercase tracking-wide border-b border-transparent hover:border-neon-green pb-1"
          >
            GitHub
          </a>
        </div>

        <div className="max-w-2xl bg-black/50 backdrop-blur-md p-8 rounded-[32px] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Success Overlay Popup */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="absolute inset-0 z-20 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-8 text-center rounded-[32px]"
              >
                <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-neon-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-widest uppercase mb-2">Transmission Sent</h3>
                <p className="text-text-muted font-sans">Thank you for your feedback! I will review it shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="text-white font-display font-bold tracking-widest uppercase text-xl mb-6">Send a Transmission</h3>
          
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            placeholder="Type your message here..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-sans focus:outline-none focus:border-neon-green/50 transition-colors h-32 resize-none mb-8 placeholder:text-white/20 disabled:opacity-50"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-xs font-sans uppercase tracking-widest">Rate the Portfolio:</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={28}
                    className={`cursor-pointer transition-all duration-300 ${isSubmitting ? 'pointer-events-none opacity-50' : ''} ${
                      star <= (hoveredStar || rating) 
                        ? 'fill-neon-green text-neon-green drop-shadow-[0_0_10px_rgba(0,255,163,0.8)] scale-110' 
                        : 'text-white/20 hover:scale-110'
                    }`}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={handleSend}
              disabled={isSubmitting || rating === 0 || message.trim() === ''}
              className="group flex items-center gap-6 pl-6 pr-2 py-2 border border-neon-green rounded-full hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,163,0.3)] hover:shadow-[0_0_25px_rgba(0,255,163,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-sans uppercase tracking-widest text-white group-hover:text-neon-green transition-colors font-bold">
                {isSubmitting ? 'Sending...' : 'Transmit'}
              </span>
              <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center group-hover:scale-105 transition-transform">
                {isSubmitting ? (
                  <Loader2 size={20} className="text-black animate-spin" />
                ) : (
                  <ArrowRight size={20} className="text-black" />
                )}
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      <footer className="mt-32 pt-8 border-t border-white/10 text-text-muted font-sans text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} E D S O N . All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_5px_#00FFA3] animate-pulse" />
          SYSTEMS ONLINE
        </p>
      </footer>
    </section>
  );
}
