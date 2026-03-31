import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'HTML', 'CSS', 'PHP',
  'React', 'Node.js', 'Express',
  'MongoDB', 'MySQL',
  'Git', 'GitHub',
  'DSA', 'OOP', 'DBMS'
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 1.5rem', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent)' }}>02.</span> Skills
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            A mix of programming languages, frameworks, and core computer science fundamentals.
          </p>
        </motion.div>

        {/* Simplified Skills Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
             <motion.div
               key={skill}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.3, delay: index * 0.05 }}
               className="card"
               style={{
                 padding: '0.8rem 1.5rem',
                 fontSize: '1rem',
                 fontWeight: 500,
                 color: 'var(--text-main)',
                 background: 'var(--bg-dark)',
                 border: '1px solid var(--border-subtle)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 minWidth: '120px'
               }}
             >
               {skill}
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
