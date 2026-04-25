import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Coffee Website',
      category: 'FRONTEND',
      description: 'A modern elegant coffee shop website with smooth animations and clean UI design.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      github: 'https://github.com/Mohammedknd123',
      tech: ['React', 'Tailwind CSS']
    },
    {
      title: 'Expense Tracker',
      category: 'FULLSTACK APP',
      description: 'A full-stack personal finance manager with income tracking, expense management, and simulated money transfers between users.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      live: 'https://expense-tracker-two-drab-51.vercel.app',
      github: 'https://github.com/Mohammedknd123/expense-tracker',
      tech: ['React', 'Node.js', 'Express', 'MongoDB']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="bg-canvas-surface-low py-24 md:py-32">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="title-lg mb-4">Selected Artifacts</h2>
            <div className="w-12 h-1 bg-canvas-primary"></div>
          </div>
          <span className="label-md opacity-50">View All Work [02]</span>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={cardVariants}
              className="group bg-canvas-surface-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-ambient hover:-translate-y-2"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-canvas-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-canvas-surface-lowest text-canvas-text p-3 rounded-full hover:bg-canvas-primary hover:text-white transition-all shadow-lg"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-canvas-surface-lowest text-canvas-text p-3 rounded-full hover:bg-canvas-primary hover:text-white transition-all shadow-lg"
                  >
                    <Code className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="label-md text-canvas-primary px-3 py-1 bg-canvas-primary/10 rounded-full">{project.category}</span>
                </div>
                <h3 className="title-lg mb-4">{project.title}</h3>
                <p className="body-lg text-canvas-text/60 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold tracking-widest uppercase opacity-40">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="label-md px-6 py-3 bg-canvas-primary text-white rounded-lg hover:opacity-90 transition-all text-center flex-1"
                    >
                      View Live
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="label-md px-6 py-3 ghost-border rounded-lg hover:bg-canvas-surface-low transition-all text-center flex-1"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
