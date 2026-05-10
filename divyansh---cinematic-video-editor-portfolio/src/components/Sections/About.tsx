import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute top-1/2 left-0 w-[50%] h-[150%] bg-neon-purple/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Part */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10 w-full aspect-[3/4] overflow-hidden border border-white/10 bg-white/5">
              <img 
                src="https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_800/v1778012971/IMG_20240401_235719_740_1_tpfsfh.jpg" 
                alt="Divyansh - Video Editor"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Decors */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-neon-purple opacity-40" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-neon-purple opacity-40" />
            
            <div className="absolute -right-6 bottom-10 glass p-6 z-20 backdrop-blur-3xl">
                <p className="text-4xl font-display font-black text-neon-purple">3</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Years Experience</p>
            </div>
          </motion.div>

          {/* Text Part */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-none">
              THE MAN <br /> BEHIND THE <br /> <span className="text-neon-purple cinematic-shadow">EDITS</span>
            </h2>
            
            <div className="space-y-6 text-xl text-gray-400 font-sans leading-relaxed">
              <p>
                I don't just cut clips together. I sculpt narratives. With a obsession for rhythm, color, and depth, I transform raw footage into high-impact cinematic experiences.
              </p>
              <p>
                Based in the shadows of the digital realm, I work with brands and creators who want to stand out from the noise. My style is defined by contrast—dark aesthetics, neon energy, and a relentless drive for perfection.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
               <div>
                  <h4 className="font-display font-bold text-white mb-2 uppercase tracking-widest text-sm">Vision</h4>
                  <p className="text-gray-500 text-sm">Pushing the boundaries of visual storytelling every single day.</p>
               </div>
               <div>
                  <h4 className="font-display font-bold text-white mb-2 uppercase tracking-widest text-sm">Gear</h4>
                  <p className="text-gray-500 text-sm">Top-tier hardware and the latest software for peak performance.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
