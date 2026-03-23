import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Optional: Auto-play functionality that pauses on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '280px',
        position: 'relative',
        backgroundColor: 'var(--color-surface-2)',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            padding: '1rem', // Add a little padding so it doesn't touch the very edges
          }}
        />
      </AnimatePresence>

      {/* Navigation Arrows (fade in on hover) */}
      <AnimatePresence>
        {isHovered && images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={handlePrev}
              aria-label="Previous image"
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
            >
              <FiChevronLeft size={20} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={handleNext}
              aria-label="Next image"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            zIndex: 10,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === currentIndex ? '24px' : '6px',
                height: '6px',
                borderRadius: '4px',
                background: i === currentIndex ? 'var(--color-accent)' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
