import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Page from '../components/layout/Page.jsx';
import Hero from '../components/hero/Hero.jsx';
import SplitReveal from '../components/type/SplitReveal.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import ConcealerProduct from '../components/product/ConcealerProduct.jsx';
import { nav, steps } from '../content/site.js';
import './home.css';

const PAINS = [
  { n: '01', title: 'Leaks in transit.', text: 'Liquid formulas can find their way out of a closed container in a bag, a pocket or a suitcase.' },
  { n: '02', title: 'Product left behind.', text: 'What escapes the bottle is product that never reaches your skin.' },
  { n: '03', title: 'Time spent cleaning.', text: 'Stained pouches, sticky caps and wiped-down brushes add friction to every routine.' },
];

function Spotlight() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 8]);
  const y = useTransform(scrollYProgress, [0, 1], ['8vh', '-8vh']);
  const word = useTransform(scrollYProgress, [0, 1], ['12%', '-18%']);

  return (
    <section ref={ref} className="spot" aria-labelledby="spot-title">
      <motion.p className="spot__word" style={{ x: word }} aria-hidden="true">
        CONTAINED
      </motion.p>
      <div className="spot__stage">
        <div className="spot__halo" />
        <motion.div className="spot__product" style={{ rotate, y }}>
          <ConcealerProduct />
          <span className="spot__call spot__call--a">
            <span className="spot__call-line" />
            <span>
              <strong>The attachment</strong>
              <em>connects at the cap</em>
            </span>
          </span>
          <span className="spot__call spot__call--b">
            <span className="spot__call-line" />
            <span>
              <strong>Your cosmetic</strong>
              <em>the product you already own</em>
            </span>
          </span>
        </motion.div>
      </div>
      <div className="spot__copy">
        <Reveal>
          <p className="eyebrow kicker">The innovation</p>
          <h2 id="spot-title" className="h-section">
            A small addition. <em>A big difference.</em>
          </h2>
          <p className="body-copy">
            Clean Cosmetic is an attachment designed to connect to existing liquid cosmetics such as concealers and
            foundations, helping to keep the product inside the container where it belongs.
          </p>
          <div className="spot__links">
            <Link to="/project" className="link-arrow">
              Our project <span className="arrow">→</span>
            </Link>
            <Link to="/components" className="link-arrow">
              See the components <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Page className="home">
      <Hero />

      <section id="mess-free" className="mf section" aria-labelledby="mf-title">
        <p className="eyebrow kicker">Chapter one — the problem</p>
        <h2 id="mf-title" className="mf__title" aria-label="Mess-free beauty starts here.">
          <SplitReveal ariaHidden text="MESS-FREE" className="mf__line mf__line--a" letterClassName="g-rose" stagger={0.04} />
          <SplitReveal ariaHidden text="beauty" className="mf__line mf__line--b" delay={0.3} stagger={0.05} />
          <SplitReveal ariaHidden text="STARTS HERE." className="mf__line mf__line--c" letterClassName="g-berry" delay={0.5} stagger={0.035} />
        </h2>

        <div className="mf__grid">
          <Reveal className="mf__lede">
            <p className="lede">
              Liquid cosmetics are made to glide onto skin — which also makes them very good at escaping. A concealer
              tucked into a bag should arrive the way it left.
            </p>
            <Link to="/problem" className="link-arrow">
              Read about the problem <span className="arrow">→</span>
            </Link>
          </Reveal>

          <ol className="mf__pains">
            {PAINS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.12} className="mf__pain">
                <span className="mf__n">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Spotlight />

      <Marquee words={['Clean', 'Contained', 'Ready to go', 'Beauty without the mess']} />

      <section className="steps-teaser section" aria-labelledby="st-title">
        <div className="steps-teaser__head">
          <p className="eyebrow kicker">How to use</p>
          <h2 id="st-title" className="h-section">
            Three simple steps. <em>A cleaner experience.</em>
          </h2>
        </div>
        <div className="steps-teaser__row">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.12} className="steps-teaser__item">
              <div className="steps-teaser__visual">
                <ConcealerProduct state={i === 0 ? 'off' : i === 1 ? 'attaching' : 'on'} />
              </div>
              <span className="steps-teaser__num">Step {s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Link to="/how-to-use" className="link-arrow">
          View the full tutorial <span className="arrow">→</span>
        </Link>
      </section>

      <section className="index section" aria-labelledby="ix-title">
        <p id="ix-title" className="eyebrow kicker">
          Explore Clean Cosmetic
        </p>
        <ul className="index__list">
          {nav.slice(1).map((n, i) => (
            <Reveal as="li" key={n.to} delay={i * 0.05} amount={0.6}>
              <Link to={n.to} className="index__link">
                <span className="index__num">0{i + 2}</span>
                <span className="index__label">{n.label}</span>
                <span className="index__arrow">→</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </Page>
  );
}
