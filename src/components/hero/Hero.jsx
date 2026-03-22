import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiFileText, FiChevronDown } from 'react-icons/fi';
import TypingEffect from './TypingEffect';
import { SITE } from '../../utils/constants';

// ── Framer Motion variants ────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Cursor glow (follows mouse on hero area) ──────────────────────────────────
function useCursorGlow(containerRef) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, [containerRef]);
}

function Hero() {
  const heroRef = useRef(null);
  useCursorGlow(heroRef);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // Cursor glow effect
        background: `
          radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 40%), rgba(37, 99, 235, 0.05), transparent 70%),
          var(--color-bg)
        `,
      }}
    >

      {/* ── Subtle grid background ─────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          opacity: 0.22,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '4rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '720px' }}
        >

          {/* Terminal label */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
            <span className="label-mono">
              {'> hello_world'}
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '0.9em',
                  backgroundColor: 'var(--color-accent-light)',
                  marginLeft: '4px',
                  verticalAlign: 'text-bottom',
                  animation: 'blink 1s step-end infinite',
                }}
                aria-hidden="true"
              />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
            }}
          >
            {SITE.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              fontWeight: 400,
              color: 'var(--color-text-muted)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            Software Engineer{' '}
            <span style={{ color: 'var(--color-border-hover)' }}>·</span>{' '}
            Problem Solver{' '}
            <span style={{ color: 'var(--color-border-hover)' }}>·</span>{' '}
            Builder
          </motion.p>

          {/* Positioning statement with typing effect */}
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '2.5rem',
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderLeft: '3px solid var(--color-accent)',
              borderRadius: '8px',
              maxWidth: '580px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-text-faint)',
                marginRight: '0.5rem',
                userSelect: 'none',
              }}
            >
              {'// '}
            </span>
            <TypingEffect phrases={SITE.taglines} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-primary"
              style={{ gap: '0.5rem' }}
            >
              View Projects <FiArrowRight size={15} />
            </a>

            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiFileText size={15} /> Resume
            </a>

            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiGithub size={15} /> GitHub
            </a>
          </motion.div>

          {/* Location / availability badge */}
          <motion.div variants={itemVariants} style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                animation: 'pulse-green 2s ease-in-out infinite',
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-text-faint)',
              }}
            >
              Available for opportunities · {SITE.location}
            </span>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll indicator (bouncing chevron) ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
        }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-faint)' }}>scroll</span>
        <FiChevronDown
          size={18}
          color="var(--color-text-faint)"
          style={{ animation: 'bounce-down 1.5s ease-in-out infinite' }}
        />
      </motion.div>

      {/* ── Hero-specific keyframes ────────────────────────────────────────── */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 8px rgba(34, 197, 94, 0.6); }
          50% { box-shadow: 0 0 16px rgba(34, 197, 94, 0.9); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
