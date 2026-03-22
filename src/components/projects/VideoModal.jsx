import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

/**
 * VideoModal — lazy-loads video only when opened.
 * Accepts a `videoUrl` (self-hosted path or YouTube URL).
 * Closes on backdrop click, Escape key, or ✕ button.
 */
function VideoModal({ isOpen, onClose, videoUrl, title }) {
  // Detect if it's a YouTube link
  const isYouTube = videoUrl && (
    videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
  );

  // Build YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
  };

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2001,
              width: 'min(90vw, 900px)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                {'▶ '}{title}
              </span>
              <button
                onClick={onClose}
                aria-label="Close video"
                style={{
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: 'var(--color-text-muted)',
                  padding: '0.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Video area */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              {isYouTube ? (
                <iframe
                  src={getYouTubeEmbedUrl(videoUrl)}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              ) : (
                <video
                  src={videoUrl}
                  controls
                  autoPlay={false}
                  preload="none"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                  }}
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default VideoModal;
