# Clean Cosmetic — website

A React + Vite site for the Clean Cosmetic beauty-tech project.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Editing content

Almost everything the team needs to change is in **`src/content/site.js`**:

| What | Key |
| --- | --- |
| Prototype photo for the hero (transparent PNG) | `product.heroPhoto` |
| Team names, roles, portraits | `team` |
| History milestones, dates, images | `timeline` |
| Component names and purposes (Components page) | `components` |
| How-to-use steps | `steps` |
| Specs, design iterations, test log | `specs`, `iterations`, `tests` |
| Email, phone, location, social links | `contact` |
| Contact form delivery (e.g. a Formspree URL) | `contact.formEndpoint` |

Empty values render as italic placeholders, so nothing is invented. Put images in
`public/images/` and reference them as `/images/file.jpg`.

## Replacing the illustrated attachment

The concealer and attachment are drawn in `src/components/product/ConcealerProduct.jsx`.
The attachment is split into `AttachmentUpper`, `AttachmentBody` and `AttachmentSkirt`
(Parts A–C). Redraw those three parts to match the real prototype and the hero,
homepage, How to Use and the exploded Components diagram all update together.

## Where things live

- `src/components/hero/` — opening advertisement (sliding colour-band intro, product reveal, headline)
- `src/components/hero/introTimeline.js` — timing of the opening sequence
- `src/components/hero/hero.css` — the hero's blended background colour (`.hero`)
- `src/components/type/SplitReveal.jsx` — letter-by-letter headline reveal
- `src/components/layout/` — navigation, footer, page wrapper, inner-page hero
- `src/components/Timeline.jsx`, `ComponentDiagram.jsx`, `ContactForm.jsx`
- `src/pages/` — one file per route

## Deploying

The site uses client-side routing. On static hosts, rewrite all paths to `index.html`
(Netlify: `/* /index.html 200`; Vercel does this automatically for Vite).
