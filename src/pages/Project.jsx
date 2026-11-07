import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ImagePlaceholder from '../components/ui/ImagePlaceholder.jsx';
import ConcealerProduct from '../components/product/ConcealerProduct.jsx';
import LeakDiagram from '../components/product/LeakDiagram.jsx';
import Field from '../components/ui/Field.jsx';
import { iterations, specs, tests } from '../content/site.js';
import './pages.css';

const OBJECTIVES = [
  { title: 'Contain', text: 'Help keep liquid product inside its container while it is carried.' },
  { title: 'Connect', text: 'Attach to existing cosmetics rather than replacing them.' },
  { title: 'Simplify', text: 'Be quick to understand and easy to use, without instructions.' },
  { title: 'Belong', text: 'Look and feel at home alongside premium beauty packaging.' },
];

const COMPAT = [
  'Neck and cap diameters vary between brands and product lines.',
  'Caps can be round, square, tapered or integrated with an applicator wand.',
  'Containers are made from glass, rigid plastic and flexible tubes.',
  'The attachment should not prevent the cap from being opened and closed normally.',
];

function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rot = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const big = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  return (
    <section ref={ref} className="pj-show" aria-labelledby="pj-intro">
      <motion.span className="pj-show__plus" style={{ y: big }} aria-hidden="true">
        +
      </motion.span>
      <div className="pj-show__stage">
        <motion.div className="pj-show__product" style={{ rotate: rot }}>
          <ConcealerProduct state="off" title="The original liquid concealer" />
          <span className="pj-show__cap">The cosmetic</span>
        </motion.div>
        <motion.div className="pj-show__product" style={{ rotate: useTransform(rot, (r) => -r) }}>
          <ConcealerProduct state="on" />
          <span className="pj-show__cap">With Clean Cosmetic</span>
        </motion.div>
      </div>
      <Reveal className="pj-show__text">
        <p className="eyebrow kicker">Product introduction</p>
        <h2 id="pj-intro" className="h-section">
          Designed to <em>connect.</em>
        </h2>
        <div className="body-copy">
          <p>
            Clean Cosmetic is an attachment that connects to existing makeup products — primarily liquid cosmetics such
            as concealers and foundations. Its purpose is to help prevent leaks, making products cleaner and more
            convenient to carry and use.
          </p>
          <p>
            The attachment is treated as part of the product: it sits at the connection point between cap and
            container, where liquid formulas most often find their way out.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default function Project() {
  return (
    <Page title="Our Project">
      <PageHero
        index="03"
        label="Our Project"
        blobs="c"
        lines={[
          { text: 'A SMALL ADDITION.', style: 'heavy', tone: 'rose' },
          { text: 'A big difference.', style: 'italic' },
        ]}
        intro="The invention at the heart of Clean Cosmetic — what it is, why it exists and how it is being developed."
      />

      <Showcase />

      {/* Purpose + how it is intended to work */}
      <section className="pj-how section" aria-labelledby="pj-how">
        <div className="pj-how__text">
          <p className="eyebrow kicker">The purpose of the attachment</p>
          <h2 id="pj-how" className="h-section">
            Where leaks <em>begin.</em>
          </h2>
          <div className="body-copy">
            <p>
              In most liquid cosmetics the weak point is the junction between the cap and the container. Product left
              on the threads or rim can be pushed out when the container is tilted, squeezed or jostled in a bag.
            </p>
            <p>
              Clean Cosmetic is designed to work at this connection point, adding a layer of containment around the
              junction without changing the cosmetic itself.
            </p>
            <p className="ph">Describe the actual sealing principle of the prototype here (for example, what forms the seal and how it is held in place).</p>
          </div>
        </div>
        <Reveal className="pj-how__diagram">
          <LeakDiagram />
        </Reveal>
      </section>

      {/* Compatibility */}
      <section className="pj-compat section" aria-labelledby="pj-compat">
        <h2 id="pj-compat" className="pj-compat__title">
          Compatibility <em>considerations</em>
        </h2>
        <ul className="pj-compat__list">
          {COMPAT.map((c, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <span>0{i + 1}</span>
              {c}
            </Reveal>
          ))}
        </ul>
        <p className="pj-compat__note ph">List the specific products and container sizes the prototype has been designed or tested for.</p>
      </section>

      {/* Objectives */}
      <section className="pj-obj section" aria-labelledby="pj-obj">
        <p className="eyebrow kicker" id="pj-obj">
          Design objectives
        </p>
        <div className="pj-obj__rows">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.title} className="pj-obj__row" delay={i * 0.06}>
              <h3>{o.title}.</h3>
              <p>{o.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Development */}
      <section className="pj-dev section" aria-labelledby="pj-dev">
        <div className="pj-dev__head">
          <p className="eyebrow kicker">Product development</p>
          <h2 id="pj-dev" className="h-section">
            From sketch <em>to prototype.</em>
          </h2>
          <Link to="/history" className="link-arrow">
            Follow the full history <span className="arrow">→</span>
          </Link>
        </div>
        <div className="pj-gallery">
          <ImagePlaceholder className="pj-gallery__a" label="Prototype photograph" ratio="4 / 5" tone="blush" />
          <ImagePlaceholder className="pj-gallery__b" label="Prototype on a concealer" ratio="1 / 1" tone="peach" />
          <ImagePlaceholder className="pj-gallery__c" label="Detail of the connection point" ratio="3 / 2" tone="beige" />
        </div>

        <h3 className="pj-sub">Design iterations</h3>
        <div className="pj-iter">
          {iterations.map((it, i) => (
            <Reveal key={it.version} delay={i * 0.1} className="pj-iter__item">
              <ImagePlaceholder src={it.image} label={it.version} ratio="1 / 1" tone={['beige', 'blush', 'peach'][i % 3]} parallax={false} />
              <h4>{it.version}</h4>
              <Field as="p" value={it.note} placeholder="What changed in this iteration, and why." />
            </Reveal>
          ))}
        </div>

        <h3 className="pj-sub">Testing &amp; improvements</h3>
        <div className="pj-table" role="table" aria-label="Testing log">
          <div className="pj-table__row pj-table__row--head" role="row">
            <span role="columnheader">Test</span>
            <span role="columnheader">Method</span>
            <span role="columnheader">Outcome</span>
          </div>
          {tests.map((t, i) => (
            <div className="pj-table__row" role="row" key={i}>
              <Field value={t.test} placeholder="Test name" />
              <Field value={t.method} placeholder="How it was carried out" />
              <Field value={t.outcome} placeholder="What was observed" />
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="pj-specs section" aria-labelledby="pj-specs">
        <h2 id="pj-specs" className="h-section">
          Technical <em>specifications</em>
        </h2>
        <dl className="pj-specs__list">
          {specs.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                <Field value={s.value} placeholder="To be confirmed" />
              </dd>
            </div>
          ))}
        </dl>
        <Link to="/components" className="link-arrow">
          Explore the components <span className="arrow">→</span>
        </Link>
      </section>
    </Page>
  );
}
