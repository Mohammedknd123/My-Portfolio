import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 12 } }
  };

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="title-lg mb-16"
      >
        Technical Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((group) => (
          <div key={group.category} className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="label-md text-canvas-primary"
            >
              {group.category}
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {group.items.map((skill) => (
                <motion.span 
                  key={skill} 
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: 'var(--color-canvas-primary)', color: 'white' }}
                  className="px-5 py-2 rounded-full text-sm bg-canvas-variant text-canvas-on-variant font-medium cursor-default transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
