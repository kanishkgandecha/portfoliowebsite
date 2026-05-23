import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap, Code } from 'lucide-react';

const education = [
  { 
    degree: 'B.Tech Computer Engineering', 
    school: 'K.J. Somaiya College of Engineering, Mumbai', 
    year: '2023 – Present',
    details: 'Current CGPA: 9.13' 
  },
  { 
    degree: 'Class XII – Science', 
    school: 'Central Board of Secondary Education', 
    year: '2022 – 2023',
    details: 'Score: 72.6%' 
  },
  { 
    degree: 'Class X', 
    school: 'Central Board of Secondary Education', 
    year: '2020 – 2021',
    details: 'Score: 88.6%' 
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--accent)' }}>01.</span> About Me
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)', marginLeft: '1rem', maxWidth: '300px' }} />
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 0.8fr)', gap: '3rem', alignItems: 'start' }} className="grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                I'm a motivated Computer Engineering student with hands-on experience in building scalable MERN stack web applications and integrating AI-based solutions.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                I enjoy building real-world projects that solve complex problems and am constantly looking to improve my problem-solving skills and technical foundation. I love exploring new technologies and architecting clean, maintainable code.
              </p>
              <p>
                Currently, I'm looking for <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>internship opportunities</strong> to learn, grow, and contribute to meaningful projects within a professional team environment.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <MapPin size={16} color="var(--accent)" />
                <span>Mumbai, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Mail size={16} color="var(--accent)" />
                <a href="mailto:gandechakanishk9@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>gandechakanishk9@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Phone size={16} color="var(--accent)" />
                <span>+91-9561500052</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
            style={{ padding: '2rem' }}
          >
            <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} color="var(--accent)" /> Education
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '5px', bottom: '5px', left: '7px', width: '2px', background: 'var(--border-subtle)' }} />
              
              {education.map((edu, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '1.8rem' }}>
                  <div style={{ position: 'absolute', left: '2px', top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-card)', border: '2px solid var(--accent)' }} />
                  
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{edu.degree}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{edu.school}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{edu.year}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', background: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
