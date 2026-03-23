import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SkillBadge from './SkillBadge';
import { skills } from '../../data/skills';

// ── Category icons (emoji-free, using text characters) ───────────────────
const categories = [
  {
    key: 'languages',
    label: 'Languages',
    icon: '{ }',
    description: 'Core programming languages',
  },
  {
    key: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: '⬡',
    description: 'Tools I build with daily',
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    icon: '⚙',
    description: 'Dev workflow & deployment',
  },
  {
    key: 'libraries',
    label: 'ML Libraries',
    icon: '▤',
    description: 'Data & inference tools',
  },
  {
    key: 'concepts',
    label: 'Concepts',
    icon: '◈',
    description: 'Principles & paradigms',
  },
];

function CategoryCard({ category, skillList, colIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: colIndex * 0.1, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '14px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.25s ease',
      }}
      whileHover={{ borderColor: 'var(--color-border-hover)' }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--color-accent-light)',
            lineHeight: 1,
          }}
        >
          {category.icon}
        </span>
        <div>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text)' }}>
            {category.label}
          </p>
          <p style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)', marginTop: '1px' }}>
            {category.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

      {/* Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {skillList.map((skill, i) => (
          <SkillBadge key={skill.name} name={skill.name} index={i + colIndex * 5} />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <Section id="skills">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> tech_stack'}</p>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
            lineHeight: 1.2,
          }}
        >
          Skills &{' '}
          <span style={{ color: 'var(--color-accent-light)' }}>Technologies</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-faint)',
            maxWidth: '280px',
            lineHeight: 1.6,
          }}
        >
          {'// No fancy bars — just what I actually use.'}
        </p>
      </div>

      {/* Four-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '1rem',
        }}
      >
        {categories.map((cat, i) => (
          <CategoryCard
            key={cat.key}
            category={cat}
            skillList={skills[cat.key] || []}
            colIndex={i}
          />
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--color-text-faint)',
        }}
      >
        {'// always learning · currently exploring: Next.js · advanced ML · system design'}
      </motion.p>
    </Section>
  );
}

export default Skills;
