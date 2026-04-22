import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-canvas-surface-low/50 to-canvas-bg pointer-events-none"></div>
      <div className="section-container min-h-[80vh] flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="label-md text-canvas-primary mb-6 block"
            >
              Full Stack Developer
            </motion.span>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="display-lg mb-8 text-4xl md:text-6xl"
            >
              Mohammed Yacine <br /> 
              <span className="text-canvas-primary">Kendouci</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="body-lg text-canvas-text/70 max-w-xl mb-12"
            >
              Crafting modern web experiences with clean, intentional code.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-6"
            >
              <button className="btn-primary label-md">View Projects</button>
              <button className="label-md border-b-2 border-canvas-text pb-1 hover:text-canvas-primary hover:border-canvas-primary transition-all">
                My Process
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 relative hidden md:block"
          >
            <div className="aspect-[4/5] bg-canvas-surface-low rounded-xl relative z-10 overflow-hidden">
              <img 
                src={profileImg} 
                alt="Mohammed Yacine Kendouci" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-canvas-primary/10 to-transparent"></div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-canvas-outline rounded-xl -z-0"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
