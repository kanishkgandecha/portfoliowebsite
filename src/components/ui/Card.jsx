import { motion } from 'framer-motion';

// Reusable glassmorphism Card component
export default function Card({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, scale: 1.02 } : {}}
      className={`
        rounded-2xl p-6
        bg-white/80 dark:bg-white/5
        border border-gray-200/80 dark:border-white/10
        shadow-sm dark:shadow-none
        backdrop-blur-xl
        transition-shadow duration-300
        hover:shadow-xl hover:shadow-indigo-500/10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
