/** Oversized scrolling statement strip. */
export default function Marquee({ words = [], reverse = false }) {
  const row = (
    <span className="marquee__row">
      {words.map((w, i) => (
        <span key={i} className={`marquee__word ${i % 2 ? 'marquee__word--outline' : ''}`}>
          {w}
          <span className="marquee__dot">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} aria-label={words.join(', ')}>
      <div className="marquee__track" aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
