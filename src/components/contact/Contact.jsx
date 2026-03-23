import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Section from '../layout/Section';
import { SITE } from '../../utils/constants';

function Contact() {
  return (
    <Section id="contact">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> get_in_touch'}</p>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* ── Left: Message ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Let's build something{' '}
            <span style={{ color: 'var(--color-accent-light)' }}>great</span>.
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '480px',
            }}
          >
            I'm currently looking for new opportunities — whether it's a full-time role,
            an internship, or an interesting freelance project. My inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="btn-primary"
            style={{ display: 'inline-flex', padding: '0.8rem 1.5rem', fontSize: '0.9rem', marginBottom: '2rem' }}
          >
            <FiMail size={16} /> Say Hello
          </a>
        </motion.div>

        {/* ── Right: Social Links ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-faint)', marginBottom: '0.5rem' }}>
            {'// other_platforms'}
          </p>

          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-2)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-border)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-surface-2)')}
          >
            <FiGithub size={20} color="var(--color-text-muted)" />
            <span style={{ fontWeight: 600 }}>GitHub</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
              github.com/{SITE.github?.split('/').pop()}
            </span>
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-2)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-border)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-surface-2)')}
          >
            <FiLinkedin size={20} color="var(--color-text-muted)" />
            <span style={{ fontWeight: 600 }}>LinkedIn</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
              in/{SITE.linkedin?.split('/in/')[1]?.replace('/', '')}
            </span>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

export default Contact;;
