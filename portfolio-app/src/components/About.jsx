import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="bg-canvas-surface-low py-24 md:py-32">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16"
        >
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-canvas-surface-lowest ghost-border mb-8"
            >
              <img 
                src={profileImg} 
                alt="Mohammed Yacine" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h2 className="title-lg mb-4">Philosophy</h2>
            <div className="w-12 h-1 bg-canvas-primary"></div>
          </div>
          <div className="md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="display-lg text-4xl md:text-5xl mb-12 font-medium"
            >
              "The design is successful when one is brave enough to leave parts of the screen empty."
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 body-lg text-canvas-text/70">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I am a passionate Full Stack Developer and an actual Computer Science Student at The Higher School of CS in Sidi Bel Abbes , based in Mascara, Algeria. My mission 
                is to build web applications that are not only powerful but also intuitive 
                and visually stunning.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I specialize in modern technologies like React, Next.js, and Node.js. 
                I believe that clean code and intentional design are the foundations 
                of every great digital product.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
