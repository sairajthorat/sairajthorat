import { useState, useEffect, useRef } from 'react';

/**
 * Lightweight typing effect component.
 * Cycles through an array of `phrases` with a blinking cursor.
 * No external dependency — pure setTimeout / requestAnimationFrame.
 */
function TypingEffect({ phrases = [], typingSpeed = 55, deletingSpeed = 30, pauseDuration = 2200 }) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef(null);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(v => !v);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing logic
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const tick = () => {
      if (!isDeleting) {
        // Still typing
        if (displayed.length < currentPhrase.length) {
          setDisplayed(currentPhrase.slice(0, displayed.length + 1));
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayed.length > 0) {
          setDisplayed(prev => prev.slice(0, -1));
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setIsDeleting(false);
          setPhraseIndex(i => i + 1);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
        color: 'var(--color-text-muted)',
        display: 'inline-block',
        minHeight: '1.4em',
      }}
    >
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          backgroundColor: 'var(--color-accent-light)',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
        }}
        aria-hidden="true"
      />
    </span>
  );
}

export default TypingEffect;
