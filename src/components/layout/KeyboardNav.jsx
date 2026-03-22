import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { key: '1', id: 'top', label: 'Top' },
  { key: '2', id: 'about', label: 'About' },
  { key: '3', id: 'projects', label: 'Projects' },
  { key: '4', id: 'dsa', label: 'Problem Solving' },
  { key: '5', id: 'experience', label: 'Experience' },
  { key: '6', id: 'research', label: 'Research' },
  { key: '7', id: 'skills', label: 'Skills' },
  { key: '8', id: 'contact', label: 'Contact' },
];

function KeyboardNav() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const targetSection = sections.find(s => s.key === e.key);
      if (targetSection) {
        e.preventDefault();
        if (targetSection.id === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetSection.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            // Flash a minimal focus highlight
            el.style.transition = 'background-color 0.3s';
            el.style.backgroundColor = 'var(--color-surface-2)';
            setTimeout(() => {
              el.style.backgroundColor = 'transparent';
            }, 600);
          }
        }
      }
      
      // Toggle help menu with '?'
      if (e.key === '?') {
        setShowTooltip(prev => !prev);
      }
      // Close on Escape
      if (e.key === 'Escape') {
        setShowTooltip(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
        }}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.9)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                {'// keyboard_shortcuts'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {sections.map(s => (
                  <li key={s.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>{s.label}</span>
                    <kbd
                      style={{
                        backgroundColor: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '4px',
                        padding: '0.1rem 0.4rem',
                        fontSize: '0.7rem',
                        color: 'var(--color-accent-light)'
                      }}
                    >
                      {s.key}
                    </kbd>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger button */}
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            transition: 'border-color 0.2s, color 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
          aria-label="Keyboard Shortcuts Menu"
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--color-accent)';
            e.currentTarget.style.color = 'var(--color-text)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.color = 'var(--color-text-muted)';
          }}
        >
          ?
        </button>
      </div>
    </>
  );
}

export default KeyboardNav;
