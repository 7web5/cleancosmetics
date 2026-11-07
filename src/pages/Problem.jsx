import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SplitReveal from '../components/type/SplitReveal.jsx';
import ImagePlaceholder from '../components/ui/ImagePlaceholder.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import './pages.css';

const MATTERS = [
  { word: 'Waste', text: 'Every leak is product that was paid for and never used.' },
  { word: 'Mess', text: 'Liquid formulas stain linings, coat other products and transfer to hands.' },
  { word: 'Time', text: 'Cleaning a bag, a pouch or a cap turns a quick touch-up into a chore.' },
];

const MOMENTS = [
  { title: 'The makeup bag', text: 'One loose cap and everything else in the bag is coated in concealer.' },
  { title: 'Travelling', text: 'Suitcases, carry-ons and pockets put containers through tilting, pressure and bumps.' },
  { title: 'The gym bag', text: 'Products are thrown in quickly and shaken about all day.' },
  { title: 'The handbag', text: 'A touch-up kit should not mean a ruined lining.' },
  { title: 'Cleaning up', text: 'Wiping containers, caps and brushes before you can even begin.' },
];

/** A concealer tips; a single drop gathers at the cap and falls — the stain grows as you scroll. */
function Drip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const stain = useTransform(scrollYProgress, [0.15, 0.7], [0.2, 1.25]);
  const tilt = useTransform(scrollYProgress, [0, 0.6], [-6, -22]);
  return (
    <div ref={ref} className="drip" aria-hidden="true">
      <motion.div className="drip__stain" style={{ scale: stain }} />
      <motion.svg viewBox="0 0 300 420" className="drip__svg" style={{ rotate: tilt }}>
        <defs>
          <linearGradient id="dr-cap" x1="0" x2="1">
            <stop offset="0" stopColor="#a1606c" />
            <stop offset="0.35" stopColor="#e3b0b1" />
            <stop offset="1" stopColor="#8f5662" />
          </linearGradient>
          <linearGradient id="dr-body" x1="0" x2="1">
            <stop offset="0" stopColor="#d4a084" />
            <stop offset="0.35" stopColor="#f5d4bb" />
            <stop offset="1" stopColor="#c99478" />
          </linearGradient>
        </defs>
        <rect x="100" y="150" width="100" height="250" rx="22" fill="url(#dr-body)" />
        <rect x="108" y="160" width="9" height="220" rx="4.5" fill="#fff" opacity="0.5" />
        <rect x="114" y="20" width="72" height="136" rx="14" fill="url(#dr-cap)" />
        <rect x="104" y="146" width="92" height="14" rx="4" fill="#d6bba7" />
        <path d="M110 160 Q104 176 106 190 Q110 200 114 190 Q116 176 118 162 Z" fill="#e7b896" />
        <circle className="drip__drop" cx="110" cy="196" r="7" fill="#e2b394" />
      </motion.svg>
    </div>
  );
}

export default function Problem() {
  return (
    <Page title="Our Problem">
      <PageHero
        index="04"
        label="Our Problem"
        blobs="a"
        lines={[
          { text: 'YOUR MAKEUP', style: 'heavy' },
          { text: 'should stay', style: 'italic' },
          { text: 'WHERE IT BELONGS.', style: 'heavy', tone: 'berry' },
        ]}
      />

      {/* 01 — The problem */}
      <section className="pb-problem section" aria-labelledby="pb-1">
        <Drip />
        <div className="pb-problem__text">
          <p className="eyebrow kicker">01 — The problem</p>
          <h2 id="pb-1" className="pb-problem__big">
            Liquid cosmetics <em>leak.</em>
          </h2>
          <div className="body-copy">
            <p>
              Concealers, foundations and other liquid products are formulated to flow. That same quality means that,
              once a container leaves the vanity, a little product can make its way past the cap — onto the rim, the
              threads, and eventually everything around it.
            </p>
            <p>It is a small problem. It happens every day. And most of us have simply accepted it.</p>
          </div>
        </div>
      </section>

      {/* 02 — Why it matters */}
      <section className="pb-matters section" aria-labelledby="pb-2">
        <p className="eyebrow kicker" id="pb-2">
          02 — Why it matters
        </p>
        <div className="pb-matters__grid">
          {MATTERS.map((m, i) => (
            <div key={m.word} className="pb-matters__item">
              <SplitReveal as="h3" text={`${m.word}.`} className="pb-matters__word" letterClassName={['g-rose', 'g-peach', 'g-berry'][i]} delay={i * 0.1} stagger={0.05} />
              <Reveal delay={0.3 + i * 0.1}>
                <p>{m.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Marquee reverse words={['Leaked', 'Wasted', 'Wiped', 'Stained']} />

      {/* 03 — Everyday inconveniences */}
      <section className="pb-moments section" aria-labelledby="pb-3">
        <div className="pb-moments__head">
          <p className="eyebrow kicker">03 — Everyday inconveniences</p>
          <h2 id="pb-3" className="h-section">
            Familiar <em>moments.</em>
          </h2>
          <ImagePlaceholder label="Photograph: a makeup bag after a leak" ratio="4 / 5" tone="rose" />
        </div>
        <ol className="pb-moments__list">
          {MOMENTS.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 0.06} className="pb-moment">
              <span className="pb-moment__n">0{i + 1}</span>
              <div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 04 — Opportunity */}
      <section className="pb-opp section" aria-labelledby="pb-4">
        <p className="eyebrow kicker">04 — The opportunity for innovation</p>
        <h2 id="pb-4" className="pb-opp__title" aria-label="What if the fix was a small addition?">
          <SplitReveal ariaHidden text="What if the fix" className="pb-opp__l1" stagger={0.03} />
          <SplitReveal ariaHidden text="was a small addition?" className="pb-opp__l2" letterClassName="g-rose" delay={0.4} stagger={0.03} />
        </h2>
        <Reveal className="pb-opp__body">
          <p className="lede">
            Not a new formula. Not new packaging. An attachment that connects to the cosmetics people already love.
          </p>
          <Link to="/project" className="link-arrow">
            Discover our project <span className="arrow">→</span>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
