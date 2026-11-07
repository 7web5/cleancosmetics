import { Link } from 'react-router-dom';
import { brand, contact, nav } from '../../content/site.js';
import Field from '../ui/Field.jsx';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__blob" aria-hidden="true" />
      <div className="footer__top">
        <div className="footer__intro">
          <p className="footer__tag">{brand.tagline}</p>
          <p className="footer__copy">{brand.description}</p>
        </div>

        <div className="footer__col">
          <h2 className="eyebrow">Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="eyebrow">Contact</h2>
          <ul>
            <li>
              <Field value={contact.email} placeholder="Team email to be added" href={contact.email && `mailto:${contact.email}`} />
            </li>
            <li>
              <Field value={contact.phone} placeholder="Phone to be added" href={contact.phone && `tel:${contact.phone}`} />
            </li>
            <li>
              <Field value={contact.location} placeholder="Location to be added" />
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="eyebrow">Follow</h2>
          <ul>
            {contact.socials.map((s) => (
              <li key={s.label}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ) : (
                  <span className="footer__muted">
                    {s.label} <em>— link to be added</em>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/" className="footer__mark" aria-label="Clean Cosmetic — home">
        CLEAN COSMETIC<span>.</span>
      </Link>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Clean Cosmetic. A beauty-tech innovation project.</span>
        <button type="button" className="link-arrow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <span className="arrow">↑</span>
        </button>
      </div>
    </footer>
  );
}
