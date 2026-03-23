import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiFileText, FiChevronDown } from 'react-icons/fi';
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
      <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '4rem', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '720px' }}
          >
          {/* Location / availability badge (Moved to top) */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.8rem', borderRadius: '20px', backgroundColor: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
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
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                letterSpacing: '0.02em',
              }}
            >
              Available for opportunities · {SITE.location}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
            }}
          >
            Hi, I'm {SITE.name.split(' ')[0]}.
          </motion.h1>

          {/* Gradient Sub-headline */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              // Premium gradient text
              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            I build intelligent software.
          </motion.h2>

          {/* Professional Summary */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              fontWeight: 400,
              color: 'var(--color-text-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              maxWidth: '540px',
            }}
          >
            A computer engineering student and full-stack developer bridging the gap between elegant frontend architectures and powerful machine learning systems. I turn complex problems into production-ready solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-primary"
              style={{ gap: '0.5rem', padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
            >
              View Projects <FiArrowRight size={16} />
            </a>

            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
            >
              <FiFileText size={16} /> Resume
            </a>

            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
            >
              <FiGithub size={16} /> GitHub
            </a>
          </motion.div>

          </motion.div> {/* Keep this closure for Left Column Text block */}

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end', // Shift right
              alignItems: 'center',
              width: '100%',
              paddingTop: '2rem',
            }}
          >
            {/* The Radial Vignette masked container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px', // Increased size
                aspectRatio: '1/1', // Square ratio for a perfect circular fade
                zIndex: 1,
                // Shift mask center UP (50% 35%) so the top of the photo isn't clipped
                WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 45%, transparent 72%)',
                maskImage: 'radial-gradient(circle at 50% 35%, black 45%, transparent 72%)',
              }}
            >
              <img
                src="/assets/Photo.png"
                alt="Sairaj Thorat Portrait"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: 0.85, 
                  filter: 'contrast(1.05) saturate(1.1) brightness(0.95)',
                  transform: 'scale(1.02)', 
                  transition: 'opacity 0.5s ease',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
              />
              
              {/* Optional: subtle grainy overlay for premium texture texture */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: 0.04,
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
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
