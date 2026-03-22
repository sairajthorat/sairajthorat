import { motion } from 'framer-motion';

/**
 * Reusable section wrapper.
 * - Handles scroll-id, padding, and fade-up entrance.
 */
function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`section-offset py-24 ${className}`}
    >
      <motion.div
        className="container-main"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default Section;
