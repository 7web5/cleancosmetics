/**
 * Lightweight ambient colour for inner pages: a few blurred, morphing
 * pigment shapes driven by CSS keyframes (GPU-composited, no JS per frame).
 */
export default function SoftBlobs({ variant = 'a' }) {
  return (
    <div className={`blobs blobs--${variant}`} aria-hidden="true">
      <span className="blob blob--1" />
      <span className="blob blob--2" />
      <span className="blob blob--3" />
    </div>
  );
}
