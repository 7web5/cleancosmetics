import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '../../content/site.js';
import { INTRO, introPlayed } from '../hero/introTimeline.js';
import './nav.css';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // On a first visit to Home, the nav waits for the opening advertisement.
  const [delay] = useState(() => (pathname === '/' && !introPlayed() ? INTRO.nav : 0.2));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Link to="/" className="nav__logo" aria-label="Clean Cosmetic — home">
          <span className="nav__logo-main">CLEAN</span>
          <span className="nav__logo-sub">COSMETIC.</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.75, ease: [0.7, 0, 0.2, 1] }}
          >
            <div className="menu__blob menu__blob--a" />
            <div className="menu__blob menu__blob--b" />
            <nav className="menu__links" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <NavLink to={item.to} end={item.to === '/'} className="menu__link">
                    <span className="menu__num">0{i + 1}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <p className="menu__foot">Beauty. Without the mess.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
