import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h2 className="display-lg text-5xl mb-8">Let's build <br /> something <br /> intentional.</h2>
          <p className="body-lg text-canvas-text/70 mb-12">
            Currently based in Oran, Algeria. <br />
            Reach out to discuss your next modern web experience.
          </p>
          <div className="space-y-4">
            <p className="label-md">mohamedknd123@gmail.com</p>
            <p className="label-md">github.com/mohamedknd</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7"
        >
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="label-md opacity-50">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="label-md opacity-50">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="label-md opacity-50">Project Details</label>
              <textarea 
                rows="4"
                className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors resize-none"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary label-md w-full md:w-auto"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-32 pt-12 border-t border-canvas-outline flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="label-md opacity-50">© 2026 Mohammed Yacine Kendouci</div>
        <div className="flex space-x-8">
          {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
            <a key={social} href="#" className="label-md hover:text-canvas-primary transition-colors">{social}</a>
          ))}
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
