import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiFileText, FiShield } from 'react-icons/fi';

function DocumentCard({ document, index }) {
  // Select icon and color based on document type
  let Icon = FiFileText;
  let iconColor = 'var(--color-accent-light)';
  let bgGlow = 'rgba(37, 99, 235, 0.1)';

  if (document.type === 'certificate') {
    Icon = FiAward;
    iconColor = '#f59e0b'; // amber
    bgGlow = 'rgba(245, 158, 11, 0.1)';
  } else if (document.type === 'copyright') {
    Icon = FiShield;
    iconColor = '#22c55e'; // green
    bgGlow = 'rgba(34, 197, 94, 0.1)';
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        y: -4,
        borderColor: 'var(--color-border-hover)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
      }}
    >
      {/* Subtle background glow circle behind the icon */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: bgGlow,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Header: Icon + Date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            color: iconColor,
          }}
        >
          <Icon size={18} />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-faint)' }}>
          {document.date}
        </span>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
          {document.issuer}
        </p>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>
          {document.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '0.25rem' }}>
          {document.description}
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ marginTop: '0.5rem' }}>
        <a
          href={document.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-accent-light)',
            textDecoration: 'none',
            padding: '0.5rem 0',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
        >
          View Document <FiExternalLink size={12} style={{ marginBottom: '1px' }} />
        </a>
      </div>
    </motion.article>
  );
}

export default DocumentCard;
