'use client';

import React from 'react';

interface LogoLoopProps {
  logos: { node: React.ReactNode; title: string; href?: string }[];
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  logoHeight?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

export default function LogoLoop({
  logos,
  speed = 30,
  direction = 'left',
  gap = 40,
  fadeOut = true,
  fadeOutColor = '#000000',
}: LogoLoopProps) {
  // Duplicate array once so it perfectly scrolls seamlessly
  const loopLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden flex items-center h-12">
      {fadeOut && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10" style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10" style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }} />
        </>
      )}
      
      <div 
        className="flex shrink-0 items-center animate-marquee"
        style={{ 
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          width: 'max-content'
        }}
      >
        {loopLogos.map((logo, i) => (
          <div key={i} className="flex flex-col items-center justify-center shrink-0 text-white hover:text-neon-green transition-colors duration-300">
            <div className="text-2xl">{logo.node}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
