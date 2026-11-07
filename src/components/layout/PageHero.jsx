import { motion } from 'framer-motion';
import SplitReveal from '../type/SplitReveal.jsx';
import SoftBlobs from '../ui/SoftBlobs.jsx';

/**
 * Editorial opener used by every inner page.
 * `lines` is an array of { text, tone } where tone picks the gradient.
 */
export default function PageHero({ index, label, lines, intro, blobs = 'a', children }) {
  let delay = 0.25;
  return (
    <header className="phero">
      <SoftBlobs variant={blobs} />
      <motion.p
        className="eyebrow phero__eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        <span>{index}</span>
        <span className="phero__rule" />
        <span>{label}</span>
      </motion.p>
      <h1 className="phero__title" aria-label={lines.map((l) => l.text).join(' ')}>
        {lines.map((l, i) => {
          const d = delay;
          delay += l.text.length * 0.035 + 0.15;
          return (
            <SplitReveal
              key={i}
              ariaHidden
              trigger="mount"
              text={l.text}
              delay={d}
              stagger={0.035}
              className={`phero__line phero__line--${l.style || 'heavy'}`}
              letterClassName={l.tone ? `g-${l.tone}` : ''}
            />
          );
        })}
      </h1>
      {intro && (
        <motion.p
          className="lede phero__intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {intro}
        </motion.p>
      )}
      {children}
    </header>
  );
}
