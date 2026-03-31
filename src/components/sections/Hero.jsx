import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingTop: '72px',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        
        {/* Subtle Accent Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.3rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem',
            background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.2)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
            <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--accent)', opacity: 0.5, animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
          </span>
          Available for Internships
        </motion.div>

        {/* Main Header */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading"
          style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            marginBottom: '1rem', 
            letterSpacing: '-0.03em',
            color: 'var(--text-main)'
          }}
        >
          Hi, I&apos;m Kanishk Gandecha.
        </motion.h1>

        {/* Subhead / Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
            fontWeight: 700, 
            color: 'var(--text-muted)', 
            marginBottom: '1.5rem', 
            fontFamily: 'var(--font-heading)' 
          }}
        >
          A software engineer specializing in <br className="hidden md:block"/>
          <span className="text-accent">Full Stack Development</span>.
        </motion.h2>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            maxWidth: '660px', 
            margin: '0 auto 2.5rem', 
            lineHeight: 1.8 
          }}
        >
          Motivated Computer Engineering student with experience in building scalable MERN stack applications and integrating AI-based solutions. I enjoy building real-world projects and improving my problem-solving skills.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary"
          >
            Explore Projects <ArrowRight size={18} />
          </button>
          
          <a
            href="https://drive.google.com/file/d/1Vs0WrUQQG2ku8KBRi795vZFIStpyU4sV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FileText size={18} /> View Resume
          </a>
        </motion.div>

      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
