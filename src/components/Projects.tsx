'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "LuxeStay",
    subtitle: "Hotel & Property Management Platform",
    desc: "Full-stack hospitality management system with Django backend. Architected RESTful backend API for room booking workflows, built modular frontend components.",
    tags: ["Django", "MySQL", "REST API", "MVC"],
    year: "2025 - 2026",
    github: "#"
  },
  {
    title: "SkillSwap",
    subtitle: "Peer-to-Peer Skill Exchange",
    desc: "Scalable social-learning platform. Developed backend with Django REST Framework, JWT auth, and microservice-oriented architecture pattern.",
    tags: ["Django REST", "MySQL", "Microservices", "JWT"],
    year: "2025 - 2026",
    github: "#"
  },
  {
    title: "Cloud & DevOps Suite",
    subtitle: "Automation & Infrastructure",
    desc: "Python automation scripts and AWS deployment pipelines. Containerized with Docker and developed Linux shell automation for scheduled jobs.",
    tags: ["Python", "AWS EC2", "Docker", "Linux Shell"],
    year: "2025 - 2026",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl relative z-10 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-widest uppercase">
          Projects
        </h2>
        <p className="text-neon-green text-sm font-sans tracking-wide">Where Innovation Knows No Bounds</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group flex flex-col justify-between p-8 rounded-2xl bg-black border border-white/10 hover:border-neon-green/50 hover:shadow-[0_0_30px_rgba(0,255,163,0.1)] transition-all duration-500 h-full relative overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-green/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-green transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-1 font-sans">{project.subtitle}</p>
                </div>
                <span className="text-xs text-neon-green font-mono border border-neon-green/30 px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-8 font-sans">
                {project.desc}
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white rounded-full font-sans tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm text-white font-sans font-medium hover:text-neon-green transition-colors"
                >
                  <span className="font-bold font-mono text-lg">&lt;/&gt;</span> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
