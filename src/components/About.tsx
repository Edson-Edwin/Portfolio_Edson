'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl relative z-10 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-widest uppercase">
          About
        </h2>
        
        <div className="space-y-6 text-sm md:text-base text-text-muted leading-relaxed max-w-2xl font-sans">
          <p>
            Motivated and detail-oriented MCA student specializing in backend engineering, 
            cloud infrastructure, and DevOps practices.
          </p>
          <p>
            Proficient in designing and deploying RESTful APIs and microservices using Java and Spring Boot, 
            with hands-on experience in AWS EC2, Docker, and Linux administration.
          </p>
          <p>
            Demonstrated ability to build scalable, production-grade web applications 
            and automate deployment workflows. Passionate about software engineering best practices, 
            system reliability, and delivering high-quality solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
