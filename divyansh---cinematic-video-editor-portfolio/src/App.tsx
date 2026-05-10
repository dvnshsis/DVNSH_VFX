/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import RainCanvas from './components/Effects/RainCanvas';
import ParticleCanvas from './components/Effects/ParticleCanvas';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load sections that are below the fold
const About = lazy(() => import('./components/Sections/About'));
const Portfolio = lazy(() => import('./components/Sections/Portfolio'));
const Services = lazy(() => import('./components/Sections/Services'));
const Contact = lazy(() => import('./components/Sections/Contact'));

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-neon-purple selection:text-white">
      {/* Custom Global Effects */}
      <RainCanvas />
      <ParticleCanvas />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Mouse Glow Follower */}
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none z-[0] hidden lg:block"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 bg-dark-bg flex items-center justify-center font-mono text-gray-500 text-xs">LOADING_SECTION...</div>}>
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </Suspense>
      </main>

      {/* Footer Branding */}
      <footer className="py-8 bg-black/50 border-t border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">
          <div>Inspired by the Night. Built for the Visionaries.</div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-neon-purple transition-colors">Privacy</a>
             <a href="#" className="hover:text-neon-purple transition-colors">Terms</a>
             <a href="#" className="hover:text-neon-purple transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[40] shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

