import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ImagePlaceholder from '../components/ui/ImagePlaceholder.jsx';
import SplitReveal from '../components/type/SplitReveal.jsx';
import Field from '../components/ui/Field.jsx';
import { team } from '../content/site.js';
import './pages.css';

const REASONS = [
  {
    title: 'It works with what you own.',
    text: 'Rather than asking you to switch products, Clean Cosmetic is designed to connect to the liquid cosmetics already in your routine.',
  },
  {
    title: 'It solves a small, daily frustration.',
    text: 'Leaks are rarely dramatic — they are the quiet, recurring mess that makes carrying makeup less pleasant than it should be.',
  },
  {
    title: 'It respects the product.',
    text: 'Product that stays in the container is product that can actually be used.',
  },
  {
    title: 'It is designed, not just engineered.',
    text: 'A functional object that also belongs on a vanity — considered in form, finish and feel.',
  },
];

export default function About() {
  return (
    <Page title="About Us">
      <PageHero
        index="02"
        label="About Us"
        blobs="b"
        lines={[
          { text: 'BEAUTY,', style: 'serif', tone: 'rose' },
          { text: 'REIMAGINED.', style: 'heavy', tone: 'berry' },
        ]}
        intro="Clean Cosmetic is a beauty-tech innovation project — a team designing a small object to solve an everyday problem with liquid cosmetics."
      />

      {/* 01 — Who we are */}
      <section className="ab-who section" aria-labelledby="who">
        <ImagePlaceholder className="ab-who__img" label="Team photograph" ratio="5 / 4" tone="blush" />
        <Reveal className="ab-who__text">
          <span className="num-big">01</span>
          <h2 id="who" className="h-section">
            Who <em>we are</em>
          </h2>
          <div className="body-copy">
            <p>
              We are the team behind Clean Cosmetic: people who use makeup, carry makeup and have cleaned up after
              makeup more often than we would like.
            </p>
            <p className="ph">Add a short introduction to the team — your school, programme or organisation, and how you came together.</p>
          </div>
        </Reveal>
      </section>

      {/* 02 — Mission */}
      <section className="ab-mission section" aria-labelledby="mission">
        <p className="eyebrow kicker" id="mission">
          02 — Our mission
        </p>
        <SplitReveal
          as="p"
          className="ab-mission__quote"
          text="To keep liquid cosmetics clean, contained and ready to go — wherever the day takes them."
          stagger={0.012}
          duration={0.8}
        />
      </section>

      {/* 03 — Vision */}
      <section className="ab-vision section" aria-labelledby="vision">
        <Reveal className="ab-vision__text">
          <span className="num-big">03</span>
          <h2 id="vision" className="h-section">
            Our <em>vision</em>
          </h2>
          <div className="body-copy">
            <p>
              We imagine a makeup bag where nothing needs wiping down — where liquid products travel as neatly as they
              were packed, and the small frustrations of carrying cosmetics simply disappear.
            </p>
            <p className="ph">Expand on the long-term ambition for Clean Cosmetic.</p>
          </div>
        </Reveal>
        <div className="ab-vision__media">
          <ImagePlaceholder className="ab-vision__tall" label="Project photograph" ratio="3 / 4" tone="peach" />
          <ImagePlaceholder className="ab-vision__small" label="Detail photograph" ratio="1 / 1" tone="beige" />
        </div>
      </section>

      {/* 04 — Why Clean Cosmetic */}
      <section className="ab-why section" aria-labelledby="why">
        <div className="ab-why__head">
          <span className="num-big">04</span>
          <h2 id="why" className="h-section">
            Why <em>Clean Cosmetic?</em>
          </h2>
        </div>
        <ol className="ab-why__list">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.08} className="ab-why__item">
              <span className="ab-why__n">0{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="ab-team section" aria-labelledby="team">
        <p className="eyebrow kicker" id="team">
          The team
        </p>
        <div className="ab-team__grid">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 0.08} className="ab-team__card">
              <ImagePlaceholder src={m.photo} alt={m.name} label="Portrait" ratio="3 / 4" tone={['blush', 'peach', 'beige', 'rose'][i % 4]} />
              <h3>
                <Field value={m.name} placeholder="Team member name" />
              </h3>
              <p>
                <Field value={m.role} placeholder="Role" />
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}
