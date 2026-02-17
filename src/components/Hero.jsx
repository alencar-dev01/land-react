import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Bem-vindo à Nossa Plataforma
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Descubra soluções inovadoras com animações incríveis e design profissional.
      </motion.p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0,123,255,0.3)' }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Começar Agora
      </motion.button>
    </motion.section>
  );
}

export default Hero;