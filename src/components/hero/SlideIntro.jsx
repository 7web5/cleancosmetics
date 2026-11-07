import { useState } from 'react';
import { motion } from 'framer-motion';

/*
 * Opening wipe: a stack of full-screen colour bands, darkest to lightest,
 * sweeps up across the screen one after another and reveals the hero
 * underneath — a layered "curtain" slide.
 */
const BANDS = ['#9C5A67', '#C9828B', '#DDA6A8', '#EBAA82', '#F4C5A8', '#F1D6D5', '#FFF9F3'];
const EASE = [0.76, 0, 0.24, 1];

export default function SlideIntro({ tempo = 1 }) {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div className="slide-intro" aria-hidden="true">
      {BANDS.map((color, i) => (
        <motion.span
          key={color}
          className="slide-intro__band"
          style={{ background: color, zIndex: i }}
          initial={{ y: '101%' }}
          animate={{ y: '-101%' }}
          transition={{ delay: (0.15 + i * 0.075) * tempo, duration: 1.2 * tempo, ease: EASE }}
          onAnimationComplete={i === BANDS.length - 1 ? () => setDone(true) : undefined}
        />
      ))}
    </div>
  );
}
