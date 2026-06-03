'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  style?: React.CSSProperties;
}

export default function ElectricBorder({
  children,
  color = '#00FFA3',
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  style
}: ElectricBorderProps) {
  // Use a stable ID for the SVG filter
  const filterId = React.useId().replace(/:/g, '');
  
  return (
    <div className="relative group w-full h-full" style={style}>
      {/* SVG Turbulence Filter - This provides the genuine "Electric" liquid/lightning effect */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id={`electric-${filterId}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={chaos}
            numOctaves="3"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              values={`${chaos} ${chaos};${chaos * 1.5} ${chaos * 1.5};${chaos} ${chaos}`}
              dur={`${5 / speed}s`}
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="15"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      
      {/* The Electric Glow Layer */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          filter: `url(#electric-${filterId})`,
          padding: thickness,
          background: `linear-gradient(45deg, transparent, ${color}, transparent, ${color}, transparent)`,
          backgroundSize: '200% 200%',
          borderRadius: '16px',
          margin: `-${thickness}px`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 3 / speed,
        }}
      >
        <div className="w-full h-full bg-black rounded-[14px]" />
      </motion.div>
      
      {/* Actual Content Wrapper */}
      <div className="relative z-10 w-full h-full bg-black rounded-[16px] border border-white/10 group-hover:border-transparent transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}
