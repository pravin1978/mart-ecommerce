// ============================================
// DIGIMART — DEMO SAMPLE PRODUCTS (12)
// All products are DEMO SAMPLES for presentation only.
// No real purchases are available. Prices are illustrative.
// Names are fictional. No real ratings, reviews or sales data.
// ============================================

const CATEGORY_COLORS = {
  ai: { primary: '#2563EB', secondary: '#7C3AED' },
  saas: { primary: '#0B1220', secondary: '#2563EB' },
  web: { primary: '#3B82F6', secondary: '#7C3AED' },
  ebooks: { primary: '#7C3AED', secondary: '#2563EB' },
  courses: { primary: '#2563EB', secondary: '#3B82F6' },
  social: { primary: '#7C3AED', secondary: '#A78BFA' },
  design: { primary: '#2563EB', secondary: '#7C3AED' },
  productivity: { primary: '#3B82F6', secondary: '#7C3AED' }
};

// Runtime fallback artwork (used only if a local SVG fails to load)
function generateFallback(category, name, width = 800, height = 600) {
  const c = CATEGORY_COLORS[category] || CATEGORY_COLORS.ai;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.primary}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${c.secondary}" stop-opacity="0.06"/>
    </linearGradient></defs>
    <rect width="${width}" height="${height}" fill="#F8FAFC"/>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="18" fill="none" stroke="${c.primary}" stroke-opacity="0.25" stroke-width="2"/>
    <text x="${width / 2}" y="${height / 2}" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="${c.primary}" text-anchor="middle">${name}</text>
    <text x="${width / 2}" y="${height / 2 + 30}" font-family="Inter, sans-serif" font-size="13" fill="${c.primary}" text-anchor="middle" opacity="0.7">DIGIMART DEMO SAMPLE</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

const img = (slug, variant) => `assets/products/${slug}-${variant}.svg`;

