import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_p0pix3o',
      'template_vrktam5',
      form.current,
      'nL36Lc4H2OxFW80dx'
    ).then((result) => {
        console.log(result.text);
        setStatus('success');
        alert('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus('error');
        alert('Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

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
            Currently based in Mascara, Algeria. <br />
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
          <form ref={form} onSubmit={sendEmail} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="label-md opacity-50">Your Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="label-md opacity-50">Email Address</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="label-md opacity-50">Project Details</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-canvas-outline py-4 focus:outline-none focus:border-canvas-primary transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="btn-primary label-md w-full md:w-auto flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Inquiry'}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-500 label-md"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Message Sent Successfully
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-500 label-md"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Failed to send message
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
