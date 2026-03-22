import { useState, useEffect } from 'react';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, NAV_LINKS } from '../../utils/constants';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Scroll: track scrolled state + active section ──────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close mobile menu on resize ────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Lock body scroll when menu open ────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '72px',
          transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div
          className="container-main"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo / Name */}
          <a
            href="#"
            onClick={e => handleNavClick(e, '#hero')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-text)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: 'var(--color-accent-light)' }}>{'>'}</span>
            {' sairaj_thorat'}
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--color-accent-light)' : 'var(--color-text-muted)',
                    textDecoration: 'none',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '6px',
                    transition: 'color 0.2s ease, background-color 0.2s ease',
                    backgroundColor: isActive ? 'var(--color-accent-dim)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text)';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text-muted)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Divider */}
            <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--color-border)', margin: '0 0.5rem' }} />

            {/* GitHub icon */}
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost"
              style={{ padding: '0.4rem 0.5rem', color: 'var(--color-text-muted)' }}
            >
              <FiGithub size={17} />
            </a>

            {/* Resume */}
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: '0.78rem', padding: '0.4rem 0.9rem', marginLeft: '0.25rem' }}
            >
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              padding: '0.4rem',
              display: 'none',
            }}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 998,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '280px',
                zIndex: 999,
                backgroundColor: 'var(--color-surface)',
                borderLeft: '1px solid var(--color-border)',
                padding: '5rem 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-text)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {'> '}{link.label}
                </a>
              ))}

              <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '1rem', paddingTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  <FiGithub size={16} /> GitHub
                </a>
                <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive styles for Navbar (injected via style tag) */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
