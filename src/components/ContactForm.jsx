import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contact } from '../content/site.js';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!EMAIL.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.';
  return e;
}

/**
 * Contact form with inline validation and confirmation.
 * Sends JSON to `contact.formEndpoint` when configured (e.g. Formspree);
 * otherwise runs in preview mode and says so in the confirmation.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  const field = (k, label, props = {}) => {
    const Tag = props.textarea ? 'textarea' : 'input';
    const { textarea, ...rest } = props;
    const invalid = touched[k] && errors[k];
    return (
      <div className={`cf__field ${invalid ? 'is-invalid' : ''} ${values[k] ? 'has-value' : ''}`}>
        <Tag
          id={`cf-${k}`}
          name={k}
          value={values[k]}
          onChange={update(k)}
          onBlur={blur(k)}
          aria-invalid={invalid ? 'true' : 'false'}
          aria-describedby={invalid ? `cf-${k}-err` : undefined}
          placeholder=" "
          {...rest}
        />
        <label htmlFor={`cf-${k}`}>{label}</label>
        <span className="cf__line" aria-hidden="true" />
        <AnimatePresence>
          {invalid && (
            <motion.span id={`cf-${k}-err`} className="cf__error" role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {errors[k]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="cf">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            className="cf__done"
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <svg viewBox="0 0 80 80" className="cf__check" aria-hidden="true">
              <motion.circle cx="40" cy="40" r="36" fill="none" stroke="#c9828b" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
              <motion.path d="M25 41 L36 52 L57 30" fill="none" stroke="#c9828b" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
            </svg>
            <h3>Thank you, {values.name.trim().split(' ')[0]}.</h3>
            <p>
              {contact.formEndpoint
                ? 'Your message is on its way. We will reply to ' + values.email.trim() + ' as soon as we can.'
                : 'Your message passed validation. (Preview mode: connect a form endpoint in src/content/site.js to deliver messages.)'}
            </p>
            <button type="button" className="link-arrow" onClick={reset}>
              Send another message <span className="arrow">→</span>
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {field('name', 'Your name', { type: 'text', autoComplete: 'name', required: true })}
            {field('email', 'Email address', { type: 'email', autoComplete: 'email', required: true })}
            {field('message', 'Your message', { textarea: true, rows: 5, required: true })}
            {status === 'error' && (
              <p className="cf__fail" role="alert">
                Something went wrong while sending. Please try again in a moment.
              </p>
            )}
            <button type="submit" className="cf__submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
              <span className="cf__submit-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
