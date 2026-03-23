import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiPlay, FiLinkedin } from 'react-icons/fi';
import VideoModal from './VideoModal';
import ImageCarousel from './ImageCarousel';

// Status indicator dot
function StatusDot({ status }) {
  const colors = {
    live:        { bg: '#22c55e', glow: 'rgba(34,197,94,0.5)',  label: 'Live' },
    'in-progress':{ bg: '#f59e0b', glow: 'rgba(245,158,11,0.5)', label: 'In Progress' },
    archived:    { bg: '#71717a', glow: 'transparent',           label: 'Archived' },
  };
  const c = colors[status] || colors.archived;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
      <span style={{
        display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
        backgroundColor: c.bg,
        boxShadow: `0 0 6px ${c.glow}`,
      }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-faint)' }}>
        {c.label}
      </span>
    </span>
  );
}

/**
 * Large featured project card — horizontal layout desktop, stacked on mobile.
 */
function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inlineVideoPlaying, setInlineVideoPlaying] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        }}
        whileHover={{ borderColor: 'var(--color-border-hover)', boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          }}
        >
          {/* ── Image / thumbnail panel ──────────────────────────────────── */}
          <div
            style={{
              order: isEven ? 0 : 1,
              position: 'relative',
              minHeight: '280px',
              backgroundColor: 'var(--color-surface-2)',
              overflow: 'hidden',
            }}
          >
            {/* ── Inline Video Player ───────────────────────────────────── */}
            {inlineVideoPlaying ? (
              <iframe
                src={project.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('?')[0] + '?autoplay=1&rel=0&vq=hd1080'}
                title={`${project.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  border: 'none',
                  display: 'block',
                }}
              />
            ) : (
              /* ── Facade (Carousel, Image, or Placeholder + Play Button) ─────────── */
              <>
                {project.images && project.images.length > 0 ? (
                  <ImageCarousel images={project.images} title={project.title} />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      display: 'block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={e => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  /* Placeholder when no image */
                  <div
                    style={{
                      width: '100%', height: '100%', minHeight: '280px',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      backgroundColor: 'var(--color-surface-2)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--color-border-hover)' }}>{'{ }'}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Video play overlay */}
                {project.videoUrl && (
                  <button
                    onClick={() => {
                      // Check if it's YouTube; play inline. Else, open external modal (for .mp4)
                      if (project.videoUrl.includes('youtu')) {
                        setInlineVideoPlaying(true);
                      } else {
                        setModalOpen(true);
                      }
                    }}
                    aria-label={`Watch ${project.title} demo`}
                    style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(37, 99, 235, 0.85)',
                      backdropFilter: 'blur(4px)',
                      border: '2px solid rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      width: '64px', height: '64px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: '#fff',
                      transition: 'background 0.2s, transform 0.2s',
                      boxShadow: '0 4px 20px rgba(37,99,235,0.5)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.95)';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(37, 99, 235, 0.85)';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                  >
                    <FiPlay size={24} style={{ marginLeft: '4px' }} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* ── Details panel ─────────────────────────────────────────────── */}
          <div
            style={{
              order: isEven ? 1 : 0,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            {/* Top row: index + status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-faint)' }}>
                {String(index + 1).padStart(2, '0')} / featured
              </span>
              <StatusDot status={project.status} />
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>

            {/* Problem statement */}
            <p
              style={{
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-accent-light)',
                borderLeft: '2px solid var(--color-accent)',
                paddingLeft: '0.75rem',
                lineHeight: 1.6,
              }}
            >
              {project.problem}
            </p>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              {project.description}
            </p>

            {/* Key features */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {project.features.map(feat => (
                <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  <span style={{ color: 'var(--color-accent-light)', marginTop: '1px', flexShrink: 0 }}>▸</span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.techStack.map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.25rem' }}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  <FiExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  <FiGithub size={14} /> GitHub
                </a>
              )}
              {project.linkedinUrl && (
                <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid rgba(255,255,255,0.1)' }} title="View community reaction on LinkedIn">
                  <FiLinkedin size={14} /> LinkedIn Post
                </a>
              )}
              {/* {project.videoUrl && (
                <button onClick={() => setModalOpen(true)} className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  <FiPlay size={14} /> Watch Demo
                </button>
              )} */}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Video Modal */}
      {project.videoUrl && (
        <VideoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          videoUrl={project.videoUrl}
          title={project.title}
        />
      )}
    </>
  );
}

export default ProjectCard;
