import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import SmallProjectGrid from './SmallProjectGrid';
import { featuredProjects, smallProjects } from '../../data/projects';

// Filter pills data
const FILTERS = ['All', 'React', 'Python', 'ML', 'DSA'];

function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter small projects by tech stack
  const filteredSmall = activeFilter === 'All'
    ? smallProjects
    : smallProjects.filter(p => p.techStack.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <Section id="projects">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> featured_projects'}</p>

      {/* Heading row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '3rem',
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
          Things I've{' '}
          <span style={{ color: 'var(--color-accent-light)' }}>Built</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-faint)', maxWidth: '260px', lineHeight: 1.6 }}>
          {'// real problems · real solutions'}
        </p>
      </div>

      {/* ── Featured cards (large) ─────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* ── Small projects grid with filter ────────────────────────────── */}
      {smallProjects.length > 0 && (
        <div>
          {/* Filter pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {FILTERS.map(filter => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeFilter === filter ? 'var(--color-accent)' : 'var(--color-surface)',
                  borderColor: activeFilter === filter ? 'var(--color-accent)' : 'var(--color-border)',
                  color: activeFilter === filter ? '#fff' : 'var(--color-text-muted)',
                }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <SmallProjectGrid projects={filteredSmall} />
        </div>
      )}
    </Section>
  );
}

export default FeaturedProjects;
