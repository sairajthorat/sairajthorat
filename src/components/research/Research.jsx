import Section from '../layout/Section';
import DocumentCard from './DocumentCard';
import { documents } from '../../data/documents';

function Research() {
  if (!documents || documents.length === 0) return null;

  return (
    <Section id="research">
      {/* Section label */}
      <p className="label-mono" style={{ marginBottom: '0.75rem' }}>{'> publications_&_documents'}</p>

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
          Research &{' '}
          <span style={{ color: 'var(--color-accent-light)' }}>Credentials</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-faint)',
            marginTop: '0.5rem',
            maxWidth: '280px',
            lineHeight: 1.6,
          }}
        >
          {'// academic papers · official copyrights · certifications'}
        </p>
      </div>

      {/* Grid of documents */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {documents.map((doc, i) => (
          <DocumentCard key={doc.id} document={doc} index={i} />
        ))}
      </div>
    </Section>
  );
}

export default Research;
