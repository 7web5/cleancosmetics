import { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * Illustrated liquid concealer with the Clean Cosmetic attachment installed.
 * Style: slim flat tube of clear plastic showing the beige formula, a tall
 * matte-black cap, and (optionally) the doe-foot applicator wand beside it.
 *
 * PLACEHOLDER NOTICE: the attachment (parts A–C, the collar at the cap / tube
 * junction) is a stand-in until the real prototype is supplied. Replace the
 * three Attachment* parts below — or set `product.heroPhoto` in
 * src/content/site.js to use a photograph instead.
 *
 * Coordinate system: viewBox 0 0 320 900, product centre line x = 160.
 *   Cap          y 30–330   (x 100–220)
 *   Attachment   y 300–392  (parts A, B, C)
 *   Tube         y 386–880  (x 100–220)
 *   Wand         x 252–292  (optional)
 */

export const VIEWBOX = '0 0 320 900';

export function useProductIds() {
  const raw = useId().replace(/:/g, '');
  return (name) => `cc${raw}-${name}`;
}

export function ProductDefs({ u }) {
  return (
    <defs>
      {/* Matte black cap: soft, broad sheen rather than a sharp gloss */}
      <linearGradient id={u('cap')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#0c0c0d" />
        <stop offset="0.08" stopColor="#202022" />
        <stop offset="0.24" stopColor="#3b3b3f" />
        <stop offset="0.36" stopColor="#2a2a2d" />
        <stop offset="0.7" stopColor="#1c1c1e" />
        <stop offset="0.92" stopColor="#2b2b2e" />
        <stop offset="1" stopColor="#0a0a0b" />
      </linearGradient>
      <linearGradient id={u('capShade')} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
        <stop offset="0.06" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.92" stopColor="#000" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.35" />
      </linearGradient>

      {/* Attachment — warm satin champagne metal */}
      <linearGradient id={u('att')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#7d6155" />
        <stop offset="0.1" stopColor="#b59a87" />
        <stop offset="0.26" stopColor="#efe0d2" />
        <stop offset="0.31" stopColor="#fffaf4" />
        <stop offset="0.38" stopColor="#e6d2c0" />
        <stop offset="0.65" stopColor="#c9ad97" />
        <stop offset="0.88" stopColor="#a1846f" />
        <stop offset="1" stopColor="#6e554a" />
      </linearGradient>
      <linearGradient id={u('attDeep')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#6b5247" />
        <stop offset="0.28" stopColor="#d6bfad" />
        <stop offset="0.36" stopColor="#ecdccd" />
        <stop offset="0.7" stopColor="#b0927d" />
        <stop offset="1" stopColor="#5f483f" />
      </linearGradient>
      <linearGradient id={u('attShade')} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
        <stop offset="0.25" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.75" stopColor="#3b2c26" stopOpacity="0" />
        <stop offset="1" stopColor="#3b2c26" stopOpacity="0.3" />
      </linearGradient>

      {/* Clear tube walls */}
      <linearGradient id={u('tube')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#d9c7bc" />
        <stop offset="0.06" stopColor="#fbf6f2" />
        <stop offset="0.5" stopColor="#f4ebe4" />
        <stop offset="0.94" stopColor="#fbf6f2" />
        <stop offset="1" stopColor="#cdb9ad" />
      </linearGradient>
      {/* Beige formula inside the flat tube */}
      <linearGradient id={u('liquid')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#d2a888" />
        <stop offset="0.12" stopColor="#e9c7aa" />
        <stop offset="0.3" stopColor="#f6dcc5" />
        <stop offset="0.55" stopColor="#f3d6bd" />
        <stop offset="0.85" stopColor="#e6c0a2" />
        <stop offset="1" stopColor="#cfa385" />
      </linearGradient>
      <linearGradient id={u('liquidDepth')} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#8a5a3f" stopOpacity="0.18" />
        <stop offset="0.08" stopColor="#fff" stopOpacity="0.06" />
        <stop offset="0.85" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#8a5a3f" stopOpacity="0.14" />
      </linearGradient>
      <linearGradient id={u('streak')} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.1" stopColor="#fff" stopOpacity="0.85" />
        <stop offset="0.9" stopColor="#fff" stopOpacity="0.65" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>

      {/* Applicator wand */}
      <linearGradient id={u('wandClear')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#d8cdc6" />
        <stop offset="0.25" stopColor="#ffffff" />
        <stop offset="0.6" stopColor="#efe8e3" />
        <stop offset="1" stopColor="#c9bcb4" />
      </linearGradient>
      <linearGradient id={u('doe')} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#d9b597" />
        <stop offset="0.35" stopColor="#f6dfca" />
        <stop offset="1" stopColor="#d3a98a" />
      </linearGradient>

      <filter id={u('soft')} x="-30%" y="-60%" width="160%" height="220%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <filter id={u('softer')} x="-50%" y="-10%" width="200%" height="120%">
        <feGaussianBlur stdDeviation="1.2" />
      </filter>
    </defs>
  );
}

export function CapPart({ u }) {
  const d = 'M100 330 L100 44 Q100 30 114 30 L206 30 Q220 30 220 44 L220 330 Z';
  return (
    <g>
      <path d={d} fill={`url(#${u('cap')})`} />
      <path d={d} fill={`url(#${u('capShade')})`} />
      {/* broad matte sheen + faint edge light */}
      <rect x="118" y="40" width="22" height="280" rx="11" fill="#fff" opacity="0.06" filter={`url(#${u('softer')})`} />
      <rect x="126" y="44" width="4" height="272" rx="2" fill="#fff" opacity="0.12" />
      <rect x="213" y="44" width="2" height="276" rx="1" fill="#fff" opacity="0.1" />
      <path d="M106 33 Q160 29 214 33" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.2" fill="none" />
    </g>
  );
}

/** Attachment part A — upper grip around the cap base (placeholder geometry). */
export function AttachmentUpper({ u }) {
  return (
    <g>
      <rect x="96" y="300" width="128" height="22" rx="4" fill={`url(#${u('att')})`} />
      <rect x="96" y="300" width="128" height="22" rx="4" fill={`url(#${u('attShade')})`} />
      <line x1="100" y1="301.5" x2="220" y2="301.5" stroke="#fff" strokeOpacity="0.8" strokeWidth="1" />
    </g>
  );
}

/** Attachment part B — main collar (placeholder geometry). */
export function AttachmentBody({ u }) {
  return (
    <g>
      <rect x="92" y="320" width="136" height="52" rx="5" fill={`url(#${u('att')})`} />
      <rect x="92" y="320" width="136" height="52" rx="5" fill={`url(#${u('attShade')})`} />
      {[332, 339].map((y) => (
        <g key={y}>
          <line x1="94" y1={y} x2="226" y2={y} stroke="#5a463d" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="94" y1={y + 1.3} x2="226" y2={y + 1.3} stroke="#fff" strokeOpacity="0.55" strokeWidth="0.7" />
        </g>
      ))}
      <circle cx="160" cy="357" r="9" fill="none" stroke="#6f574b" strokeOpacity="0.45" strokeWidth="0.9" />
      <text x="160" y="360.3" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="8" fill="#6f574b" opacity="0.7">
        CC
      </text>
    </g>
  );
}

/** Attachment part C — lower lip gripping the tube (placeholder geometry). */
export function AttachmentSkirt({ u }) {
  return (
    <g>
      <rect x="98" y="370" width="124" height="22" rx="4" fill={`url(#${u('attDeep')})`} />
      <rect x="98" y="370" width="124" height="22" rx="4" fill={`url(#${u('attShade')})`} opacity="0.8" />
      <line x1="100" y1="391" x2="220" y2="391" stroke="#3b2c26" strokeOpacity="0.3" strokeWidth="1" />
    </g>
  );
}

export function BottlePart({ u, label = true }) {
  const outer = 'M100 386 L220 386 L220 866 Q220 880 206 880 L114 880 Q100 880 100 866 Z';
  return (
    <g>
      <path d={outer} fill={`url(#${u('tube')})`} />
      {/* formula seen through the clear walls */}
      <rect x="105" y="390" width="110" height="476" rx="8" fill={`url(#${u('liquid')})`} />
      <rect x="105" y="390" width="110" height="476" rx="8" fill={`url(#${u('liquidDepth')})`} />
      {/* clear end of the tube */}
      <rect x="103" y="858" width="114" height="20" rx="8" fill="#fbf4ef" opacity="0.7" />
      {/* reflections */}
      <rect x="111" y="398" width="7" height="456" rx="3.5" fill={`url(#${u('streak')})`} opacity="0.85" filter={`url(#${u('softer')})`} />
      <rect x="122" y="404" width="2.5" height="440" rx="1.25" fill={`url(#${u('streak')})`} opacity="0.4" />
      <rect x="209" y="402" width="3" height="450" rx="1.5" fill={`url(#${u('streak')})`} opacity="0.45" />
      <path d={outer} fill="none" stroke="#8a6a60" strokeOpacity="0.28" strokeWidth="1" />
      {label && (
        <text
          x="0"
          y="0"
          transform="translate(171 846) rotate(-90)"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="2.5"
          fill="#231c1d"
        >
          CLEAN COSMETIC
        </text>
      )}
    </g>
  );
}

/** Doe-foot applicator, shown standing beside the product. */
export function WandPart({ u }) {
  return (
    <g transform="rotate(3 272 880)">
      {/* clear handle that sits in the tube */}
      <path d="M260 880 L260 700 Q260 690 268 688 L276 688 Q284 690 284 700 L284 880 Z" fill={`url(#${u('wandClear')})`} />
      <rect x="264" y="700" width="3" height="170" rx="1.5" fill="#fff" opacity="0.8" />
      {/* stem */}
      <rect x="268.5" y="478" width="7" height="214" rx="3.5" fill={`url(#${u('wandClear')})`} />
      {/* doe-foot tip, loaded with product */}
      <path d="M262 482 L262 436 Q262 414 272 412 Q282 414 282 436 L282 482 Q272 488 262 482 Z" fill={`url(#${u('doe')})`} />
      <path d="M265 470 L265 438 Q265 422 270 418" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M260 880 L260 700 Q260 690 268 688 L276 688 Q284 690 284 700 L284 880 Z" fill="none" stroke="#8a6a60" strokeOpacity="0.25" strokeWidth="0.8" />
    </g>
  );
}

/** Contact shadows that visually tie the attachment to cap and tube. */
function JunctionShadows({ u }) {
  return (
    <g pointerEvents="none">
      <rect x="102" y="392" width="116" height="10" fill="#3b2c26" opacity="0.28" filter={`url(#${u('soft')})`} />
      <rect x="102" y="292" width="116" height="8" fill="#000" opacity="0.35" filter={`url(#${u('soft')})`} />
    </g>
  );
}

const SPRING = { type: 'spring', stiffness: 70, damping: 16 };

/**
 * state: 'on'        — attachment installed (default)
 *        'off'       — the original cosmetic, no attachment
 *        'attaching' — cap lifted, attachment approaching the connection point
 * wand:  show the applicator standing beside the product
 */
export default function ConcealerProduct({
  state = 'on',
  className = '',
  title = 'Liquid concealer with the Clean Cosmetic attachment',
  guide = false,
  wand = false,
}) {
  const u = useProductIds();
  const on = state === 'on';
  const off = state === 'off';
  const capY = off ? 56 : state === 'attaching' ? -70 : 0;
  const attY = state === 'attaching' ? -26 : 0;

  return (
    <svg viewBox={VIEWBOX} className={`concealer ${className}`} role="img" aria-label={title} style={{ overflow: 'visible' }}>
      <ProductDefs u={u} />
      {wand && <WandPart u={u} />}
      <BottlePart u={u} />
      <motion.g initial={false} animate={{ y: capY }} transition={SPRING}>
        <CapPart u={u} />
      </motion.g>
      {on && <JunctionShadows u={u} />}
      <motion.g initial={false} animate={{ opacity: off ? 0 : 1, y: attY, x: off ? 140 : 0 }} transition={SPRING}>
        <AttachmentSkirt u={u} />
        <AttachmentBody u={u} />
        <AttachmentUpper u={u} />
        {guide && (
          <rect x="84" y="290" width="152" height="112" rx="6" fill="none" stroke="#c9828b" strokeWidth="1.4" strokeDasharray="5 5" />
        )}
      </motion.g>
    </svg>
  );
}
