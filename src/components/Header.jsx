import { motion } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>Landing Page em React</h1>
      <nav>
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Depoimentos</a>
        <button onClick={toggleDarkMode} className="dark-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;