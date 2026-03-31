import { motion } from 'framer-motion';

// Animated section title with gradient accent underline
export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-14 ${className}`}
    >
      {subtitle && (
        <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-['Space_Grotesk']">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
    </motion.div>
  );
}
