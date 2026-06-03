'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "Amal Jyothi College of Engineering",
    year: "2025 – Present"
  },
  {
    title: "B.Sc. in Physics",
    org: "St. Stephen's College, University of Kerala",
    year: "2021 – 2024"
  }
];

const certifications = [
  {
    title: "Introduction to DevOps",
    org: "IBM / Coursera",
    year: "2025"
  },
  {
    title: "Machine Learning",
    org: "NPTEL — IIT Madras",
    year: "2025"
  },
  {
    title: "Generative AI Fundamentals",
    org: "Amazon Web Services",
    year: "2025"
  },
  {
    title: "Database and SQL Essentials",
    org: "Infosys Springboard",
    year: "2025"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl relative z-10 border-t border-white/10">
      <div className="flex flex-col gap-20 md:w-[50%] lg:w-[45%]">
        
        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold text-white tracking-widest uppercase">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-1.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 group"
              >
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-black border border-neon-green rounded-full shadow-[0_0_10px_#00FFA3] group-hover:scale-150 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="text-xs text-neon-green font-mono mb-2">{item.year}</span>
                  <h3 className="text-lg font-sans font-medium text-white">{item.title}</h3>
                  <p className="text-sm font-sans text-text-muted mt-1">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold text-white tracking-widest uppercase">
              Credentials
            </h2>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-black border border-white/10 hover:border-neon-green/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div>
                  <h3 className="text-base font-sans font-medium text-white group-hover:text-neon-green transition-colors">{item.title}</h3>
                  <p className="text-xs font-sans text-text-muted mt-1">{item.org}</p>
                </div>
                <span className="text-xs text-neon-green font-mono border border-neon-green/30 px-2 py-1 rounded">
                  {item.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
