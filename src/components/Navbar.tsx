'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaJava, FaPython, FaDocker, FaLinux, FaGithub, FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, SiDjango, SiMysql, SiMongodb
} from 'react-icons/si';
import LogoLoop from './LogoLoop';
import StartProjectModal from './StartProjectModal';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const techLogos = [
  { node: <FaJava />, title: "Java" },
  { node: <FaPython />, title: "Python" },
  { node: <FaDocker />, title: "Docker" },
  { node: <FaLinux />, title: "Linux" },
  { node: <FaGithub />, title: "GitHub" },
  { node: <FaAws />, title: "AWS" },
  { node: <SiSpringboot />, title: "Spring Boot" },
  { node: <SiDjango />, title: "Django" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiMongodb />, title: "MongoDB" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
          
          {/* Left Side: Logo Loop displaying skills */}
          <div className="hidden sm:block flex-1 max-w-[300px] lg:max-w-[500px]">
            <LogoLoop 
              logos={techLogos}
              speed={20}
              gap={32}
              fadeOut={false}
            />
          </div>

          {/* Desktop Nav - Right Aligned */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-end mr-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-sans text-white/80 hover:text-white transition-colors relative group font-medium"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 border border-white/30 text-white text-sm font-sans rounded-full hover:border-neon-green hover:text-neon-green transition-all duration-300"
            >
              Start A Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-display text-white hover:text-neon-green transition-colors uppercase tracking-widest"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-8 px-8 py-3 border border-neon-green text-neon-green text-lg font-sans rounded-full hover:bg-neon-green/10 transition-all duration-300 uppercase tracking-widest"
            >
              Start A Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
