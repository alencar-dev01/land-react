import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { name: 'João', text: 'Incrível! As animações são suaves e o design é top.' },
    { name: 'Maria', text: 'Mudou minha experiência online completamente.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="testimonials"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants}>O que Nossos Usuários Dizem</motion.h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          >
            <p>"{testimonial.text}"</p>
            <cite>- {testimonial.name}</cite>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonials;