'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';
import { 
  FaJava, FaPython, FaDocker, FaLinux, FaGithub, FaDatabase, FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, SiDjango, SiMysql, SiMongodb, SiPostman, SiGit
} from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { FiCpu } from 'react-icons/fi';

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Django", icon: SiDjango },
      { name: "Python", icon: FaPython },
      { name: "REST API", icon: TbApi },
      { name: "Microservices", icon: VscServerProcess }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Linux Admin", icon: FaLinux },
      { name: "CI/CD", icon: FiCpu },
      { name: "GitHub Actions", icon: FaGithub }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Optimization", icon: FaDatabase },
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl relative z-10 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-widest uppercase">
          Arsenal
        </h2>
        <p className="text-neon-green text-sm font-sans tracking-wide">Core Technologies</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="h-full"
          >
            <ElectricBorder color="#00FFA3" speed={1.2} thickness={2} style={{ height: '100%' }}>
              <div className="flex flex-col p-6 h-full">
                <h3 className="text-lg font-display tracking-widest uppercase font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_#00FFA3]" />
                  {category.title}
                </h3>
                <ul className="grid grid-cols-1 gap-5">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-sm font-sans text-text-muted flex items-center group/skill cursor-default">
                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mr-4 border border-white/5 group-hover/skill:border-neon-green/50 group-hover/skill:bg-neon-green/10 transition-colors duration-300">
                        <skill.icon className="text-lg text-white/50 group-hover/skill:text-neon-green group-hover/skill:scale-110 transition-all duration-300" />
                      </div>
                      <span className="group-hover/skill:text-white font-medium tracking-wide transition-colors duration-300">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
