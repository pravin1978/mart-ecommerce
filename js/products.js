// ============================================
// DIGIMART — DEMO SAMPLE PRODUCTS
// All products are clearly labeled SAMPLES for demo purposes.
// No real purchases are available. Prices are illustrative only.
// ============================================

const CATEGORY_COLORS = {
  software: { bg: '#eef2ff', primary: '#4f46e5', secondary: '#818cf8', icon: 'code' },
  courses: { bg: '#ecfdf5', primary: '#059669', secondary: '#34d399', icon: 'academic' },
  ebooks: { bg: '#fff7ed', primary: '#d97706', secondary: '#fbbf24', icon: 'book' },
  templates: { bg: '#f0f9ff', primary: '#0284c7', secondary: '#38bdf8', icon: 'template' },
  graphics: { bg: '#fdf2f8', primary: '#db2777', secondary: '#f472b6', icon: 'photo' },
  audio: { bg: '#f5f3ff', primary: '#6d28d9', secondary: '#a78bfa', icon: 'music' },
  ai: { bg: '#faf5ff', primary: '#7c3aed', secondary: '#a78bfa', icon: 'sparkles' }
};

function generatePlaceholder(category, name, width = 600, height = 400) {
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.software;
  
  const icons = {
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    academic: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    template: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    photo: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    sparkles: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
  };

  const iconPath = icons[colors.icon] || icons.code;
  const words = name.split(' ');
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const line2 = words.slice(Math.ceil(words.length / 2)).join(' ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:0.05"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad)"/>
  <rect width="${width}" height="${height}" fill="none" stroke="${colors.primary}" stroke-opacity="0.1" stroke-width="2" rx="12"/>
  <g transform="translate(${width/2 - 40}, ${height/2 - 50})" stroke="${colors.primary}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.6">
    ${iconPath}
  </g>
  <text x="${width/2}" y="${height/2 + 30}" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${colors.primary}" text-anchor="middle" opacity="0.8">${line1}</text>
  ${line2 ? `<text x="${width/2}" y="${height/2 + 50}" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${colors.primary}" text-anchor="middle" opacity="0.6">${line2}</text>` : ''}
  <text x="${width/2}" y="${height - 20}" font-family="Inter, sans-serif" font-size="10" fill="${colors.primary}" text-anchor="middle" opacity="0.4">DIGIMART DEMO</text>
</svg>`;

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function generateGallery(category, name) {
  return [
    generatePlaceholder(category, name, 800, 600),
    generatePlaceholder(category, name + ' — Preview 2', 800, 600),
    generatePlaceholder(category, name + ' — Preview 3', 800, 600)
  ];
}

// ============================================
// SAMPLE PRODUCTS — DEMO ONLY
// These are illustrative examples, not real products.
// ============================================

const PRODUCTS = [
  {
    id: 1,
    name: "AI Productivity Toolkit",
    slug: "ai-productivity-toolkit",
    category: "ai",
    categoryLabel: "AI Tools",
    price: 1499,
    originalPrice: 2999,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("ai", "AI Productivity Toolkit"),
    gallery: generateGallery("ai", "AI Productivity Toolkit"),
    shortDescription: "Sample: AI-powered tools for task management, content generation, and workflow automation.",
    description: "This is a SAMPLE product for demonstration purposes. The AI Productivity Toolkit showcases how AI-powered tools can help with task management, content generation, and workflow automation. Actual features and availability will be confirmed after approval.",
    features: [
      "Sample feature: AI task prioritization",
      "Sample feature: Content generation templates",
      "Sample feature: Workflow automation rules",
      "Sample feature: Analytics dashboard"
    ],
    includes: [
      "Sample: Digital toolkit access",
      "Sample: User documentation",
      "Sample: Email support (demo)"
    ],
    systemRequirements: "Sample requirements: Modern web browser, internet connection",
    licenseType: "Sample license — to be defined",
    delivery: "Sample delivery — instant access (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 2,
    name: "Digital Marketing eBook",
    slug: "digital-marketing-ebook",
    category: "ebooks",
    categoryLabel: "eBooks",
    price: 799,
    originalPrice: 1499,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("ebooks", "Digital Marketing eBook"),
    gallery: generateGallery("ebooks", "Digital Marketing eBook"),
    shortDescription: "Sample: Comprehensive guide to SEO, social media, email marketing, and paid advertising.",
    description: "This is a SAMPLE product for demonstration purposes. The Digital Marketing eBook showcases a comprehensive guide format covering SEO, social media, email marketing, and paid advertising strategies. Actual content and depth will be confirmed after approval.",
    features: [
      "Sample: 200+ page guide format",
      "Sample: SEO & keyword research chapters",
      "Sample: Social media strategy sections",
      "Sample: Email marketing templates"
    ],
    includes: [
      "Sample: PDF, EPUB, MOBI formats",
      "Sample: Bonus worksheets",
      "Sample: Lifetime updates (demo)"
    ],
    systemRequirements: "Sample: Any device with eBook reader support",
    licenseType: "Sample license — personal use (demo)",
    delivery: "Sample delivery — instant download (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 3,
    name: "Social Media Template Pack",
    slug: "social-media-templates",
    category: "templates",
    categoryLabel: "Templates",
    price: 599,
    originalPrice: 1199,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("templates", "Social Media Templates"),
    gallery: generateGallery("templates", "Social Media Templates"),
    shortDescription: "Sample: 100+ customizable templates for Instagram, Facebook, and LinkedIn.",
    description: "This is a SAMPLE product for demonstration purposes. The Social Media Template Pack showcases a collection of customizable templates for major social media platforms. Actual designs and formats will be confirmed after approval.",
    features: [
      "Sample: 100+ template designs",
      "Sample: Instagram, Facebook, LinkedIn formats",
      "Sample: Canva & Photoshop compatible",
      "Sample: Story & post formats"
    ],
    includes: [
      "Sample: Canva template links",
      "Sample: PSD source files",
      "Sample: Usage guide (demo)"
    ],
    systemRequirements: "Sample: Canva (free) or Adobe Photoshop",
    licenseType: "Sample license — commercial use (demo)",
    delivery: "Sample delivery — instant download (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 4,
    name: "Online Learning Bundle",
    slug: "online-learning-bundle",
    category: "courses",
    categoryLabel: "Courses",
    price: 2999,
    originalPrice: 5999,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("courses", "Online Learning Bundle"),
    gallery: generateGallery("courses", "Online Learning Bundle"),
    shortDescription: "Sample: Multi-course bundle covering web development, design, and data science.",
    description: "This is a SAMPLE product for demonstration purposes. The Online Learning Bundle showcases a multi-course package format. Actual courses, instructors, and content depth will be confirmed after approval.",
    features: [
      "Sample: 40+ hours of video content",
      "Sample: Multiple course modules",
      "Sample: Project-based learning",
      "Sample: Certificate of completion (demo)"
    ],
    includes: [
      "Sample: Video course access",
      "Sample: Project files",
      "Sample: Community access (demo)"
    ],
    systemRequirements: "Sample: Modern browser, stable internet",
    licenseType: "Sample license — personal learning (demo)",
    delivery: "Sample delivery — instant access (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 5,
    name: "Website UI Kit",
    slug: "website-ui-kit",
    category: "templates",
    categoryLabel: "Templates",
    price: 899,
    originalPrice: 1799,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("templates", "Website UI Kit"),
    gallery: generateGallery("templates", "Website UI Kit"),
    shortDescription: "Sample: 50+ premium UI components and page templates for modern websites.",
    description: "This is a SAMPLE product for demonstration purposes. The Website UI Kit showcases a collection of modern UI components and page templates. Actual components and frameworks will be confirmed after approval.",
    features: [
      "Sample: 50+ UI components",
      "Sample: Figma source files",
      "Sample: Responsive design system",
      "Sample: Dark & light mode variants"
    ],
    includes: [
      "Sample: Figma file access",
      "Sample: Component documentation",
      "Sample: Commercial license (demo)"
    ],
    systemRequirements: "Sample: Figma (free tier)",
    licenseType: "Sample license — commercial use (demo)",
    delivery: "Sample delivery — instant download (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 6,
    name: "Creator Graphics Bundle",
    slug: "creator-graphics-bundle",
    category: "graphics",
    categoryLabel: "Graphics",
    price: 699,
    originalPrice: 1399,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("graphics", "Creator Graphics Bundle"),
    gallery: generateGallery("graphics", "Creator Graphics Bundle"),
    shortDescription: "Sample: 500+ stock photos, icons, and illustrations for content creators.",
    description: "This is a SAMPLE product for demonstration purposes. The Creator Graphics Bundle showcases a collection of visual assets for content creators. Actual assets and licensing will be confirmed after approval.",
    features: [
      "Sample: 500+ graphic assets",
      "Sample: Stock photos & illustrations",
      "Sample: Icon collection",
      "Sample: Commercial use license (demo)"
    ],
    includes: [
      "Sample: High-res image files",
      "Sample: Icon font files",
      "Sample: Usage guide (demo)"
    ],
    systemRequirements: "Sample: Any design software",
    licenseType: "Sample license — commercial use (demo)",
    delivery: "Sample delivery — instant download (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 7,
    name: "Business Automation Toolkit",
    slug: "business-automation-toolkit",
    category: "software",
    categoryLabel: "Software",
    price: 1999,
    originalPrice: 3999,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("software", "Business Automation Toolkit"),
    gallery: generateGallery("software", "Business Automation Toolkit"),
    shortDescription: "Sample: Automation templates and tools for streamlining business workflows.",
    description: "This is a SAMPLE product for demonstration purposes. The Business Automation Toolkit showcases automation templates for common business workflows. Actual tools and integrations will be confirmed after approval.",
    features: [
      "Sample: Workflow automation templates",
      "Sample: Email sequence builders",
      "Sample: Task management integrations",
      "Sample: Analytics & reporting (demo)"
    ],
    includes: [
      "Sample: Template library access",
      "Sample: Setup documentation",
      "Sample: Email support (demo)"
    ],
    systemRequirements: "Sample: Modern web browser",
    licenseType: "Sample license — commercial use (demo)",
    delivery: "Sample delivery — instant access (demo)",
    refundPolicy: "Sample policy — to be defined"
  },
  {
    id: 8,
    name: "Video Editing Presets",
    slug: "video-editing-presets",
    category: "audio",
    categoryLabel: "Audio & Video",
    price: 499,
    originalPrice: 999,
    rating: 0,
    reviews: 0,
    badge: "sample",
    isDemo: true,
    image: generatePlaceholder("audio", "Video Editing Presets"),
    gallery: generateGallery("audio", "Video Editing Presets"),
    shortDescription: "Sample: 200+ color grading presets, transitions, and effects for video editors.",
    description: "This is a SAMPLE product for demonstration purposes. The Video Editing Presets pack showcases a collection of color grading presets and effects. Actual presets and compatibility will be confirmed after approval.",
    features: [
      "Sample: 200+ color presets",
      "Sample: Transition effects",
      "Sample: LUT files included",
      "Sample: Multiple editor compatibility (demo)"
    ],
    includes: [
      "Sample: Preset files",
      "Sample: Installation guide",
      "Sample: Commercial license (demo)"
    ],
    systemRequirements: "Sample: Premiere Pro, DaVinci Resolve, or Final Cut Pro",
    licenseType: "Sample license — commercial use (demo)",
    delivery: "Sample delivery — instant download (demo)",
    refundPolicy: "Sample policy — to be defined"
  }
];

const CATEGORIES = [
  { id: 'ai', label: 'AI Tools', icon: 'sparkles', count: PRODUCTS.filter(p => p.category === 'ai').length },
  { id: 'ebooks', label: 'eBooks', icon: 'book-open', count: PRODUCTS.filter(p => p.category === 'ebooks').length },
  { id: 'templates', label: 'Templates', icon: 'template', count: PRODUCTS.filter(p => p.category === 'templates').length },
  { id: 'courses', label: 'Courses', icon: 'academic-cap', count: PRODUCTS.filter(p => p.category === 'courses').length },
  { id: 'graphics', label: 'Graphics', icon: 'photo', count: PRODUCTS.filter(p => p.category === 'graphics').length },
  { id: 'software', label: 'Software', icon: 'code', count: PRODUCTS.filter(p => p.category === 'software').length },
  { id: 'audio', label: 'Audio & Video', icon: 'music', count: PRODUCTS.filter(p => p.category === 'audio').length }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES, generatePlaceholder, generateGallery };
}
