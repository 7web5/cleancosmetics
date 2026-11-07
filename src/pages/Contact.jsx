import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Field from '../components/ui/Field.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { contact } from '../content/site.js';
import './pages.css';

export default function Contact() {
  return (
    <Page title="Contact">
      <PageHero
        index="08"
        label="Contact"
        blobs="b"
        lines={[
          { text: "LET'S", style: 'heavy' },
          { text: 'connect.', style: 'italic' },
        ]}
      />
      <section className="ct section" aria-label="Contact Clean Cosmetic">
        <Reveal className="ct__info">
          <p className="lede">Questions, feedback, collaborations or simply curious about the project? We would love to hear from you.</p>
          <dl className="ct__dl">
            <div>
              <dt>Email</dt>
              <dd>
                <Field value={contact.email} href={contact.email && `mailto:${contact.email}`} placeholder="Team email to be added" />
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <Field value={contact.phone} href={contact.phone && `tel:${contact.phone}`} placeholder="Phone to be added" />
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>
                <Field value={contact.location} placeholder="Location to be added" />
              </dd>
            </div>
            <div>
              <dt>Follow</dt>
              <dd className="ct__socials">
                {contact.socials.map((s) =>
                  s.url ? (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ) : (
                    <span key={s.label} className="ct__social-ph">
                      {s.label}
                      <em> — to be added</em>
                    </span>
                  ),
                )}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal className="ct__form" delay={0.15}>
          <ContactForm />
        </Reveal>
      </section>
    </Page>
  );
}
