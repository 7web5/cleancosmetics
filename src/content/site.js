/**
 * CLEAN COSMETIC — EDITABLE SITE CONTENT
 * ------------------------------------------------------------
 * Everything the team will want to update lives here.
 * Any value written as an empty string ('') or `null` renders as an
 * elegant placeholder on the site, so nothing is ever invented.
 *
 * Images: drop files into /public/images/ and reference them as
 * '/images/your-file.jpg'.
 */

export const brand = {
  name: 'Clean Cosmetic',
  tagline: 'Beauty. Without the mess.',
  description:
    'Thoughtfully designed to help keep your cosmetics clean, contained, and ready to go.',
};

/**
 * PRODUCT IMAGERY
 * When a photograph of the real prototype is available, set `heroPhoto`
 * to a transparent PNG/WebP of the concealer with the attachment installed
 * (e.g. '/images/prototype-hero.png'). The illustrated product is then
 * replaced everywhere it appears in the hero.
 */
export const product = {
  heroPhoto: null,
  heroPhotoAlt: 'Liquid concealer with the Clean Cosmetic attachment installed',
  attachmentLabel: 'The Clean Cosmetic attachment',
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Project', to: '/project' },
  { label: 'Our Problem', to: '/problem' },
  { label: 'History', to: '/history' },
  { label: 'Components', to: '/components' },
  { label: 'How to Use', to: '/how-to-use' },
  { label: 'Contact', to: '/contact' },
];

/** TEAM — replace names, roles and photos. Add or remove entries freely. */
export const team = [
  { name: '', role: '', photo: null },
  { name: '', role: '', photo: null },
  { name: '', role: '', photo: null },
  { name: '', role: '', photo: null },
];

/** HISTORY TIMELINE — dates and details are intentionally left blank. */
export const timeline = [
  {
    stage: 'Stage 01',
    title: 'Initial Problem Identification',
    date: '',
    description: '',
    prompt: 'Describe the moment the team first noticed the problem of leaking liquid cosmetics.',
    images: [null],
  },
  {
    stage: 'Stage 02',
    title: 'Brainstorming',
    date: '',
    description: '',
    prompt: 'Summarise the ideas explored and how the direction was chosen.',
    images: [null, null],
  },
  {
    stage: 'Stage 03',
    title: 'Initial Concept Development',
    date: '',
    description: '',
    prompt: 'Explain the first concept for the attachment and what it was meant to solve.',
    images: [null],
  },
  {
    stage: 'Stage 04',
    title: 'Design Exploration',
    date: '',
    description: '',
    prompt: 'Share the sketches, forms and materials that were considered.',
    images: [null, null],
  },
  {
    stage: 'Stage 05',
    title: 'Prototype Development',
    date: '',
    description: '',
    prompt: 'Describe how the first physical prototype was made.',
    images: [null],
  },
  {
    stage: 'Stage 06',
    title: 'Testing',
    date: '',
    description: '',
    prompt: 'Outline how the prototype was tested and what was observed.',
    images: [null, null],
  },
  {
    stage: 'Stage 07',
    title: 'Improvements',
    date: '',
    description: '',
    prompt: 'List the changes made in response to testing.',
    images: [null],
  },
  {
    stage: 'Stage 08',
    title: 'Final Product',
    date: '',
    description: '',
    prompt: 'Introduce the final version of the Clean Cosmetic attachment.',
    images: [null],
  },
];

/**
 * COMPONENTS — used by the interactive exploded-view diagram.
 * The cap and container belong to the existing cosmetic product.
 * Parts A–C are placeholders for the real attachment components:
 * rename them, describe their purpose and where they fit.
 */
export const components = [
  {
    id: 'cap',
    code: '01',
    name: 'Applicator Cap',
    short: 'Applicator cap',
    group: 'Existing cosmetic',
    purpose:
      "The cosmetic's original cap and applicator. Clean Cosmetic is designed to work alongside the products you already own.",
    fit: 'Top of the assembly.',
    placeholder: false,
  },
  {
    id: 'upper',
    code: '02',
    name: 'Attachment — Part A',
    short: 'Part A',
    group: 'Clean Cosmetic attachment',
    purpose: '',
    fit: '',
    placeholder: true,
  },
  {
    id: 'body',
    code: '03',
    name: 'Attachment — Part B',
    short: 'Part B',
    group: 'Clean Cosmetic attachment',
    purpose: '',
    fit: '',
    placeholder: true,
  },
  {
    id: 'skirt',
    code: '04',
    name: 'Attachment — Part C',
    short: 'Part C',
    group: 'Clean Cosmetic attachment',
    purpose: '',
    fit: '',
    placeholder: true,
  },
  {
    id: 'bottle',
    code: '05',
    name: 'Liquid Cosmetic Container',
    short: 'Container',
    group: 'Existing cosmetic',
    purpose:
      'The original container holding the liquid product, such as a concealer or foundation.',
    fit: 'Base of the assembly.',
    placeholder: false,
  },
];

/** HOW TO USE — confirm every instruction against the real prototype. */
export const steps = [
  {
    number: '01',
    title: 'Prepare',
    text: 'Start with your liquid cosmetic, closed and upright.',
    detail: '',
  },
  {
    number: '02',
    title: 'Attach',
    text: 'Connect the Clean Cosmetic attachment to the container.',
    detail: '',
  },
  {
    number: '03',
    title: 'Ready',
    text: 'Your cosmetic is ready to carry, with the attachment in place.',
    detail: '',
  },
];

/** PROJECT — technical specifications (leave blank until confirmed). */
export const specs = [
  { label: 'Material', value: '' },
  { label: 'Dimensions', value: '' },
  { label: 'Weight', value: '' },
  { label: 'Compatible containers', value: '' },
  { label: 'Manufacturing method', value: '' },
  { label: 'Colourways', value: '' },
];

export const iterations = [
  { version: 'Iteration 01', note: '', image: null },
  { version: 'Iteration 02', note: '', image: null },
  { version: 'Iteration 03', note: '', image: null },
];

export const tests = [
  { test: '', method: '', outcome: '' },
  { test: '', method: '', outcome: '' },
  { test: '', method: '', outcome: '' },
];

/**
 * CONTACT
 * formEndpoint: a form service URL that accepts JSON POSTs
 * (e.g. a Formspree endpoint). Leave empty to run the form in preview mode.
 */
export const contact = {
  formEndpoint: '',
  email: '',
  phone: '',
  location: '',
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'TikTok', url: '' },
    { label: 'LinkedIn', url: '' },
  ],
};
