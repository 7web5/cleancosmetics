import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Editorial "typewriter": each letter rises from slightly below, fades in,
 * grows to full scale and comes into focus — staggered, no cursor.
 *
 * trigger: 'mount'  — plays immediately (after `delay`)
 *          'inView' — plays once the text scrolls into view
 */
export default function SplitReveal({
  text,
  as = 'span',
  className = '',
  letterClassName = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.95,
  trigger = 'inView',
  ariaHidden = false,
}) {
  const Tag = motion[as] || motion.span;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const show = trigger === 'mount' || inView;

  const words = text.split(' ');
  let index = 0;

  const a11y = ariaHidden ? { 'aria-hidden': true } : { 'aria-label': text };

  return (
    <Tag ref={ref} className={className} {...a11y}>
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="sr-word" aria-hidden="true">
            {Array.from(word).map((ch) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className={`sr-char ${letterClassName}`}
                  initial={{ opacity: 0, y: '0.38em', scale: 0.88, filter: 'blur(12px)' }}
                  animate={show ? { opacity: 1, y: '0em', scale: 1, filter: 'blur(0px)' } : undefined}
                  transition={{ delay: delay + i * stagger, duration, ease: [0.2, 0.75, 0.15, 1] }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
          {wi < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  );
}
