import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import ConcealerProduct from '../components/product/ConcealerProduct.jsx';
import { steps } from '../content/site.js';
import './pages.css';

const STATES = ['off', 'attaching', 'on'];
const EASE = [0.2, 0.8, 0.2, 1];

export default function HowToUse() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  // gentle autoplay until the visitor takes control
  useEffect(() => {
    if (!auto) return undefined;
    const id = setInterval(() => setStep((s) => (s + 1) % steps.length), 4200);
    return () => clearInterval(id);
  }, [auto]);

  const go = (i) => {
    setAuto(false);
    setStep((i + steps.length) % steps.length);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(step + 1);
    if (e.key === 'ArrowLeft') go(step - 1);
  };

  const s = steps[step];

  return (
    <Page title="How to Use">
      <PageHero
        index="07"
        label="How to Use"
        blobs="a"
        lines={[
          { text: 'THREE SIMPLE STEPS.', style: 'heavy', tone: 'rose' },
          { text: 'A cleaner experience.', style: 'italic' },
        ]}
      />

      <section className="htu section" aria-label="Step-by-step tutorial" onKeyDown={onKey}>
        <div className="htu__stage">
          <div className="htu__glow" />
          <AnimatePresence mode="wait">
            <motion.span
              key={s.number}
              className="htu__bignum"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.7, ease: EASE }}
              aria-hidden="true"
            >
              {s.number}
            </motion.span>
          </AnimatePresence>
          <div className="htu__product">
            <ConcealerProduct state={STATES[step]} guide={step === 1} title={`Step ${s.number}: ${s.title}`} />
          </div>
          {step === 1 && (
            <motion.span className="htu__hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              connection point
            </motion.span>
          )}
        </div>

        <div className="htu__panel">
          <div className="htu__tabs" role="tablist" aria-label="Steps">
            {steps.map((st, i) => (
              <button
                key={st.number}
                type="button"
                role="tab"
                aria-selected={i === step}
                className={`htu__tab ${i === step ? 'is-active' : ''}`}
                onClick={() => go(i)}
              >
                <span className="htu__tab-num">{st.number}</span>
                <span className="htu__tab-title">{st.title}</span>
                <span className="htu__tab-bar">
                  {i === step && auto && <motion.span key={step} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4.2, ease: 'linear' }} />}
                  {i === step && !auto && <span style={{ transform: 'scaleX(1)' }} />}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={s.number}
              role="tabpanel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <p className="eyebrow">Step {s.number}</p>
              <h2 className="htu__title">{s.title}.</h2>
              <p className="lede htu__text">{s.text}</p>
              {s.detail ? <p className="body-copy">{s.detail}</p> : <p className="ph htu__detail">Confirm the exact action for this step against the prototype.</p>}
            </motion.div>
          </AnimatePresence>

          <div className="htu__nav">
            <button type="button" className="htu__arrow" onClick={() => go(step - 1)} aria-label="Previous step">
              ←
            </button>
            <button type="button" className="htu__arrow" onClick={() => go(step + 1)} aria-label="Next step">
              →
            </button>
            <button type="button" className="link-arrow" onClick={() => setAuto((a) => !a)}>
              {auto ? 'Pause' : 'Play'} <span className="arrow">{auto ? '❙❙' : '▶'}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="htu-sum section" aria-label="Summary">
        {steps.map((st, i) => (
          <motion.div
            key={st.number}
            className="htu-sum__item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.12, duration: 1, ease: EASE }}
          >
            <span className="num-big">{st.number}</span>
            <h3>{st.title}</h3>
            <p>{st.text}</p>
          </motion.div>
        ))}
        <div className="htu-sum__cta">
          <Link to="/components" className="link-arrow">
            Meet the components <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="link-arrow">
            Questions? Get in touch <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </Page>
  );
}
