import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Coffee Website',
      category: 'MERN STACK / ANIMATIONS',
      description: 'A modern, elegant coffee shop website built with the MERN stack. Clean UI with smooth animations.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
    },
    {
      title: 'Modern Dashboard',
      category: 'REDUX / CHARTS',
      description: 'A powerful data visualization dashboard for tracking business metrics in real-time.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
    },
    {
      title: 'Creative Agency',
      category: 'NEXT.JS / UI',
      description: 'High-end landing page for a creative agency with complex layouts and responsive design.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800'
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
          <h2 className="title-lg">Selected Artifacts</h2>
          <span className="label-md opacity-50">View All Work [08]</span>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={cardVariants}
              className="group bg-canvas-surface-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-ambient hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <span className="label-md text-canvas-primary">{project.category}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="title-lg mb-4">{project.title}</h3>
                <p className="body-lg text-canvas-text/60 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-12 w-full h-1 bg-canvas-bg group-hover:bg-canvas-primary transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
