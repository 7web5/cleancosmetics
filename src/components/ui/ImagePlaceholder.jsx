import { motion } from 'framer-motion';

const TONES = {
  blush: 'linear-gradient(150deg, #f8e6e3 0%, #f1d6d5 45%, #e8c0c0 100%)',
  peach: 'linear-gradient(150deg, #fbe7da 0%, #f4c5a8 60%, #ebaa82 120%)',
  beige: 'linear-gradient(150deg, #faf2ea 0%, #f0e3d7 55%, #e3cfc0 100%)',
  rose: 'linear-gradient(150deg, #f1d6d5 0%, #dda6a8 70%, #c9828b 130%)',
};

/**
 * Photograph slot. Shows the image when `src` is set, otherwise a soft,
 * art-directed placeholder labelled with what belongs there.
 */
export default function ImagePlaceholder({ src, alt = '', label = 'Image', ratio = '4 / 5', tone = 'blush', className = '', parallax = true }) {
  return (
    <motion.figure
      className={`imgph ${className}`}
      style={{ aspectRatio: ratio }}
      initial={parallax ? { clipPath: 'inset(12% 0 0 0)', opacity: 0 } : false}
      whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="imgph__fill" style={{ background: TONES[tone] || TONES.blush }} role="img" aria-label={`Placeholder: ${label}`}>
          <span className="imgph__orb" />
          <span className="imgph__label">
            <span className="imgph__plus">+</span>
            {label}
          </span>
        </div>
      )}
    </motion.figure>
  );
}
