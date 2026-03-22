import { motion } from 'framer-motion';

function TimelineItem({ item, index, isLast }) {
  // Determine accent color by type
  let dotColor = 'var(--color-text-muted)';
  let glowColor = 'transparent';

  if (item.type === 'current') {
    dotColor = '#22c55e'; // green
    glowColor = 'rgba(34, 197, 94, 0.4)';
  } else if (item.type === 'project') {
    dotColor = '#3b82f6'; // blue
  } else if (item.type === 'academic') {
    dotColor = '#f59e0b'; // amber
  }

  return (
    <div style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
      
      {/* ── Vertical Line & Dot ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: index * 0.1, type: 'spring' }}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            boxShadow: `0 0 10px ${glowColor}`,
            border: '2px solid var(--color-bg)',
            zIndex: 2,
            marginTop: '0.4rem',
          }}
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              width: '2px',
              flex: 1,
              backgroundColor: 'var(--color-border)',
              marginTop: '-4px', // overlap slightly with dot border
              marginBottom: '-0.4rem', // connect to next dot
            }}
          />
        )}
      </div>

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: 'easeOut' }}
        style={{ paddingBottom: isLast ? '0' : '2.5rem', flex: 1 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-faint)',
            display: 'block',
            marginBottom: '0.3rem',
          }}
        >
          {item.date}
        </span>
        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--color-text)',
            lineHeight: 1.3,
            marginBottom: '0.2rem',
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: dotColor,
            marginBottom: '0.75rem',
          }}
        >
          {item.organization}
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default TimelineItem;
