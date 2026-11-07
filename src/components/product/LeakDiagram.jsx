import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Simplified cross-section of a cosmetic neck and cap, showing where liquid
 * can escape and the zone the Clean Cosmetic attachment is designed to address.
 * Schematic only — the real sealing mechanism is to be documented.
 */
export default function LeakDiagram() {
  const [withAttachment, setWithAttachment] = useState(false);

  return (
    <figure className="leak">
      <div className="leak__toggle" role="group" aria-label="Diagram view">
        <button type="button" aria-pressed={!withAttachment} onClick={() => setWithAttachment(false)}>
          Without attachment
        </button>
        <button type="button" aria-pressed={withAttachment} onClick={() => setWithAttachment(true)}>
          With attachment
        </button>
      </div>

      <svg viewBox="0 0 520 520" className="leak__svg" role="img" aria-label="Cross-section of a cosmetic neck and cap showing the junction where leaks can occur">
        <defs>
          <linearGradient id="lk-liquid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f5d4bb" />
            <stop offset="1" stopColor="#e2b394" />
          </linearGradient>
          <linearGradient id="lk-cap" x1="0" x2="1">
            <stop offset="0" stopColor="#b56f7b" />
            <stop offset="0.35" stopColor="#e3b0b1" />
            <stop offset="1" stopColor="#a1606c" />
          </linearGradient>
          <linearGradient id="lk-att" x1="0" x2="1">
            <stop offset="0" stopColor="#bfa38f" />
            <stop offset="0.4" stopColor="#fff3e8" />
            <stop offset="1" stopColor="#b4977f" />
          </linearGradient>
          <pattern id="lk-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#94766c" strokeOpacity="0.25" strokeWidth="2" />
          </pattern>
        </defs>

        {/* container walls (section) */}
        <path d="M150 520 L150 300 L190 300 L190 230 L210 230 L210 520 Z" fill="url(#lk-hatch)" stroke="#94766c" strokeWidth="1.2" />
        <path d="M370 520 L370 300 L330 300 L330 230 L310 230 L310 520 Z" fill="url(#lk-hatch)" stroke="#94766c" strokeWidth="1.2" />
        {/* liquid */}
        <path d="M210 520 L210 330 Q260 322 310 330 L310 520 Z" fill="url(#lk-liquid)" />
        {/* threads */}
        {[246, 268, 290].map((y) => (
          <g key={y}>
            <path d={`M190 ${y} l-10 6 l10 6`} fill="#d9c3b7" stroke="#94766c" strokeWidth="1" />
            <path d={`M330 ${y} l10 6 l-10 6`} fill="#d9c3b7" stroke="#94766c" strokeWidth="1" />
          </g>
        ))}
        {/* cap (section) */}
        <path
          d="M160 70 L360 70 L360 300 L344 300 L344 110 L176 110 L176 300 L160 300 Z"
          fill="url(#lk-cap)"
          stroke="#7f4b56"
          strokeWidth="1.2"
        />
        <rect x="246" y="110" width="28" height="200" rx="6" fill="#c9828b" opacity="0.65" />

        {/* junction highlight */}
        <motion.ellipse
          cx="182"
          cy="300"
          rx="44"
          ry="30"
          fill="none"
          stroke="#c9828b"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{ originX: '182px', originY: '300px' }}
        />

        {/* attachment zone */}
        <motion.g initial={false} animate={{ opacity: withAttachment ? 1 : 0, x: withAttachment ? 0 : -30 }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
          <rect x="132" y="278" width="34" height="56" rx="6" fill="url(#lk-att)" stroke="#94766c" strokeWidth="1" />
          <rect x="354" y="278" width="34" height="56" rx="6" fill="url(#lk-att)" stroke="#94766c" strokeWidth="1" />
          <text x="120" y="366" textAnchor="middle" className="leak__tag">attachment zone</text>
        </motion.g>

        {/* possible leak path */}
        <motion.path
          d="M232 332 C 214 318 200 312 196 296 C 192 280 176 262 172 238 C 168 214 150 206 120 210"
          fill="none"
          stroke="#c9828b"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="2 7"
          initial={false}
          animate={{ pathLength: withAttachment ? 0.32 : 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        />
        {!withAttachment && (
          <motion.circle
            r="5"
            cx="120"
            cy="210"
            fill="#c9828b"
            initial={{ opacity: 0 }}
            animate={{ cy: [210, 236, 270], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeIn' }}
          />
        )}

        <text x="40" y="196" className="leak__label">
          possible leak path
        </text>
        <text x="380" y="60" className="leak__label">
          cap
        </text>
        <text x="390" y="430" className="leak__label">
          container
        </text>
        <text x="236" y="470" className="leak__label">
          liquid
        </text>
      </svg>
      <figcaption className="leak__cap">
        Schematic only. Liquid that reaches the junction between cap and container can travel along the threads and
        escape. The attachment is designed to work at this connection point.
        <span className="ph"> Replace with the confirmed sealing mechanism and any test results.</span>
      </figcaption>
    </figure>
  );
}
