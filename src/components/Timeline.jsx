import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ImagePlaceholder from './ui/ImagePlaceholder.jsx';
import { timeline } from '../content/site.js';

/**
 * Vertical, scroll-driven timeline. The rose line fills as you scroll; each
 * milestone reveals as it enters view and becomes "active" near the centre.
 * Clicking a stage in the index scrolls to it.
 */
export default function Timeline() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const go = (i) => document.getElementById(`stage-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div className="tl">
      <nav className="tl__index" aria-label="Timeline stages">
        {timeline.map((m, i) => (
          <button key={m.stage} type="button" className={`tl__chip ${active === i ? 'is-active' : ''}`} onClick={() => go(i)}>
            <span>{String(i + 1).padStart(2, '0')}</span> {m.title}
          </button>
        ))}
      </nav>

      <ol ref={ref} className="tl__list">
        <span className="tl__track" aria-hidden="true">
          <motion.span className="tl__fill" style={{ scaleY: fill }} />
        </span>
        {timeline.map((m, i) => (
          <motion.li
            key={m.stage}
            id={`stage-${i}`}
            className={`tl__item ${i % 2 ? 'tl__item--right' : ''} ${active === i ? 'is-active' : ''}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onViewportEnter={() => setActive(i)}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="tl__dot" aria-hidden="true" />
            <div className="tl__text">
              <p className="tl__meta">
                <span>{m.stage}</span>
                <span className="tl__date">{m.date || 'Date to be added'}</span>
              </p>
              <h3 className="tl__title">{m.title}</h3>
              {m.description ? <p className="tl__desc">{m.description}</p> : <p className="tl__desc ph">{m.prompt}</p>}
            </div>
            <div className={`tl__media tl__media--${m.images.length}`}>
              {m.images.map((src, j) => (
                <ImagePlaceholder
                  key={j}
                  src={src}
                  label={j === 0 ? 'Photograph or sketch' : 'Prototype image'}
                  ratio={m.images.length > 1 ? (j === 0 ? '4 / 5' : '1 / 1') : '5 / 4'}
                  tone={['blush', 'peach', 'beige', 'rose'][(i + j) % 4]}
                />
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
