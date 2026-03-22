import { motion } from 'framer-motion';
import Section from '../layout/Section';

// ── Stat card data ─────────────────────────────────────────────────────────
const stats = [
  { value: '500+',         label: 'Problems Solved',      sub: 'LeetCode · GFG · HackerRank' },
  { value: '5+',           label: 'Projects Built',        sub: 'React · Python · Full-Stack' },
  { value: 'Full-Stack',   label: 'Tech Breadth',          sub: 'Web · Backend · ML Basics'   },
  { value: 'Open',         label: 'to Opportunities',      sub: 'Internship · Full-time'       },
];

// ── Animated counter for numeric values ───────────────────────────────────
function StatCard({ value, label, sub, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        cursor: 'default',
      }}
      whileHover={{ y: -3, borderColor: 'var(--color-accent)' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700,
          color: 'var(--color-accent-light)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text)' }}>
        {label}
      </span>
      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)' }}>
        {sub}
      </span>
    </motion.div>
  );
}

function About() {
  return (
    <Section id="about">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> about_me'}</p>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >

        {/* ── Left: Story ─────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            Building things that{' '}
            <span style={{ color: 'var(--color-accent-light)' }}>matter</span>.
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: 'var(--color-text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
            }}
          >
            <p>
              I'm a software engineer passionate about solving real-world problems with clean,
              efficient code. Whether it's optimizing a binary search, architecting a full-stack
              app, or training an ML model — I care about the craft behind every line.
            </p>
            <p>
              My foundation is strong in <strong style={{ color: 'var(--color-text)' }}>Data Structures &amp; Algorithms</strong>,
              which shapes how I approach every engineering decision. I've built production-grade
              web apps with <strong style={{ color: 'var(--color-text)' }}>React and Python</strong>, and
              I'm constantly expanding into <strong style={{ color: 'var(--color-text)' }}>Machine Learning</strong>.
            </p>
            <p>
              I believe great engineers don't just write code — they solve problems,
              communicate clearly, and build with intention.
            </p>
          </div>

          {/* Highlight chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem' }}>
            {['Problem Solver', 'React Developer', 'Python Engineer', 'ML Enthusiast', 'DSA Practitioner'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* ── Right: Stat cards ──────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}

          {/* Profile snapshot card */}
          <div
            style={{
              gridColumn: '1 / -1',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderLeft: '3px solid var(--color-accent)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-text-faint)',
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.4rem', fontSize: '0.72rem' }}>
              {'// profile_snapshot.json'}
            </span>
            <span style={{ color: 'var(--color-text-faint)' }}>{'{'}</span>
            {[
              ['name',      '"Sairaj Thorat"'],
              ['role',      '"Software Engineer"'],
              ['location',  '"India"'],
              ['focus',     '"DSA · React · Python · ML"'],
              ['status',    '"Open to opportunities"'],
            ].map(([key, val]) => (
              <div key={key} style={{ paddingLeft: '1rem' }}>
                <span style={{ color: 'var(--color-accent-light)' }}>"{key}"</span>
                <span style={{ color: 'var(--color-text-faint)' }}>: </span>
                <span style={{ color: '#86efac' }}>{val}</span>
                <span style={{ color: 'var(--color-text-faint)' }}>,</span>
              </div>
            ))}
            <span style={{ color: 'var(--color-text-faint)' }}>{'}'}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
