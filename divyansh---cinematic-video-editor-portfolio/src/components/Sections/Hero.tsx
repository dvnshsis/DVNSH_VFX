import { motion } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&auto=format&fit=crop"
          alt="Cinematic Background"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dark-bg" />
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className="text-[15vw] md:text-[12vw] font-display font-black leading-none tracking-tighter text-white"
            animate={{
              textShadow: [
                '0 0 15px rgba(174, 0, 255, 0.4), 0 0 30px rgba(174, 0, 255, 0.2)',
                '0 0 25px rgba(174, 0, 255, 0.7), 0 0 50px rgba(174, 0, 255, 0.4)',
                '0 0 15px rgba(174, 0, 255, 0.4), 0 0 30px rgba(174, 0, 255, 0.2)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DIVYANSH
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-lg md:text-2xl font-mono tracking-[0.3em] uppercase text-gray-300">
               Cinematic Video Editor | High Impact Visuals
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(174, 0, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-neon-purple text-white font-display tracking-widest uppercase text-sm font-bold flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Play size={18} fill="currentColor" />
              <span>View My Work</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#ae00ff' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 hover:border-neon-purple transition-colors text-white font-display tracking-widest uppercase text-sm font-bold"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/40"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Atmospheric Fog/Smoke Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
    </section>
  );
}
