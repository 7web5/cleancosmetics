import { motion } from 'framer-motion';
import ConcealerProduct from '../product/ConcealerProduct.jsx';
import { product } from '../../content/site.js';

/**
 * The concealer rises out of the colour field, turns to reveal its form,
 * settles on the left and then floats very gently.
 */
export default function ProductReveal({ delay = 1.4, tempo = 1 }) {
  return (
    <div className="pr">
      <motion.div
        className="pr__shadow"
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: delay + 1.1 * tempo, duration: 1.8 * tempo, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <motion.div
        className="pr__body"
        initial={{ y: '80vh', rotateY: -38, rotateZ: -15, opacity: 0 }}
        animate={{ y: '0vh', rotateY: 9, rotateZ: -4, opacity: 1 }}
        transition={{
          delay,
          duration: 3 * tempo,
          ease: [0.16, 1, 0.3, 1],
          opacity: { delay, duration: 0.9 * tempo },
        }}
        style={{ transformPerspective: 1600 }}
      >
        <div className="pr__float" style={{ animationDelay: `${delay + 3 * tempo}s` }}>
          {product.heroPhoto ? (
            <img className="concealer concealer--photo" src={product.heroPhoto} alt={product.heroPhotoAlt} />
          ) : (
            <ConcealerProduct wand />
          )}
          <motion.div
            className="pr__note"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 3.1 * tempo, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="pr__note-dot" />
            <span className="pr__note-line" />
            <span className="pr__note-text">{product.attachmentLabel}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
