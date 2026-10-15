// ============================================
// DIGIMART PRODUCT DATA
// ============================================

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
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
    ],
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
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
    ],
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
  module.exports = { PRODUCTS, CATEGORIES };
}
