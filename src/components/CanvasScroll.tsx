'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    const container = containerRef.current;
    if (!canvas || !context || !container) return;

    const frameCount = 26;
    const currentFrame = (index: number) =>
      `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

    const images: HTMLImageElement[] = [];
    let imagesLoaded = 0;

    const render = () => {
      if (!images[airpods.frame] || !images[airpods.frame].complete) return;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      const img = images[airpods.frame];
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    const airpods = { frame: 0 };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === 1) render();
      };
      images.push(img);
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      let logicalWidth, logicalHeight;
      if (canvas.parentElement) {
        logicalWidth = canvas.parentElement.clientWidth;
        logicalHeight = canvas.parentElement.clientHeight;
      } else {
        logicalWidth = window.innerWidth;
        logicalHeight = window.innerHeight;
      }

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;

      render();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-24 right-0 w-full md:w-[45%] lg:w-[38%] h-[calc(100vh-12rem)] z-0 pointer-events-none"
    >
      {/* 
        Thick black gradients pinned to the container edges. 
        Since the canvas no longer moves via parallax, these gradients will perfectly and permanently mask the edges.
      */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      ></canvas>
    </div>
  );
}
