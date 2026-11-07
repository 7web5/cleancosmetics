import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  AttachmentBody,
  AttachmentSkirt,
  AttachmentUpper,
  BottlePart,
  CapPart,
  ProductDefs,
  useProductIds,
} from './product/ConcealerProduct.jsx';
import { components } from '../content/site.js';

/*
 * Exploded-view diagram. Geometry comes from the shared product illustration,
 * so replacing the placeholder attachment parts there updates this page too.
 *   centreY  — vertical centre of each part in the assembled product
 *   right    — right edge of the part (where its leader line starts)
 *   explode  — vertical offset in the exploded view
 */
const GEOMETRY = {
  cap: { Part: CapPart, centreY: 180, right: 220, explode: -175, labelExploded: -10, labelAssembled: 120 },
  upper: { Part: AttachmentUpper, centreY: 311, right: 224, explode: -112, labelExploded: 170, labelAssembled: 262 },
  body: { Part: AttachmentBody, centreY: 346, right: 228, explode: -58, labelExploded: 292, labelAssembled: 352 },
  skirt: { Part: AttachmentSkirt, centreY: 381, right: 222, explode: -14, labelExploded: 412, labelAssembled: 442 },
  bottle: { Part: BottlePart, centreY: 633, right: 220, explode: 40, labelExploded: 660, labelAssembled: 640 },
};

// draw order: back to front
const ORDER = ['bottle', 'cap', 'skirt', 'body', 'upper'];
const EASE = [0.2, 0.8, 0.2, 1];

export default function ComponentDiagram() {
  const u = useProductIds();
  const wrap = useRef(null);
  const inView = useInView(wrap, { once: true, amount: 0.35 });
  const [exploded, setExploded] = useState(false);
  const [active, setActive] = useState('upper');

  useEffect(() => {
    if (inView) {
      const id = setTimeout(() => setExploded(true), 450);
      return () => clearTimeout(id);
    }
  }, [inView]);

  const byId = Object.fromEntries(components.map((c) => [c.id, c]));
  const current = byId[active];
  const idx = components.findIndex((c) => c.id === active);

  return (
    <div ref={wrap} className="cd">
      <div className="cd__stage">
        <div className="cd__toggle" role="group" aria-label="Diagram view">
          <button type="button" aria-pressed={exploded} onClick={() => setExploded(true)}>
            Exploded
          </button>
          <button type="button" aria-pressed={!exploded} onClick={() => setExploded(false)}>
            Assembled
          </button>
        </div>

        <svg viewBox="-20 -200 660 1110" className="cd__svg" role="group" aria-label="Exploded view of the concealer and the Clean Cosmetic attachment">
          <ProductDefs u={u} />

          {ORDER.map((id) => {
            const g = GEOMETRY[id];
            const c = byId[id];
            const isActive = active === id;
            return (
              <motion.g
                key={id}
                className={`cd__part ${isActive ? 'is-active' : ''} ${active && !isActive ? 'is-dim' : ''}`}
                initial={false}
                animate={{ y: exploded ? g.explode : 0 }}
                transition={{ duration: 1.2, ease: EASE, delay: exploded ? ORDER.indexOf(id) * 0.06 : 0 }}
                onMouseEnter={() => setActive(id)}
                onFocus={() => setActive(id)}
                onClick={() => setActive(id)}
                tabIndex={0}
                role="button"
                aria-label={`${c.code} ${c.name}`}
                aria-pressed={isActive}
              >
                <g.Part u={u} label={id === 'bottle' ? true : undefined} />
              </motion.g>
            );
          })}

          {/* leader lines + labels */}
          {components.map((c) => {
            const g = GEOMETRY[c.id];
            const partY = g.centreY + (exploded ? g.explode : 0);
            const labelY = exploded ? g.labelExploded : g.labelAssembled;
            const isActive = active === c.id;
            const d = `M ${g.right + 10} ${partY} L 350 ${labelY} L 382 ${labelY}`;
            return (
              <g
                key={c.id}
                className={`cd__label ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(c.id)}
                onClick={() => setActive(c.id)}
              >
                <motion.path
                  initial={false}
                  animate={{ d, pathLength: inView ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: EASE }}
                  fill="none"
                  className="cd__leader"
                />
                <motion.circle initial={false} animate={{ cx: g.right + 10, cy: partY }} transition={{ duration: 1.2, ease: EASE }} r="4.5" className="cd__node" />
                <motion.g initial={false} animate={{ y: labelY }} transition={{ duration: 1.2, ease: EASE }}>
                  <text x="392" y="-6" className="cd__code">
                    {c.code}
                  </text>
                  <text x="392" y="18" className="cd__name">
                    {c.short || c.name}
                  </text>
                </motion.g>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="cd__panel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="cd__panel-code">
              {current.code} <span>/ 0{components.length}</span>
            </p>
            <p className="eyebrow">{current.group}</p>
            <h3 className="cd__panel-name">{current.name}</h3>
            <dl className="cd__panel-dl">
              <dt>Purpose</dt>
              <dd>{current.purpose || <span className="ph">Describe what this component does once the design is confirmed.</span>}</dd>
              <dt>Where it fits</dt>
              <dd>{current.fit || <span className="ph">Describe where this part sits in the assembly.</span>}</dd>
            </dl>
            <div className="cd__pos" aria-hidden="true">
              {components.map((c, i) => (
                <span key={c.id} className={i === idx ? 'on' : ''} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <ul className="cd__chips">
          {components.map((c) => (
            <li key={c.id}>
              <button type="button" className={active === c.id ? 'is-active' : ''} onClick={() => setActive(c.id)} onMouseEnter={() => setActive(c.id)}>
                <span>{c.code}</span> {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
