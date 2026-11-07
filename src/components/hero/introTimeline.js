/**
 * Shared choreography for the homepage opening (seconds).
 * 0.15–1.8s  stacked colour bands slide up across the screen (SlideIntro)
 * then the product rises and the three headline words pop in turn.
 */
export const INTRO = {
  product: 1.5,
  beauty: 2.3,
  without: 2.7,
  mess: 3.1,
  details: 3.8,
  nav: 3.7,
};

let played = false;

/** First visit plays at full length; returning to Home plays ~45% faster. */
export function getIntroTempo() {
  return played ? 0.55 : 1;
}

export function markIntroPlayed() {
  played = true;
}

export function introPlayed() {
  return played;
}
