'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Triangle } from 'lucide-react';
import Lanyard from './Lanyard';
import StartProjectModal from './StartProjectModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 md:px-6 lg:px-8 z-10 pt-20 overflow-hidden">
      <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} transparent={true} />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-6 max-w-4xl relative z-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[var(--font-royal)] font-normal text-white tracking-normal leading-tight mb-4">
          Edson Edwin Ninan
        </h1>

        <p className="text-xl md:text-2xl text-white/80 font-sans tracking-wide">
          Backend Engineer & Cloud Architect
        </p>

        <p className="text-sm md:text-base text-text-muted font-sans font-light max-w-lg leading-relaxed pt-2">
          Building scalable cloud-native applications using AWS, Kubernetes, Docker, Terraform, Java, and Spring Boot.
        </p>

        {/* Action Buttons inspired by reference */}
        <div className="flex flex-wrap items-center gap-8 pt-8">

          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center justify-between gap-6 pl-6 pr-2 py-2 border border-white/30 rounded-full hover:border-neon-green transition-all duration-300"
          >
            <span className="text-sm font-sans uppercase tracking-widest text-white group-hover:text-neon-green transition-colors">
              Discover
            </span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-neon-green transition-colors">
              <ArrowRight size={18} className="text-black" />
            </div>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 text-white hover:text-neon-green transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-neon-green transition-colors">
              <Triangle size={14} className="fill-transparent group-hover:fill-neon-green transition-all" />
            </div>
            <span className="text-sm font-sans uppercase tracking-widest">
              Connect
            </span>
          </button>

        </div>

        <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </motion.div>
    </section>
  );
}
