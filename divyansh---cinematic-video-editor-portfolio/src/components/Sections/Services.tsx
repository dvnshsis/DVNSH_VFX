import { motion } from 'motion/react';
import { Video, Scissors, Layers, Zap, Camera, Film } from 'lucide-react';

const services = [
  {
    title: "Cinematic Editing",
    description: "High-impact narrative cutting with a focus on pacing and emotional resonance.",
    icon: Film,
    color: "neon-purple"
  },
  {
    title: "Color Grading",
    description: "Creating unique moody aesthetics that define the visual mood of your project.",
    icon: Scissors,
    color: "bat-red"
  },
  {
    title: "VFX & Compositing",
    description: "Seamlessly blending reality with digital elements to create impossible visuals.",
    icon: Zap,
    color: "neon-purple"
  },
  {
    title: "Sound Design",
    description: "Immersive audio landscapes that complement and elevate every frame.",
    icon: Layers,
    color: "bat-red"
  },
  {
    title: "Motion Graphics",
    description: "Dynamic titles and animated elements that bring energy to your content.",
    icon: Video,
    color: "neon-purple"
  },
  {
    title: "Direction",
    description: "Collaborative vision to help you translate ideas into cinematic reality.",
    icon: Camera,
    color: "bat-red"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4">
            SER<span className="text-neon-purple cinematic-shadow">VICES</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 group relative transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-neon-purple shadow-[0_0_15px_rgba(174,0,255,0.8)]`} />
              
              <div className="mb-8 relative">
                 <service.icon size={48} className="text-white group-hover:text-neon-purple transition-colors duration-500 z-10 relative" />
                 <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-neon-purple/20 transition-all duration-500" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-neon-purple transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-sans">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white/40 group-hover:text-neon-purple transition-colors cursor-pointer">
                Learn More <Zap size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
