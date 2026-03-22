import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SITE } from '../../utils/constants';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container-main" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Left: name + built with */}
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)' }}>
            © {year}{' '}
            <span style={{ color: 'var(--color-text-muted)' }}>{SITE.name}</span>
            {' · '}
            <span>Built with React + Tailwind</span>
          </p>

          {/* Right: social icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost"
              style={{ padding: '0.4rem' }}
            >
              <FiGithub size={16} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost"
              style={{ padding: '0.4rem' }}
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="btn-ghost"
              style={{ padding: '0.4rem' }}
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        {/* View Source easter egg */}
        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
            onMouseEnter={e => (e.target.style.color = 'var(--color-accent-light)')}
            onMouseLeave={e => (e.target.style.color = 'var(--color-text-faint)')}
          >
            {'// view source'}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
