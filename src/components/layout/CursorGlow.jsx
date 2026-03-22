import { useEffect, useState } from 'react';

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to viewport
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Expand glow over clickable items
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use CSS custom properties to avoid React re-render lag on every pixel moved
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50, // above background, below content
        background: `radial-gradient(
          ${isHovering ? '800px' : '600px'} circle at ${position.x}px ${position.y}px,
          rgba(37, 99, 235, 0.05),
          transparent 40%
        )`,
        transition: 'background 0.2s ease',
      }}
    />
  );
}

export default CursorGlow;
