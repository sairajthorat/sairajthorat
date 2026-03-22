import Section from '../layout/Section';
import TimelineItem from './TimelineItem';
import { milestones } from '../../data/experience';

function Experience() {
  if (!milestones || milestones.length === 0) return null;

  return (
    <Section id="experience">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> journey_&_milestones'}</p>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
            lineHeight: 1.2,
          }}
        >
          My{' '}
          <span style={{ color: 'var(--color-accent-light)' }}>Path So Far</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-faint)',
            marginTop: '0.5rem',
            maxWidth: '300px',
            lineHeight: 1.6,
          }}
        >
          {'// education · major projects · achievements'}
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          maxWidth: '800px',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: 'clamp(1.5rem, 5vw, 3rem)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {milestones.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
