import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Section from '../layout/Section';
import { dsaStats, highlightedProblems } from '../../data/dsa';

// Decorative algorithm snippet (Binary Search)
const algoSnippet = `
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
`.trim();

function DSASection() {
  return (
    <Section id="dsa" className="relative">
      {/* ── Decorative background snippet ─────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '4rem',
          right: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--color-text-faint)',
          whiteSpace: 'pre',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {algoSnippet}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> problem_solving'}</p>

        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              lineHeight: 1.2,
            }}
          >
            Data Structures &{' '}
            <span style={{ color: 'var(--color-accent-light)' }}>Algorithms</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-faint)',
              marginTop: '0.5rem',
            }}
          >
            {'// strong foundation · optimized logic'}
          </p>
        </div>

        {/* ── Top row: Stats ────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {/* Box 1: Count */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-accent-light)', lineHeight: 1.2 }}>
              {dsaStats.problemsSolved}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Problem Solving Status</span>
          </motion.div>

          {/* Box 2: Platforms */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Platforms</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {dsaStats.platforms.map(p => (
                <span key={p} className="tag" style={{ borderStyle: 'dashed' }}>
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Box 3: GitHub Repo */}
          <motion.a
            href={dsaStats.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="card-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textDecoration: 'none',
              backgroundColor: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <FiGithub size={20} color="var(--color-text-muted)" />
              <FiExternalLink size={14} color="var(--color-text-faint)" />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)' }}>
              View Solutions Repo
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
              Curated solutions with explanations
            </span>
          </motion.a>
        </div>

        {/* ── Bottom row: Problem Showcase Table ────────────────────── */}
        {highlightedProblems && highlightedProblems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              overflowX: 'auto',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-2)' }}>
                  <th style={{ padding: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)', fontWeight: 500 }}>Problem</th>
                  <th style={{ padding: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)', fontWeight: 500 }}>Difficulty</th>
                  <th style={{ padding: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)', fontWeight: 500 }}>Approach</th>
                  <th style={{ padding: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-faint)', fontWeight: 500, textAlign: 'center' }}>Link</th>
                </tr>
              </thead>
              <tbody>
                {highlightedProblems.map((p, i) => {
                  let badgeColor = 'var(--color-text-muted)';
                  if (p.difficulty === 'Easy') badgeColor = '#22c55e'; // green
                  if (p.difficulty === 'Medium') badgeColor = '#f59e0b'; // amber
                  if (p.difficulty === 'Hard') badgeColor = '#ef4444'; // red
                  if (p.difficulty === 'Complex') badgeColor = '#a855f7'; // purple

                  return (
                    <tr
                      key={p.title}
                      style={{
                        borderBottom: i !== highlightedProblems.length - 1 ? '1px solid var(--color-border)' : 'none',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-surface-2)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <td style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text)' }}>
                        {p.title}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: badgeColor, backgroundColor: `${badgeColor}15`, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          {p.difficulty}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                        {p.approach}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${p.title} problem`}
                          style={{
                            display: 'inline-flex',
                            padding: '0.4rem',
                            color: 'var(--color-text-muted)',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                        >
                          <FiExternalLink size={15} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </Section>
  );
}

export default DSASection;