const PRODUCTS = [
  {
    id: 1,
    name: 'Nebula AI Workspace',
    slug: 'nebula-ai-workspace',
    keywords: 'ai assistant agent chat content writing prompts automation',
    category: 'ai',
    categoryLabel: 'AI Tools',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 2499,
    originalPrice: 4999,
    rating: 0,
    reviews: 0,
    format: 'Web app (sample)',
    fileSize: '—',
    image: img('nebula-ai-workspace', 'cover'),
    gallery: [
      img('nebula-ai-workspace', 'cover'),
      img('nebula-ai-workspace', 'screen-1'),
      img('nebula-ai-workspace', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Nebula AI Workspace showing a chat-style agent interface',
    shortDescription: 'Sample: an AI assistant workspace for drafting, rewriting and structuring everyday business content.',
    description: 'Sample product for demonstration only. Nebula AI Workspace illustrates a conversational AI workspace with reusable prompts, team workspaces and export-ready outputs. Features shown are illustrative and no purchase is possible.',
    features: [
      'Sample: reusable prompt library',
      'Sample: rewrite and summarise actions',
      'Sample: team workspace view',
      'Sample: export to PDF and Markdown'
    ],
    includes: ['Sample: web application access', 'Sample: prompt starter pack', 'Sample: setup guide'],
    systemRequirements: 'Sample: modern web browser and internet connection',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 2,
    name: 'Pulseboard AI Analytics',
    slug: 'pulseboard-ai-analytics',
    keywords: 'ai analytics dashboard reporting insights charts data',
    category: 'ai',
    categoryLabel: 'AI Tools',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 3299,
    originalPrice: 6499,
    rating: 0,
    reviews: 0,
    format: 'Web app + desktop app (sample)',
    fileSize: '—',
    image: img('pulseboard-ai-analytics', 'cover'),
    gallery: [
      img('pulseboard-ai-analytics', 'cover'),
      img('pulseboard-ai-analytics', 'screen-1'),
      img('pulseboard-ai-analytics', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Pulseboard AI Analytics showing an insights dashboard with charts',
    shortDescription: 'Sample: an AI reporting dashboard that turns raw business data into plain-language insights.',
    description: 'Sample product for demonstration only. Pulseboard AI Analytics shows a reporting dashboard with sample KPI tiles, trend charts and an AI summary panel. All figures on screen are illustrative placeholders.',
    features: [
      'Sample: AI-generated weekly summary',
      'Sample: KPI tiles and trend charts',
      'Sample: CSV and spreadsheet import',
      'Sample: scheduled email digest'
    ],
    includes: ['Sample: dashboard access', 'Sample: sample dataset', 'Sample: onboarding checklist'],
    systemRequirements: 'Sample: modern web browser',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 3,
    name: 'Ledgerly Invoicing Suite',
    slug: 'ledgerly-invoicing-suite',
    keywords: 'saas invoicing billing clients business software finance',
    category: 'saas',
    categoryLabel: 'SaaS & Business Software',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 1899,
    originalPrice: 3499,
    rating: 0,
    reviews: 0,
    format: 'Web app (sample)',
    fileSize: '—',
    image: img('ledgerly-invoicing-suite', 'cover'),
    gallery: [
      img('ledgerly-invoicing-suite', 'cover'),
      img('ledgerly-invoicing-suite', 'screen-1'),
      img('ledgerly-invoicing-suite', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Ledgerly Invoicing Suite showing a billing dashboard with charts',
    shortDescription: 'Sample: invoicing, client billing and payment reminders for small service businesses.',
    description: 'Sample product for demonstration only. Ledgerly Invoicing Suite demonstrates an invoicing workflow: create, send and track invoices, plus reminders and simple revenue views. No payment processing is connected in this demo.',
    features: [
      'Sample: branded invoice builder',
      'Sample: recurring invoice templates',
      'Sample: payment reminder schedule',
      'Sample: client list and notes'
    ],
    includes: ['Sample: web application access', 'Sample: invoice templates', 'Sample: setup walkthrough'],
    systemRequirements: 'Sample: modern web browser',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 4,
    name: 'Vertex Agency Website Kit',
    slug: 'vertex-agency-website-kit',
    keywords: 'website template html css agency landing responsive pages',
    category: 'web',
    categoryLabel: 'Website Templates',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 1499,
    originalPrice: 2999,
    rating: 0,
    reviews: 0,
    format: 'HTML, CSS, images (sample)',
    fileSize: '24 MB (sample)',
    image: img('vertex-agency-website-kit', 'cover'),
    gallery: [
      img('vertex-agency-website-kit', 'cover'),
      img('vertex-agency-website-kit', 'screen-1'),
      img('vertex-agency-website-kit', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Vertex Agency Website Kit shown inside a browser window',
    shortDescription: 'Sample: a clean multi-section agency website template with responsive layouts.',
    description: 'Sample product for demonstration only. Vertex Agency Website Kit shows how a structured agency site can look: hero, services, about, testimonials and contact sections, all responsive. The template is fictional sample artwork.',
    features: [
      'Sample: 6 ready-made page layouts',
      'Sample: mobile, tablet and desktop views',
      'Sample: accessible colour contrast',
      'Sample: contact form markup'
    ],
    includes: ['Sample: HTML and CSS files', 'Sample: placeholder imagery', 'Sample: setup notes'],
    systemRequirements: 'Sample: any modern static host',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 5,
    name: 'Bloom Storefront Theme',
    slug: 'bloom-storefront-theme',
    keywords: 'website template storefront ecommerce shop theme catalogue',
    category: 'web',
    categoryLabel: 'Website Templates',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 1299,
    originalPrice: 2499,
    rating: 0,
    reviews: 0,
    format: 'Theme files (sample)',
    fileSize: '18 MB (sample)',
    image: img('bloom-storefront-theme', 'cover'),
    gallery: [
      img('bloom-storefront-theme', 'cover'),
      img('bloom-storefront-theme', 'screen-1'),
      img('bloom-storefront-theme', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Bloom Storefront Theme showing an online store layout',
    shortDescription: 'Sample: a storefront theme focused on product grids, filters and simple product pages.',
    description: 'Sample product for demonstration only. Bloom Storefront Theme demonstrates a catalogue-first layout with filtering, product pages and a checkout handoff layout. No checkout is connected in this demo.',
    features: [
      'Sample: product grid and filter layout',
      'Sample: product detail page layout',
      'Sample: cart drawer design',
      'Sample: responsive category menus'
    ],
    includes: ['Sample: theme files', 'Sample: sample product data', 'Sample: configuration notes'],
    systemRequirements: 'Sample: modern browser',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 6,
    name: 'The Growth Playbook 2026',
    slug: 'growth-playbook-2026',
    keywords: 'ebook guide growth marketing strategy pdf planning',
    category: 'ebooks',
    categoryLabel: 'E-books & Guides',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 599,
    originalPrice: 1199,
    rating: 0,
    reviews: 0,
    format: 'PDF + EPUB (sample)',
    fileSize: '9 MB (sample)',
    image: img('growth-playbook-2026', 'cover'),
    gallery: [
      img('growth-playbook-2026', 'cover'),
      img('growth-playbook-2026', 'screen-1'),
      img('growth-playbook-2026', 'screen-2')
    ],
    imageAlt: 'Sample mockup of an eBook cover titled The Growth Playbook 2026',
    shortDescription: 'Sample: a practical guide covering acquisition, retention and simple growth loops.',
    description: 'Sample product for demonstration only. The Growth Playbook 2026 shows how a structured guide is presented inside Digimart: chapters on acquisition, retention, pricing and a monthly planning framework. Contents are illustrative.',
    features: [
      'Sample: 14 chapters with checklists',
      'Sample: templates and worksheets',
      'Sample: worked examples',
      'Sample: PDF and EPUB formats'
    ],
    includes: ['Sample: PDF and EPUB files', 'Sample: printable worksheets'],
    systemRequirements: 'Sample: any PDF or EPUB reader',
    licenseType: 'Sample licence — personal use (demo)',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 7,
    name: 'SEO Blueprint for Founders',
    slug: 'seo-blueprint-founders',
    keywords: 'ebook guide seo search ranking pdf founders traffic',
    category: 'ebooks',
    categoryLabel: 'E-books & Guides',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 499,
    originalPrice: 999,
    rating: 0,
    reviews: 0,
    format: 'PDF (sample)',
    fileSize: '6 MB (sample)',
    image: img('seo-blueprint-founders', 'cover'),
    gallery: [
      img('seo-blueprint-founders', 'cover'),
      img('seo-blueprint-founders', 'screen-1'),
      img('seo-blueprint-founders', 'screen-2')
    ],
    imageAlt: 'Sample mockup of an eBook cover titled SEO Blueprint for Founders',
    shortDescription: 'Sample: a focused SEO guide covering technical basics, content and measurement.',
    description: 'Sample product for demonstration only. SEO Blueprint for Founders illustrates a concise guide format with section-by-section progress tracking. No ranking or traffic results are claimed.',
    features: [
      'Sample: technical SEO basics',
      'Sample: keyword research workflow',
      'Sample: content brief template',
      'Sample: measurement checklist'
    ],
    includes: ['Sample: PDF file', 'Sample: content brief template'],
    systemRequirements: 'Sample: any PDF reader',
    licenseType: 'Sample licence — personal use (demo)',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 8,
    name: 'Product Design Masterclass',
    slug: 'product-design-masterclass',
    keywords: 'course video design ui ux classes training lessons',
    category: 'courses',
    categoryLabel: 'Online Courses',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 3999,
    originalPrice: 7999,
    rating: 0,
    reviews: 0,
    format: 'Video lessons + files (sample)',
    fileSize: '2.4 GB (sample)',
    image: img('product-design-masterclass', 'cover'),
    gallery: [
      img('product-design-masterclass', 'cover'),
      img('product-design-masterclass', 'screen-1'),
      img('product-design-masterclass', 'screen-2')
    ],
    imageAlt: 'Sample mockup of a course card for Product Design Masterclass with a lesson list',
    shortDescription: 'Sample: a structured video course covering research, flows, UI and handoff.',
    description: 'Sample product for demonstration only. Product Design Masterclass shows how a course listing appears: module list, lesson progress and downloadable resources. Duration and curriculum shown are illustrative.',
    features: [
      'Sample: 6 modules with short lessons',
      'Sample: project files for practice',
      'Sample: design critique walkthroughs',
      'Sample: completion checklist'
    ],
    includes: ['Sample: video lessons', 'Sample: project files', 'Sample: transcript notes'],
    systemRequirements: 'Sample: streaming-capable device',
    licenseType: 'Sample licence — personal use (demo)',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 9,
    name: 'Freelance Finance Essentials',
    slug: 'freelance-finance-essentials',
    keywords: 'course video finance freelancing invoicing taxes lessons',
    category: 'courses',
    categoryLabel: 'Online Courses',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 2499,
    originalPrice: 4999,
    rating: 0,
    reviews: 0,
    format: 'Video lessons + templates (sample)',
    fileSize: '1.6 GB (sample)',
    image: img('freelance-finance-essentials', 'cover'),
    gallery: [
      img('freelance-finance-essentials', 'cover'),
      img('freelance-finance-essentials', 'screen-1'),
      img('freelance-finance-essentials', 'screen-2')
    ],
    imageAlt: 'Sample mockup of a course card for Freelance Finance Essentials with a lesson list',
    shortDescription: 'Sample: pricing, contracts, taxes and cash flow explained for independent workers.',
    description: 'Sample product for demonstration only. Freelance Finance Essentials presents a short course on quoting work, invoicing, expenses and savings. Content is illustrative and is not financial advice.',
    features: [
      'Sample: pricing and quoting methods',
      'Sample: contract clause checklist',
      'Sample: expense tracking template',
      'Sample: monthly review routine'
    ],
    includes: ['Sample: video lessons', 'Sample: finance templates'],
    systemRequirements: 'Sample: streaming-capable device',
    licenseType: 'Sample licence — personal use (demo)',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 10,
    name: 'InstaGrid Social Media Kit',
    slug: 'instagrid-social-media-kit',
    keywords: 'social media templates instagram posts grid kit',
    category: 'social',
    categoryLabel: 'Social Media Templates',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 899,
    originalPrice: 1799,
    rating: 0,
    reviews: 0,
    format: 'Editable templates (sample)',
    fileSize: '48 MB (sample)',
    image: img('instagrid-social-media-kit', 'cover'),
    gallery: [
      img('instagrid-social-media-kit', 'cover'),
      img('instagrid-social-media-kit', 'screen-1'),
      img('instagrid-social-media-kit', 'screen-2')
    ],
    imageAlt: 'Sample mockup of InstaGrid Social Media Kit showing a grid of social post templates',
    shortDescription: 'Sample: a set of editable social post templates in a consistent grid layout.',
    description: 'Sample product for demonstration only. InstaGrid Social Media Kit shows a coordinated set of post templates so a profile grid stays visually consistent. Template styling is fictional sample artwork.',
    features: [
      'Sample: 90 editable post layouts',
      'Sample: 3 colour systems',
      'Sample: story and highlight sizes',
      'Sample: quick-start guide'
    ],
    includes: ['Sample: editable template files', 'Sample: usage guide'],
    systemRequirements: 'Sample: any modern design app',
    licenseType: 'Sample licence — personal and client work (demo)',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 11,
    name: 'Nova Brand Asset Library',
    slug: 'nova-brand-asset-library',
    keywords: 'design resources brand logo icons vector assets kit',
    category: 'design',
    categoryLabel: 'Design Resources',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 1799,
    originalPrice: 3499,
    rating: 0,
    reviews: 0,
    format: 'SVG, PDF, Figma-ready (sample)',
    fileSize: '310 MB (sample)',
    image: img('nova-brand-asset-library', 'cover'),
    gallery: [
      img('nova-brand-asset-library', 'cover'),
      img('nova-brand-asset-library', 'screen-1'),
      img('nova-brand-asset-library', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Nova Brand Asset Library showing colour swatches and layout compositions',
    shortDescription: 'Sample: logos, colour systems, icon sets and layout blocks for small brands.',
    description: 'Sample product for demonstration only. Nova Brand Asset Library demonstrates a structured design kit: colour swatches, logo lock-ups, icon sets and layout blocks that scale across screens.',
    features: [
      'Sample: logo lock-up variations',
      'Sample: colour system with contrast guidance',
      'Sample: 300+ vector icons',
      'Sample: layout blocks for web and print'
    ],
    includes: ['Sample: vector asset files', 'Sample: brand guidelines sheet'],
    systemRequirements: 'Sample: any vector-capable app',
    licenseType: 'Sample licence — personal and client work (demo)',
    delivery: 'Sample delivery — instant download (demo)',
    refundPolicy: 'Sample policy — to be defined'
  },
  {
    id: 12,
    name: 'Flowdesk Workflow OS',
    slug: 'flowdesk-workflow-os',
    keywords: 'productivity workflow kanban tasks board organiser',
    category: 'productivity',
    categoryLabel: 'Productivity Tools',
    badge: 'sample',
    isDemo: true,
    status: 'Demo only — not available for purchase',
    price: 1499,
    originalPrice: 2999,
    rating: 0,
    reviews: 0,
    format: 'Web app (sample)',
    fileSize: '—',
    image: img('flowdesk-workflow-os', 'cover'),
    gallery: [
      img('flowdesk-workflow-os', 'cover'),
      img('flowdesk-workflow-os', 'screen-1'),
      img('flowdesk-workflow-os', 'screen-2')
    ],
    imageAlt: 'Sample mockup of Flowdesk Workflow OS showing a three-column workflow board',
    shortDescription: 'Sample: a simple workflow board with columns, task cards and reusable checklists.',
    description: 'Sample product for demonstration only. Flowdesk Workflow OS shows a lightweight workflow board: columns, task cards, checklists and saved views. Board contents shown are sample data.',
    features: [
      'Sample: columns, cards and checklists',
      'Sample: saved views and filters',
      'Sample: recurring task templates',
      'Sample: keyboard-first shortcuts'
    ],
    includes: ['Sample: web application access', 'Sample: starter board template'],
    systemRequirements: 'Sample: modern web browser',
    licenseType: 'Sample licence — to be defined',
    delivery: 'Sample delivery — instant access (demo)',
    refundPolicy: 'Sample policy — to be defined'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, generateFallback };
}