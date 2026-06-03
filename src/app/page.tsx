import CanvasScroll from '@/components/CanvasScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <CanvasScroll />

      {/* Global Professional Dot Pattern Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)'
        }}
      />

      {/* Absolute edge-touching green glow for Hero */}
      <div className="absolute top-0 left-0 w-[50vw] max-w-[800px] h-[100vh] bg-neon-green/10 blur-[150px] pointer-events-none z-0" style={{ transform: 'translateX(-30%)' }} />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
