import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Play, X } from 'lucide-react';

const projects = [
  {
    title: "Instagram Reel",
    category: "Vertical Content",
    video: "https://drive.google.com/uc?export=download&id=1WxfW7z86lu-SSWQMrNCIy4gl2wGBj8BS",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    color: "neon-purple",
    gallery: [
      { type: 'video', url: "https://youtube.com/shorts/VwCBdtBvgYU" },
      { type: 'video', url: "https://youtube.com/shorts/rL1HodkYATk" },
      { type: 'video', url: "https://youtube.com/shorts/WVlOl4LQ0Dw" },
      { type: 'video', url: "https://youtube.com/shorts/TTPrDNEdADA" },
      { type: 'video', url: "https://youtube.com/shorts/Db4C7NCQ7iA" }
    ]
  },
  {
    title: "T-Shirt Design",
    category: "Merchandise",
    image: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_800/v1778066388/Solo_Leveling_Anime_T-Shirt_Designs_For_Sale_1_ru5ye8.jpg",
    color: "neon-purple",
    gallery: [
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778066388/Solo_Leveling_Anime_T-Shirt_Designs_For_Sale_1_ru5ye8.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778066388/Erwin_Attack_on_Titan_Anime_T-shirt_Design_For_Sale_1_dj3lgh.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778066388/Attack_On_Titan_Eren_Yeager_-_Anime_Streetwear_Designs_For_Sale_From_1_ba5wnm.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778066387/Anime_T-Shirt_Designs_Gojo_Sukuna_and_Tanjiro_-_Niloy_Digital_Canvas_1_uchp0h.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/The_master_planner_graphic_slogan_with_hand_puppet_strings_letters_vector_xeqxan.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/Attack_On_Titan_Eren_Yeager_-_Anime_Streetwear_Designs_For_Sale_From_dyprmz.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/Solo_Leveling_Anime_T-Shirt_Designs_For_Sale_yx5b0z.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/Streetwear_T-Shirt_Design___Graphic_Tee_coxxvk.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/download_2_inwtkh.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/Erwin_Attack_on_Titan_Anime_T-shirt_Design_For_Sale_qvcm4r.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065868/Sign_in_hsxghi.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/motivational_quote_for_life_success_break_rules_nphzdo.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/download_1_pbbyt6.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/Design_jcrq1k.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/Anime_T-Shirt_Designs_Gojo_Sukuna_and_Tanjiro_-_Niloy_Digital_Canvas_zvitvn.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065867/crownless_queen_cmygll.jpg" }
    ]
  },
  {
    title: "YouTube Ads",
    category: "Commercial",
    video: "https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-front-of-a-neon-light-40058-large.mp4",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    color: "neon-purple",
    gallery: [
      { type: 'video', url: "https://youtu.be/ocw5vtZiR-Q" },
      { type: 'video', url: "https://youtu.be/HgDiE794GhE" },
      { type: 'video', url: "https://youtu.be/A_-dZ_T9Nec" },
      { type: 'video', url: "https://youtu.be/QJjUxvaqbnE" },
      { type: 'video', url: "https://youtu.be/ddlwFl7Vsfw" }
    ]
  },
  {
    title: "Instagram Ads",
    category: "Social Media Marketing",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-can-of-soda-with-water-drops-40118-large.mp4",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    color: "neon-purple",
    gallery: [
      { type: 'video', url: "https://youtube.com/shorts/-uyRmvEEgec" },
      { type: 'video', url: "https://youtube.com/shorts/vAfREsLv7pc" },
      { type: 'video', url: "https://youtube.com/shorts/9EY3yWf5JdU" },
      { type: 'video', url: "https://youtube.com/shorts/KP7r2MgLtNU" },
      { type: 'video', url: "https://youtube.com/shorts/C8NC4Na5Ycc" }
    ]
  },
  {
    title: "Colour Grading Showreel",
    category: "Long-form Editing",
    video: "https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-on-the-road-at-night-40112-large.mp4",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
    color: "neon-purple",
    gallery: [
      { type: 'video', url: "https://youtu.be/qSuuItINMj8" }
    ]
  },
  {
    title: "VFX & Cinematics",
    category: "Visual Effects",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    color: "neon-purple",
    gallery: [
      { type: 'video', url: "https://youtu.be/xoop2mhvx74" },
      { type: 'video', url: "https://youtube.com/shorts/wi21qK0ljxg" },
      { type: 'video', url: "https://youtu.be/Fi1sJMo-xuA" },
      { type: 'video', url: "https://youtube.com/shorts/Fse4sAEdQ54" }
    ]
  },
  {
    title: "Graphics Gallery",
    category: "Graphic Design",
    image: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_800/v1778065528/PAYAL_GAMING_NEW_GAMING_THUMBNAIL_1_ui482q.jpg",
    color: "neon-purple",
    gallery: [
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065528/PAYAL_GAMING_NEW_GAMING_THUMBNAIL_1_ui482q.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065528/Thumbnail_design_bragws.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065528/YouTube_Thumbnail_1_1_plktjh.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065100/YouTube_Thumbnail_cugfmj.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065100/Youtube_thumbnail_design_ehu7pu.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065100/YouTube_Thumbnail_Design_for_Content_Creators_ifwrec.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065038/youtube_thumbnail_2_pm5dcv.jpg" },
      { type: 'image', url: "https://res.cloudinary.com/db1is5oym/image/upload/f_auto,q_auto,w_1200/v1778065037/download_cynidw.jpg" }
    ]
  }
];

const getYouTubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
              LATEST <span className="text-neon-purple cinematic-shadow">WORKS</span>
            </h2>
            <p className="mt-4 text-gray-400 font-mono tracking-widest uppercase text-xs md:text-sm">
              Click any project to view the category gallery
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-mono text-sm uppercase tracking-tighter"
          >
            [ Scroll to Explore ]
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
            >
              {/* Background media */}
              <div className="w-full h-full relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : project.video && !project.video.includes('youtube.com') && !project.video.includes('youtu.be') ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" />
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Color Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-neon-purple`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neon-purple mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-black tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:bg-neon-purple group-hover:border-neon-purple transition-all duration-300">
                     <Play size={18} fill="white" className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className={`absolute inset-0 pointer-events-none border border-white/5 group-hover:border-neon-purple/40 transition-colors duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inner Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
          >
            <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
                onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-full md:h-auto md:max-h-[90vh] bg-[#0c0c0c] border border-white/10 flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-6 md:p-10 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-neon-purple font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-neon-purple/20 bg-neon-purple/5">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                      {selectedProject.gallery.length} Elements
                    </span>
                  </div>
                </motion.div>
                <motion.button 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelectedProject(null)}
                  className="group w-12 h-12 flex items-center justify-center border border-white/10 hover:border-white transition-all transform active:scale-95"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Gallery Grid */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 no-scrollbar">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  {selectedProject.gallery.map((item, idx) => {
                     const ytUrl = item.type === 'video' ? getYouTubeEmbedUrl(item.url) : null;
                     
                     return (
                      <motion.div 
                          key={idx}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className="group flex flex-col gap-4"
                      >
                          <div className="relative aspect-video overflow-hidden border border-white/5 bg-white/10 shadow-2xl group-hover:border-neon-purple/30 transition-colors duration-500">
                            {item.type === 'video' ? (
                              ytUrl ? (
                                <iframe
                                  src={`${ytUrl}?autoplay=0&rel=0&modestbranding=1`}
                                  title={`YouTube video player ${idx}`}
                                  className="w-full h-full border-0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                />
                              ) : (
                                <video 
                                  src={item.url} 
                                  controls 
                                  playsInline
                                  className="w-full h-full object-cover"
                                />
                              )
                            ) : (
                              <img 
                                  src={item.url} 
                                  alt={`${selectedProject.title} gallery item ${idx + 1}`} 
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                                  referrerPolicy="no-referrer"
                              />
                            )}
                          </div>
                          <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest px-2 py-1 bg-white/5 group-hover:text-neon-purple transition-colors">
                              Asset 0{idx + 1}
                            </span>
                          </div>
                      </motion.div>
                     );
                  })}
                </motion.div>

                {/* Modal Footer Section */}
                <div className="pt-20 pb-10 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">Want to see more detailed breakdowns?</p>
                    <button 
                        onClick={() => {
                            setSelectedProject(null);
                            window.location.hash = 'contact';
                        }}
                        className="group relative px-10 py-4 bg-neon-purple text-white font-display font-black uppercase tracking-[0.2em] text-sm overflow-hidden"
                    >
                        <span className="relative z-10">Discuss Project</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white group-hover:text-black" />
                        <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity z-20">Let's Talk</span>
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
