import { motion } from 'framer-motion';

/** Fades and lifts its children into place when scrolled into view. */
export default function Reveal({ children, delay = 0, y = 40, as = 'div', className = '', amount = 0.25, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ delay, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
