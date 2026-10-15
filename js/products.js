// ============================================
// DIGIMART PRODUCT DATA
// Uses locally generated SVG placeholders (no external dependencies)
// ============================================

// Import image generator (inline for browser compatibility)
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
  <text x="${width/2}" y="${height - 20}" font-family="Inter, sans-serif" font-size="10" fill="${colors.primary}" text-anchor="middle" opacity="0.4">DIGIMART</text>
</svg>`;

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function generateGallery(category, name) {
  return [
    generatePlaceholder(category, name, 800, 600),
    generatePlaceholder(category, name + ' — Screenshot 2', 800, 600),
    generatePlaceholder(category, name + ' — Screenshot 3', 800, 600)
  ];
}

const PRODUCTS = [
  {
    id: 1,
    name: "ProEditor — Video Editing Software",
    slug: "proeditor-video-editing",
    category: "software",
    categoryLabel: "Software",
    price: 799,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 523,
    badge: "bestseller",
    image: generatePlaceholder("software", "ProEditor Video Editing"),
    gallery: generateGallery("software", "ProEditor Video Editing"),
    shortDescription: "Professional video editing suite with 4K support, effects, and color grading",
    description: "ProEditor is a comprehensive video editing solution designed for content creators, filmmakers, and marketing professionals. Edit stunning 4K videos with professional-grade tools, transitions, and color correction.",
    features: [
      "4K & 8K video editing support",
      "Advanced color grading tools",
      "500+ transitions and effects",
      "Multi-track timeline editing",
      "Audio mixing and enhancement",
      "Hardware acceleration support",
      "Export to all major formats",
      "Lifetime free updates"
    ],
    includes: [
      "ProEditor software license (1 PC)",
      "500+ premium transitions pack",
      "Color grading LUTs collection",
      "Audio effects library",
      "User manual & quick start guide",
      "Free updates for life"
    ],
    systemRequirements: "Windows 10/11 (64-bit) or macOS 12+, 8GB RAM (16GB recommended), 2GB GPU with 4GB VRAM, 5GB disk space",
    licenseType: "Single-user commercial license",
    delivery: "Instant download after purchase",
    refundPolicy: "14-day money-back guarantee"
  },
  {
    id: 2,
    name: "Full-Stack Web Development Bootcamp",
    slug: "fullstack-web-dev-course",
    category: "courses",
    categoryLabel: "Courses",
    price: 4999,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 2341,
    badge: "bestseller",
    image: generatePlaceholder("courses", "Full-Stack Web Development"),
    gallery: generateGallery("courses", "Full-Stack Web Development"),
    shortDescription: "Complete bootcamp: HTML, CSS, JS, React, Node.js, MongoDB — 60+ hours",
    description: "Transform your career with the most comprehensive full-stack web development course. Learn from industry experts and build real-world projects that showcase your skills to employers.",
    features: [
      "60+ hours of HD video content",
      "12 real-world projects included",
      "HTML, CSS, JavaScript, React, Node.js",
      "Database design with MongoDB",
      "Authentication & authorization",
      "Deployment & DevOps basics",
      "Certificate of completion",
      "Lifetime access & updates"
    ],
    includes: [
      "60+ hours video content",
      "12 project source codes",
      "Course completion certificate",
      "Private Discord community access",
      "1-on-1 mentorship session",
      "Resume review & career guidance",
      "Lifetime access to all updates"
    ],
    systemRequirements: "Any modern browser, 8GB RAM recommended, stable internet connection",
    licenseType: "Personal learning license",
    delivery: "Instant access after purchase",
    refundPolicy: "30-day money-back guarantee"
  },
  {
    id: 3,
    name: "The Art of Productivity — eBook",
    slug: "art-of-productivity-ebook",
    category: "ebooks",
    categoryLabel: "eBooks",
    price: 1299,
    originalPrice: null,
    rating: 4.5,
    reviews: 189,
    badge: null,
    image: generatePlaceholder("ebooks", "Art of Productivity"),
    gallery: generateGallery("ebooks", "Art of Productivity"),
    shortDescription: "Learn proven productivity systems to 2x your output",
    description: "Discover the exact productivity systems used by top performers to accomplish more in less time. This comprehensive guide covers time management, focus techniques, habit building, and workflow optimization.",
    features: [
      "200+ pages of actionable content",
      "Proven productivity frameworks",
      "Real-world case studies",
      "Printable worksheets included",
      "Digital & print formats",
      "Lifetime updates included"
    ],
    includes: [
      "PDF, EPUB, and MOBI formats",
      "Printable productivity worksheets",
      "Habit tracker templates",
      "Bonus: Weekly planning system",
      "Free lifetime updates"
    ],
    systemRequirements: "Any device with PDF/eBook reader support",
    licenseType: "Personal use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 4,
    name: "UI Dashboard Template Pack",
    slug: "ui-dashboard-templates",
    category: "templates",
    categoryLabel: "Templates",
    price: 2999,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 342,
    badge: "sale",
    image: generatePlaceholder("templates", "UI Dashboard Templates"),
    gallery: generateGallery("templates", "UI Dashboard Templates"),
    shortDescription: "50+ premium dashboard templates for web apps and admin panels",
    description: "Build stunning admin panels and dashboards in minutes with our premium template collection. Each template is fully responsive, customizable, and built with modern frameworks.",
    features: [
      "50+ unique dashboard templates",
      "React, Vue & Angular versions",
      "Fully responsive design",
      "Dark & light mode support",
      "Figma source files included",
      "Tailwind CSS & Bootstrap 5",
      "Authentication pages included",
      "Free lifetime updates"
    ],
    includes: [
      "50+ dashboard templates (3 frameworks)",
      "Figma design source files",
      "Authentication & login pages",
      "500+ UI components",
      "Documentation & tutorials",
      "Commercial use license",
      "Free lifetime updates"
    ],
    systemRequirements: "Node.js 16+, modern code editor, basic knowledge of React/Vue/Angular",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "14-day money-back guarantee"
  },
  {
    id: 5,
    name: "Icon Pack — 2000+ Premium Icons",
    slug: "premium-icon-pack",
    category: "graphics",
    categoryLabel: "Graphics",
    price: 1999,
    originalPrice: null,
    rating: 4.6,
    reviews: 278,
    badge: null,
    image: generatePlaceholder("graphics", "Premium Icon Pack"),
    gallery: generateGallery("graphics", "Premium Icon Pack"),
    shortDescription: "Beautifully crafted vector icons for web and mobile apps",
    description: "A comprehensive collection of 2000+ hand-crafted vector icons designed for modern web and mobile applications. Available in multiple formats and styles to match any design system.",
    features: [
      "2000+ unique icons",
      "SVG, PNG, PDF & Figma formats",
      "4 style variants (outline, solid, duotone, bulk)",
      "Consistent 24x24 grid",
      "Optimized for web & mobile",
      "Commercial use license",
      "Free lifetime updates"
    ],
    includes: [
      "2000+ icons in all formats",
      "Figma & Sketch files",
      "SVG sprite sheets",
      "Icon font files",
      "Commercial use license",
      "Free lifetime updates"
    ],
    systemRequirements: "Any design software (Figma, Sketch, Adobe XD)",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 6,
    name: "Lo-Fi Beats Collection Vol. 3",
    slug: "lofi-beats-vol3",
    category: "audio",
    categoryLabel: "Audio",
    price: 999,
    originalPrice: null,
    rating: 4.4,
    reviews: 156,
    badge: null,
    image: generatePlaceholder("audio", "Lo-Fi Beats Collection"),
    gallery: generateGallery("audio", "Lo-Fi Beats Collection"),
    shortDescription: "30 royalty-free lo-fi tracks for content creators",
    description: "A curated collection of 30 high-quality lo-fi tracks perfect for YouTube videos, podcasts, streams, and creative projects. All tracks are royalty-free for commercial use.",
    features: [
      "30 high-quality lo-fi tracks",
      "Royalty-free for commercial use",
      "WAV & MP3 formats",
      "Stems included for remixing",
      "Consistent BPM & key metadata",
      "YouTube & Twitch safe"
    ],
    includes: [
      "30 tracks in WAV (24-bit) & MP3",
      "Stem files for each track",
      "BPM & key metadata sheet",
      "Commercial use license",
      "Lifetime usage rights"
    ],
    systemRequirements: "Any DAW or audio editing software",
    licenseType: "Commercial royalty-free license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 7,
    name: "PhotoMaster Pro — AI Photo Editor",
    slug: "photomaster-pro-editor",
    category: "software",
    categoryLabel: "Software",
    price: 4999,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 891,
    badge: "sale",
    image: generatePlaceholder("software", "PhotoMaster Pro Editor"),
    gallery: generateGallery("software", "PhotoMaster Pro Editor"),
    shortDescription: "AI-powered photo editor with presets, filters, and retouching",
    description: "PhotoMaster Pro uses cutting-edge AI to transform your photos with professional-quality edits in seconds. Perfect for photographers, social media managers, and content creators.",
    features: [
      "AI-powered auto enhancement",
      "500+ professional presets",
      "Advanced retouching tools",
      "Batch processing support",
      "RAW file support",
      "Plugin for Photoshop & Lightroom",
      "Cloud sync across devices",
      "Lifetime free updates"
    ],
    includes: [
      "PhotoMaster Pro license (2 devices)",
      "500+ premium presets pack",
      "AI enhancement credits (1 year)",
      "Photoshop & Lightroom plugin",
      "Cloud storage (100GB)",
      "Free updates for life"
    ],
    systemRequirements: "Windows 10/11 or macOS 12+, 8GB RAM, 2GB GPU recommended",
    licenseType: "Single-user commercial license",
    delivery: "Instant download after purchase",
    refundPolicy: "14-day money-back guarantee"
  },
  {
    id: 8,
    name: "Python for Data Science Masterclass",
    slug: "python-data-science-course",
    category: "courses",
    categoryLabel: "Courses",
    price: 5999,
    originalPrice: 24999,
    rating: 4.8,
    reviews: 1567,
    badge: "bestseller",
    image: generatePlaceholder("courses", "Python Data Science"),
    gallery: generateGallery("courses", "Python Data Science"),
    shortDescription: "NumPy, Pandas, Matplotlib, Machine Learning — complete guide",
    description: "Master Python for data science from scratch. This comprehensive course covers everything from Python basics to advanced machine learning, with hands-on projects and real datasets.",
    features: [
      "45+ hours of video content",
      "NumPy, Pandas, Matplotlib, Seaborn",
      "Machine Learning with scikit-learn",
      "Deep learning introduction with TensorFlow",
      "15 real-world projects",
      "Jupyter notebook templates",
      "Certificate of completion",
      "Lifetime access & updates"
    ],
    includes: [
      "45+ hours video content",
      "15 project datasets & notebooks",
      "Cheat sheets & reference guides",
      "Course completion certificate",
      "Private community access",
      "Career guidance session",
      "Lifetime access to all updates"
    ],
    systemRequirements: "Any modern computer, 8GB RAM recommended, Python 3.9+",
    licenseType: "Personal learning license",
    delivery: "Instant access after purchase",
    refundPolicy: "30-day money-back guarantee"
  },
  {
    id: 9,
    name: "Freelance Business Blueprint — eBook",
    slug: "freelance-blueprint-ebook",
    category: "ebooks",
    categoryLabel: "eBooks",
    price: 1499,
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    badge: null,
    image: generatePlaceholder("ebooks", "Freelance Business Blueprint"),
    gallery: generateGallery("ebooks", "Freelance Business Blueprint"),
    shortDescription: "Step-by-step guide to building a successful freelance career",
    description: "Learn how to build a thriving freelance business from scratch. Covers pricing, client acquisition, contracts, taxes, and scaling strategies used by six-figure freelancers.",
    features: [
      "180+ pages of proven strategies",
      "Pricing frameworks & calculators",
      "Client acquisition playbooks",
      "Contract templates included",
      "Tax & finance guidance",
      "Scaling strategies"
    ],
    includes: [
      "PDF, EPUB, and MOBI formats",
      "Contract & proposal templates",
      "Pricing calculator spreadsheet",
      "Client onboarding checklist",
      "Invoice templates",
      "Free lifetime updates"
    ],
    systemRequirements: "Any device with PDF/eBook reader support",
    licenseType: "Personal use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 10,
    name: "Landing Page Template Bundle",
    slug: "landing-page-templates",
    category: "templates",
    categoryLabel: "Templates",
    price: 3499,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 412,
    badge: "sale",
    image: generatePlaceholder("templates", "Landing Page Templates"),
    gallery: generateGallery("templates", "Landing Page Templates"),
    shortDescription: "30 high-converting landing page templates (HTML + React)",
    description: "Launch beautiful, high-converting landing pages in minutes. Each template is built with conversion best practices, fully responsive, and easy to customize for any brand or campaign.",
    features: [
      "30 unique landing page designs",
      "HTML & React versions included",
      "Conversion-optimized layouts",
      "Fully responsive & mobile-first",
      "A/B tested page structures",
      "Fast loading & SEO optimized",
      "Mailchimp & ConvertKit integration",
      "Free lifetime updates"
    ],
    includes: [
      "30 landing page templates (2 versions)",
      "Figma source files",
      "Email capture form integrations",
      "Analytics tracking setup guide",
      "Commercial use license",
      "Free lifetime updates"
    ],
    systemRequirements: "Basic HTML/CSS knowledge, any code editor",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "14-day money-back guarantee"
  },
  {
    id: 11,
    name: "Stock Photo Bundle — 500 Premium Photos",
    slug: "stock-photo-bundle-500",
    category: "graphics",
    categoryLabel: "Graphics",
    price: 3999,
    originalPrice: null,
    rating: 4.7,
    reviews: 189,
    badge: null,
    image: generatePlaceholder("graphics", "Stock Photo Bundle"),
    gallery: generateGallery("graphics", "Stock Photo Bundle"),
    shortDescription: "High-res stock photos for commercial use — lifestyle, nature, business",
    description: "A curated collection of 500 high-resolution stock photos covering lifestyle, nature, business, technology, and abstract themes. All photos are commercially licensed and ready for professional use.",
    features: [
      "500 high-resolution photos",
      "Minimum 6000x4000 resolution",
      "Commercial use license",
      "Diverse categories & themes",
      "Consistent quality & style",
      "Model releases included",
      "Free lifetime updates"
    ],
    includes: [
      "500 high-res photos (JPEG)",
      "Commercial use license",
      "Model & property releases",
      "Category index spreadsheet",
      "Free lifetime updates"
    ],
    systemRequirements: "Any device with sufficient storage (approx. 25GB)",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 12,
    name: "Ambient Music Pack for Videos",
    slug: "ambient-music-pack",
    category: "audio",
    categoryLabel: "Audio",
    price: 1499,
    originalPrice: null,
    rating: 4.3,
    reviews: 98,
    badge: null,
    image: generatePlaceholder("audio", "Ambient Music Pack"),
    gallery: generateGallery("audio", "Ambient Music Pack"),
    shortDescription: "25 ambient tracks perfect for YouTube, podcasts, and videos",
    description: "A versatile collection of 25 ambient music tracks designed for video content, podcasts, meditation apps, and background use. Each track is professionally mixed and mastered.",
    features: [
      "25 ambient music tracks",
      "Royalty-free for commercial use",
      "WAV & MP3 formats",
      "Loopable versions included",
      "Mood & BPM metadata",
      "YouTube & Twitch safe"
    ],
    includes: [
      "25 tracks in WAV (24-bit) & MP3",
      "Loopable versions of each track",
      "Mood & BPM metadata sheet",
      "Commercial use license",
      "Lifetime usage rights"
    ],
    systemRequirements: "Any DAW or audio editing software",
    licenseType: "Commercial royalty-free license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 13,
    name: "VPN Shield Pro — 1 Year License",
    slug: "vpn-shield-pro",
    category: "software",
    categoryLabel: "Software",
    price: 2499,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 567,
    badge: "sale",
    image: generatePlaceholder("software", "VPN Shield Pro"),
    gallery: generateGallery("software", "VPN Shield Pro"),
    shortDescription: "Secure, fast, no-logs VPN with 500+ servers worldwide",
    description: "Protect your online privacy with military-grade encryption, lightning-fast speeds, and access to 500+ servers in 60+ countries. No logs, no tracking, complete digital freedom.",
    features: [
      "Military-grade AES-256 encryption",
      "500+ servers in 60+ countries",
      "No-logs policy (audited)",
      "Kill switch & DNS leak protection",
      "10 simultaneous connections",
      "Split tunneling support",
      "24/7 customer support",
      "30-day money-back guarantee"
    ],
    includes: [
      "VPN Shield Pro license (1 year)",
      "10 simultaneous device connections",
      "All platform apps (Win, Mac, iOS, Android, Linux)",
      "Browser extensions (Chrome, Firefox)",
      "24/7 priority support",
      "30-day money-back guarantee"
    ],
    systemRequirements: "Windows 7+, macOS 10.14+, iOS 12+, Android 6+, Linux",
    licenseType: "Multi-device commercial license",
    delivery: "Instant activation after purchase",
    refundPolicy: "30-day money-back guarantee"
  },
  {
    id: 14,
    name: "React Native Mobile Development",
    slug: "react-native-course",
    category: "courses",
    categoryLabel: "Courses",
    price: 6999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 3456,
    badge: "bestseller",
    image: generatePlaceholder("courses", "React Native Development"),
    gallery: generateGallery("courses", "React Native Development"),
    shortDescription: "Build iOS & Android apps with React Native — 40+ hours content",
    description: "Master React Native and build production-ready mobile apps for both iOS and Android from a single codebase. Includes hooks, navigation, state management, and app store deployment.",
    features: [
      "40+ hours of HD video content",
      "React Native & Expo mastery",
      "Navigation, hooks & state management",
      "API integration & offline storage",
      "Push notifications setup",
      "App store deployment guide",
      "8 real-world app projects",
      "Certificate of completion"
    ],
    includes: [
      "40+ hours video content",
      "8 complete app projects with source code",
      "App store deployment checklist",
      "UI component library",
      "Course completion certificate",
      "Private community access",
      "Lifetime access to all updates"
    ],
    systemRequirements: "macOS (for iOS builds) or Windows/Android Studio, 16GB RAM recommended",
    licenseType: "Personal learning license",
    delivery: "Instant access after purchase",
    refundPolicy: "30-day money-back guarantee"
  },
  {
    id: 15,
    name: "Digital Marketing Mastery — eBook",
    slug: "digital-marketing-ebook",
    category: "ebooks",
    categoryLabel: "eBooks",
    price: 1199,
    originalPrice: null,
    rating: 4.4,
    reviews: 312,
    badge: null,
    image: generatePlaceholder("ebooks", "Digital Marketing Mastery"),
    gallery: generateGallery("ebooks", "Digital Marketing Mastery"),
    shortDescription: "Complete guide to SEO, social media, email marketing, and ads",
    description: "A comprehensive digital marketing guide covering SEO, social media marketing, email automation, paid advertising, and analytics. Learn strategies that actually work in 2025.",
    features: [
      "250+ pages of current strategies",
      "SEO & keyword research frameworks",
      "Social media growth tactics",
      "Email marketing automation",
      "Paid ads (Google & Meta)",
      "Analytics & tracking setup"
    ],
    includes: [
      "PDF, EPUB, and MOBI formats",
      "SEO audit checklist template",
      "Social media content calendar",
      "Email sequence templates",
      "Ad campaign planner",
      "Free lifetime updates"
    ],
    systemRequirements: "Any device with PDF/eBook reader support",
    licenseType: "Personal use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 16,
    name: "Social Media Kit — 100 Templates",
    slug: "social-media-kit",
    category: "templates",
    categoryLabel: "Templates",
    price: 2799,
    originalPrice: null,
    rating: 4.6,
    reviews: 203,
    badge: "new",
    image: generatePlaceholder("templates", "Social Media Kit"),
    gallery: generateGallery("templates", "Social Media Kit"),
    shortDescription: "Instagram, Facebook, Twitter templates for businesses",
    description: "A complete social media template kit with 100 professionally designed templates for Instagram, Facebook, Twitter, and LinkedIn. Fully customizable in Canva and Photoshop.",
    features: [
      "100 social media templates",
      "Instagram, Facebook, Twitter, LinkedIn",
      "Canva & Photoshop formats",
      "Fully customizable layouts",
      "Story & post formats",
      "Highlight covers included",
      "Brand kit template",
      "Free lifetime updates"
    ],
    includes: [
      "100 templates (Canva + PSD)",
      "Instagram story & post templates",
      "Facebook cover & post templates",
      "Twitter header & post templates",
      "LinkedIn banner templates",
      "Highlight cover set",
      "Commercial use license"
    ],
    systemRequirements: "Canva (free) or Adobe Photoshop",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "14-day money-back guarantee"
  },
  {
    id: 17,
    name: "Watercolor Texture Pack",
    slug: "watercolor-textures",
    category: "graphics",
    categoryLabel: "Graphics",
    price: 1699,
    originalPrice: null,
    rating: 4.8,
    reviews: 145,
    badge: null,
    image: generatePlaceholder("graphics", "Watercolor Textures"),
    gallery: generateGallery("graphics", "Watercolor Textures"),
    shortDescription: "100 hand-painted watercolor textures for designers",
    description: "A beautiful collection of 100 hand-painted watercolor textures perfect for wedding invitations, branding, packaging, and digital art. High resolution with transparent backgrounds.",
    features: [
      "100 hand-painted watercolor textures",
      "High resolution (6000x6000px)",
      "PNG with transparent background",
      "Commercial use license",
      "Organized by color palette",
      "Print & digital ready"
    ],
    includes: [
      "100 watercolor textures (PNG, transparent)",
      "Color palette index",
      "Commercial use license",
      "Usage guide PDF"
    ],
    systemRequirements: "Any design software supporting PNG",
    licenseType: "Commercial use license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  },
  {
    id: 18,
    name: "Cinematic SFX Sound Pack",
    slug: "cinematic-sfx-pack",
    category: "audio",
    categoryLabel: "Audio",
    price: 2199,
    originalPrice: null,
    rating: 4.5,
    reviews: 167,
    badge: null,
    image: generatePlaceholder("audio", "Cinematic SFX Pack"),
    gallery: generateGallery("audio", "Cinematic SFX Pack"),
    shortDescription: "200+ cinematic sound effects for film and video production",
    description: "A professional-grade collection of 200+ cinematic sound effects for film, video, and game production. Includes impacts, whooshes, risers, atmospheres, and foley sounds.",
    features: [
      "200+ cinematic sound effects",
      "24-bit / 96kHz WAV format",
      "Organized by category",
      "Royalty-free for commercial use",
      "Film, TV & game ready",
      "Metadata tagged"
    ],
    includes: [
      "200+ SFX in WAV (24-bit/96kHz)",
      "Category index spreadsheet",
      "Commercial use license",
      "Lifetime usage rights"
    ],
    systemRequirements: "Any DAW or video editing software",
    licenseType: "Commercial royalty-free license",
    delivery: "Instant download after purchase",
    refundPolicy: "7-day money-back guarantee"
  }
];

// Category metadata
const CATEGORIES = [
  { id: 'software', label: 'Software', icon: 'code', count: PRODUCTS.filter(p => p.category === 'software').length },
  { id: 'ai', label: 'AI Tools', icon: 'sparkles', count: 0 },
  { id: 'courses', label: 'Courses', icon: 'academic-cap', count: PRODUCTS.filter(p => p.category === 'courses').length },
  { id: 'ebooks', label: 'eBooks', icon: 'book-open', count: PRODUCTS.filter(p => p.category === 'ebooks').length },
  { id: 'templates', label: 'Templates', icon: 'template', count: PRODUCTS.filter(p => p.category === 'templates').length },
  { id: 'graphics', label: 'Graphics & Media', icon: 'photo', count: PRODUCTS.filter(p => p.category === 'graphics').length },
  { id: 'audio', label: 'Audio', icon: 'musical-note', count: PRODUCTS.filter(p => p.category === 'audio').length }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES, generatePlaceholder, generateGallery };
}
