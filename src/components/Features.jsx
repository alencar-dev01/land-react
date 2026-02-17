import { motion } from 'framer-motion';

function Features() {
  const features = [
    { icon: '🚀', title: 'Rápido', desc: 'Performance otimizada para velocidade.' },
    { icon: '🔒', title: 'Seguro', desc: 'Proteção de dados avançada.' },
    { icon: '🎨', title: 'Intuitivo', desc: 'Interface amigável e moderna.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="features"
      className="features"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants}>Recursos Principais</motion.h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Features;