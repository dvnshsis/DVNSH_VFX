import { motion } from 'motion/react';
import { Play, User, Mail, Briefcase, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', name: 'Home', icon: Camera },
  { id: 'about', name: 'About', icon: User },
  { id: 'portfolio', name: 'Work', icon: Play },
  { id: 'services', name: 'Services', icon: Briefcase },
  { id: 'contact', name: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'portfolio', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter cinematic-shadow"
        >
          D<span className="text-neon-purple cinematic-shadow">IV</span>YANSH
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-display tracking-widest uppercase transition-all hover:text-neon-purple ${
                active === item.id ? 'text-neon-purple cinematic-shadow' : 'text-gray-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden glass p-2 rounded-full"
        >
           <Mail size={20} className="text-neon-purple" />
        </motion.a>
      </div>
    </nav>
  );
}
