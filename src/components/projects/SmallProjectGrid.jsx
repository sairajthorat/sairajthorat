import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// Status dot (same as in ProjectCard, kept local to avoid coupling)
function StatusDot({ status }) {
  const colors = {
    live:          { bg: '#22c55e', label: 'Live' },
    'in-progress': { bg: '#f59e0b', label: 'In Progress' },
    archived:      { bg: '#71717a', label: 'Archived' },
  };
  const c = colors[status] || colors.archived;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
      <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: c.bg }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-faint)' }}>{c.label}</span>
    </span>
  );
}

function SmallProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="card-base"
      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-faint)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <StatusDot status={project.status} />
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--color-text-faint)', transition: 'color 0.2s', lineHeight: 1 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-faint)')}
            >
              <FiGithub size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              style={{ color: 'var(--color-text-faint)', transition: 'color 0.2s', lineHeight: 1 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-faint)')}
            >
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.65, flex: 1 }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.techStack.map(tech => (
          <span key={tech} className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function SmallProjectGrid({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div>
      {/* Sub-heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>
          {'// other projects'}
        </p>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Responsive grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1rem',
        }}
      >
        {projects.map((p, i) => (
          <SmallProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export default SmallProjectGrid;
