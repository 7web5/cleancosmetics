import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductReveal from './ProductReveal.jsx';
import SlideIntro from './SlideIntro.jsx';
import { INTRO, getIntroTempo, markIntroPlayed } from './introTimeline.js';
import { brand } from '../../content/site.js';
import './hero.css';

/** A whole word that pops into place: a quick snap of scale with a slight overshoot. */
function PopWord({ text, tone, delay }) {
  return (
    <motion.span
      className={`hero__line ${tone}`}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.5, y: '0.15em' }}
      animate={{ opacity: 1, scale: 1, y: '0em' }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 520,
        damping: 18,
        mass: 0.9,
        opacity: { delay, duration: 0.15 },
      }}
    >
      {text}
    </motion.span>
  );
}

export default function Hero() {
  const [tempo] = useState(getIntroTempo);
  useEffect(() => markIntroPlayed(), []);
  const T = Object.fromEntries(Object.entries(INTRO).map(([k, v]) => [k, v * tempo]));

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const productY = useTransform(scrollYProgress, [0, 1], ['0vh', '-12vh']);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 0.84]);
  const typeY = useTransform(scrollYProgress, [0, 1], ['0vh', '-24vh']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const veil = useTransform(scrollYProgress, [0.05, 0.95], [0, 0.94]);

  return (
    <section ref={ref} className="hero" aria-label="Clean Cosmetic — Beauty. Without the mess.">

      <motion.div className="hero__product" style={{ y: productY, scale: productScale }}>
        <ProductReveal delay={T.product} tempo={tempo} />
      </motion.div>

      <motion.div className="hero__type" style={{ y: typeY, opacity: fade }}>
        <h1 className="hero__title" aria-label="Beauty. Without. The mess.">
          <PopWord text="BEAUTY." tone="g-rose" delay={T.beauty} />
          <PopWord text="WITHOUT." tone="g-peach" delay={T.without} />
          <PopWord text="THE MESS." tone="g-berry" delay={T.mess} />
        </h1>
      </motion.div>

      <motion.div className="hero__details" style={{ opacity: fade }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T.details, duration: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="hero__desc">{brand.description}</p>
          <Link to="/project" className="link-arrow hero__cta">
            Discover the innovation <span className="arrow">→</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="hero__scroll-wrap" style={{ opacity: fade }}>
        <motion.button
          type="button"
          className="hero__scroll"
          onClick={() => document.getElementById('mess-free')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: T.details + 0.8, duration: 1 }}
        >
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </motion.button>
      </motion.div>

      <motion.div className="hero__veil" style={{ opacity: veil }} aria-hidden="true" />

      <SlideIntro tempo={tempo} />
    </section>
  );
}
