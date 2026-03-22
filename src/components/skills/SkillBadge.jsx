import { motion } from 'framer-motion';

/**
 * Individual skill badge.
 * Hover: border becomes accent, text lightens.
 */
function SkillBadge({ name, index }) {
  return (
    <motion.span
      className="tag"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      style={{ cursor: 'default' }}
    >
      {name}
    </motion.span>
  );
}

export default SkillBadge;
