// ============================================
// DIGIMART — PRODUCT MOCKUP ARTWORK GENERATOR
// Generates original SVG product artwork locally.
// No external images, no hotlinking, no copyrighted logos.
// Run: node tools/generate-product-images.js
// ============================================

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'assets', 'products');

const BRAND = {
  navy: '#0B1220',
  blue: '#2563EB',
  bright: '#3B82F6',
  purple: '#7C3AED',
  white: '#FFFFFF',
  bg: '#F8FAFC',
  muted: '#64748B',
  line: '#E2E8F0',
  soft: '#F1F5F9'
};

// ---------------- shared frame ----------------
function frame(inner, opts = {}) {
  const w = 800;
  const h = 600;
  const a = opts.accent || BRAND.blue;
  const b = opts.accent2 || BRAND.purple;
  const title = opts.title || '';
  const kicker = opts.kicker || 'DIGIMART DEMO SAMPLE';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeAttr(title)} — sample product mockup">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.bg}"/>
      <stop offset="100%" stop-color="#EEF2FF"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#0B1220" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#bgGrad)"/>
  <circle cx="740" cy="70" r="150" fill="${a}" opacity="0.07"/>
  <circle cx="80" cy="540" r="170" fill="${b}" opacity="0.07"/>

  <g filter="url(#softShadow)">${inner}</g>

  <g>
    <rect x="28" y="556" width="104" height="26" rx="13" fill="${BRAND.navy}" opacity="0.92"/>
    <text x="80" y="573" font-family="Inter, Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.2">DEMO SAMPLE</text>
    <text x="146" y="573" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="600" fill="${BRAND.muted}">${escapeXml(truncate(title, 46))}</text>
  </g>
  <text x="772" y="573" text-anchor="end" font-family="Inter, Segoe UI, sans-serif" font-size="11" font-weight="700" fill="${BRAND.muted}" opacity="0.7" letter-spacing="1">${escapeXml(kicker)}</text>
</svg>`;
}

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}
function escapeAttr(s) { return escapeXml(s); }
function truncate(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

function txt(x, y, size, weight, fill, text, extra = '') {
  return `<text x="${x}" y="${y}" font-family="Inter, Segoe UI, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${escapeXml(text)}</text>`;
}

function panel(x, y, w, h, r = 16, fill = BRAND.white, stroke = BRAND.line) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
}

// ---------------- art templates ----------------

// AI chat / agent workspace
function artAi(v, title, accent, accent2) {
  const bubbles = [
    { x: 150, y: 190, w: 380, h: 54, t: 'Draft a launch plan for my product', me: false },
    { x: 250, y: 258, w: 380, h: 54, t: 'Here is a 5-step plan — refine it?', me: true },
    { x: 150, y: 326, w: 330, h: 54, t: 'Add channels and a 4-week calendar', me: false }
  ];
  let s = panel(80, 90, 640, 400, 20);
  s += `<rect x="80" y="90" width="640" height="52" rx="20" fill="${BRAND.navy}"/>`;
  s += `<rect x="80" y="122" width="640" height="20" fill="${BRAND.navy}"/>`;
  s += `<circle cx="116" cy="116" r="12" fill="url(#accent)"/>`;
  s += txt(140, 121, 15, 700, BRAND.white, v === 2 ? 'Pulseboard AI — Insights' : 'Nebula AI — Workspace');
  s += `<circle cx="672" cy="116" r="4" fill="#34D399"/><circle cx="688" cy="116" r="4" fill="#FBBF24"/><circle cx="704" cy="116" r="4" fill="#F87171"/>`;
  s += `<rect x="80" y="142" width="128" height="348" fill="${BRAND.soft}"/>`;
  const nav = ['New chat', 'Library', 'Agents', 'History'];
  nav.forEach((n, i) => {
    s += `<rect x="94" y="${166 + i * 38}" width="100" height="28" rx="8" fill="${i === v - 1 ? BRAND.white : 'none'}"/>`;
    s += txt(106, 184 + i * 38, 12, i === v - 1 ? 700 : 500, i === v - 1 ? BRAND.navy : BRAND.muted, n);
  });
  bubbles.forEach((b) => {
    s += `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="14" fill="${b.me ? BRAND.soft : BRAND.white}" stroke="${b.me ? BRAND.line : '#BFDBFE'}"/>`;
    s += txt(b.x + 18, b.y + 33, 13, 500, BRAND.navy, b.t);
  });
  s += `<rect x="150" y="404" width="470" height="38" rx="19" fill="${BRAND.white}" stroke="${BRAND.line}"/>`;
  s += txt(170, 428, 12, 500, BRAND.muted, 'Ask anything…');
  s += `<circle cx="598" cy="423" r="14" fill="url(#accent)"/>`;
  return frame(s, { title, accent, accent2 });
}

// SaaS dashboard with KPIs + chart
function artDashboard(v, title, accent, accent2) {
  const bars = [78, 130, 96, 168, 122, 196, 150];
  let s = panel(72, 84, 656, 410, 20);
  s += `<rect x="72" y="84" width="132" height="410" rx="20" fill="${BRAND.navy}"/>`;
  s += `<rect x="184" y="84" width="20" height="410" fill="${BRAND.navy}"/>`;
  s += `<circle cx="106" cy="118" r="12" fill="url(#accent)"/>`;
  s += txt(126, 123, 13, 700, BRAND.white, 'DIGIMART');
  ['Overview', 'Invoices', 'Clients', 'Reports', 'Settings'].forEach((n, i) => {
    s += `<rect x="88" y="${156 + i * 36}" width="100" height="26" rx="8" fill="${i === 0 ? 'rgba(255,255,255,0.12)' : 'none'}"/>`;
    s += txt(100, 173 + i * 36, 12, i === 0 ? 700 : 500, i === 0 ? BRAND.white : '#94A3B8', n);
  });
  s += txt(220, 122, 15, 700, BRAND.navy, v === 2 ? 'Revenue overview — sample' : 'Billing dashboard — sample');
  const kpis = [['Invoices', '128'], ['Outstanding', '₹42k'], ['Clients', '36']];
  kpis.forEach((k, i) => {
    const x = 220 + i * 168;
    s += panel(x, 146, 152, 74, 12);
    s += txt(x + 16, 174, 11, 600, BRAND.muted, k[0]);
    s += txt(x + 16, 202, 20, 800, BRAND.navy, k[1]);
  });
  s += panel(220, 238, 488, 226, 12);
  bars.forEach((b, i) => {
    const x = 244 + i * 64;
    s += `<rect x="${x}" y="${430 - b / (v === 2 ? 1.15 : 1)}" width="34" height="${b / (v === 2 ? 1.15 : 1)}" rx="7" fill="${i === bars.length - 1 ? 'url(#accent)' : BRAND.soft}"/>`;
  });
  s += `<line x1="236" y1="430" x2="692" y2="430" stroke="${BRAND.line}"/>`;
  s += txt(224, 254, 11, 600, BRAND.muted, 'Last 7 months (sample data)');
  return frame(s, { title, accent, accent2 });
}

// Website template preview in a browser
function artWeb(v, title, accent, accent2) {
  let s = panel(64, 96, 672, 396, 18);
  s += `<rect x="64" y="96" width="672" height="44" rx="18" fill="${BRAND.soft}"/>`;
  s += `<rect x="64" y="124" width="672" height="16" fill="${BRAND.soft}"/>`;
  s += ['#F87171', '#FBBF24', '#34D399'].map((c, i) => `<circle cx="${92 + i * 20}" cy="118" r="6" fill="${c}"/>`).join('');
  s += `<rect x="164" y="106" width="330" height="24" rx="12" fill="${BRAND.white}" stroke="${BRAND.line}"/>`;
  s += txt(180, 122, 11, 500, BRAND.muted, v === 2 ? 'demo.digimart.com/portfolio' : 'demo.digimart.com/agency');
  s += `<rect x="84" y="162" width="316" height="118" rx="12" fill="url(#accent)" opacity="0.92"/>`;
  s += txt(108, 204, 20, 800, BRAND.white, v === 2 ? 'Bloom Storefront' : 'Vertex Agency');
  s += `<rect x="108" y="220" width="180" height="10" rx="5" fill="#FFFFFF" opacity="0.75"/>`;
  s += `<rect x="108" y="240" width="120" height="10" rx="5" fill="#FFFFFF" opacity="0.5"/>`;
  s += `<rect x="108" y="256" width="86" height="22" rx="11" fill="#FFFFFF"/>`;
  s += txt(122, 271, 11, 700, BRAND.blue, 'Get started');
  s += `<rect x="416" y="162" width="300" height="118" rx="12" fill="${BRAND.soft}"/>`;
  s += `<rect x="436" y="182" width="90" height="78" rx="10" fill="url(#accent2)" opacity="0.85"/>`;
  s += `<rect x="540" y="182" width="70" height="78" rx="10" fill="${BRAND.soft}"/>`;
  s += `<rect x="624" y="182" width="70" height="78" rx="10" fill="${BRAND.soft}"/>`;
  s += panel(84, 298, 316, 170, 12);
  s += txt(108, 326, 13, 700, BRAND.navy, 'Featured sections');
  ['Hero', 'About', 'Services', 'Testimonials'].forEach((n, i) => {
    s += `<rect x="108" y="${342 + i * 28}" width="268" height="20" rx="6" fill="${BRAND.soft}"/>`;
    s += txt(120, 356 + i * 28, 11, 500, BRAND.muted, n);
  });
  s += panel(416, 298, 300, 170, 12);
  s += `<rect x="440" y="322" width="252" height="126" rx="10" fill="url(#accent2)" opacity="0.18"/>`;
  s += `<circle cx="566" cy="385" r="26" fill="url(#accent)"/>`;
  s += `<path d="M558 375 l18 10 -18 10 z" fill="#FFFFFF"/>`;
  return frame(s, { title, accent, accent2 });
}

// Ebook cover
function artEbook(v, title, accent, accent2) {
  let s = panel(150, 66, 500, 424, 18);
  s += `<rect x="150" y="66" width="34" height="424" rx="14" fill="${BRAND.navy}" opacity="0.9"/>`;
  s += `<rect x="198" y="66" width="452" height="424" rx="18" fill="url(#accent)"/>`;
  s += `<circle cx="600" cy="130" r="86" fill="#FFFFFF" opacity="0.12"/>`;
  s += `<circle cx="230" cy="430" r="70" fill="#FFFFFF" opacity="0.1"/>`;
  s += `<rect x="234" y="110" width="112" height="26" rx="13" fill="#FFFFFF" opacity="0.9"/>`;
  s += txt(290, 128, 11, 800, BRAND.blue, 'DIGIMART');
  s += txt(234, 210, v === 2 ? 34 : 38, 800, BRAND.white, v === 2 ? 'SEO Blueprint' : 'The Growth Playbook');
  s += txt(234, 258, v === 2 ? 34 : 38, 800, '#E0E7FF', v === 2 ? 'for Founders' : '2026 Edition');
  s += `<rect x="234" y="284" width="320" height="9" rx="4" fill="#FFFFFF" opacity="0.55"/>`;
  s += `<rect x="234" y="302" width="240" height="9" rx="4" fill="#FFFFFF" opacity="0.35"/>`;
  s += `<rect x="234" y="360" width="180" height="40" rx="20" fill="#FFFFFF"/>`;
  s += txt(258, 385, 13, 800, BRAND.navy, v === 2 ? 'Sample guide' : 'Sample eBook');
  s += txt(234, 452, 13, 600, '#E0E7FF', 'Illustrative cover — demo asset');
  return frame(s, { title, accent, accent2 });
}

// Course cover with lesson list
function artCourse(v, title, accent, accent2) {
  let s = panel(76, 88, 648, 404, 20);
  s += `<rect x="76" y="88" width="316" height="404" rx="20" fill="url(#accent)"/>`;
  s += `<rect x="372" y="88" width="20" height="404" fill="url(#accent)"/>`;
  s += `<rect x="392" y="88" width="332" height="404" rx="20" fill="${BRAND.white}" stroke="${BRAND.line}"/>`;
  s += `<circle cx="234" cy="150" r="34" fill="#FFFFFF" opacity="0.18"/>`;
  s += `<circle cx="234" cy="150" r="24" fill="#FFFFFF" opacity="0.9"/>`;
  s += `<path d="M228 138 l16 12 -16 12 z" fill="${BRAND.blue}"/>`;
  s += txt(152, 226, 24, 800, BRAND.white, v === 2 ? 'Freelance' : 'Product Design');
  s += txt(152, 258, 24, 800, '#E0E7FF', v === 2 ? 'Finance' : 'Masterclass');
  s += `<rect x="152" y="282" width="150" height="8" rx="4" fill="#FFFFFF" opacity="0.6"/>`;
  s += `<rect x="152" y="300" width="110" height="8" rx="4" fill="#FFFFFF" opacity="0.4"/>`;
  s += `<rect x="152" y="396" width="150" height="34" rx="17" fill="#FFFFFF" opacity="0.9"/>`;
  s += txt(172, 418, 12, 800, BRAND.blue, 'Sample course');
  const lessons = ['Welcome & setup', 'Core concepts', 'Hands-on project', 'Templates & files', 'Wrap-up review'];
  lessons.forEach((l, i) => {
    const y = 120 + i * 62;
    const done = i < (v === 2 ? 2 : 3);
    s += panel(416, y, 284, 48, 10, done ? BRAND.soft : BRAND.white);
    s += `<circle cx="442" cy="${y + 24}" r="11" fill="${done ? BRAND.blue : BRAND.white}" stroke="${done ? BRAND.blue : BRAND.line}"/>`;
    if (done) s += `<path d="M437 ${y + 24} l4 4 7 -8" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    s += txt(464, y + 29, 13, done ? 700 : 500, done ? BRAND.navy : BRAND.muted, l);
  });
  return frame(s, { title, accent, accent2 });
}

// Social media template grid
function artSocial(v, title, accent, accent2) {
  let s = panel(88, 76, 624, 428, 20);
  s += `<rect x="88" y="76" width="624" height="62" rx="20" fill="${BRAND.navy}"/>`;
  s += `<rect x="88" y="112" width="624" height="26" fill="${BRAND.navy}"/>`;
  s += `<circle cx="126" cy="107" r="18" fill="url(#accent)"/>`;
  s += txt(156, 112, 14, 700, BRAND.white, 'InstaGrid — sample profile');
  for (let i = 0; i < 9; i++) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 116 + col * 192;
    const y = 156 + row * 110;
    const tints = [accent, accent2, BRAND.navy];
    const fill = tints[(i + (v === 2 ? 1 : 0)) % 3];
    s += `<rect x="${x}" y="${y}" width="172" height="92" rx="12" fill="${fill}" opacity="${0.9 - (i % 3) * 0.18}"/>`;
    if (i % 3 === 0) s += `<rect x="${x + 16}" y="${y + 52}" width="96" height="8" rx="4" fill="#FFFFFF" opacity="0.85"/>`;
    if (i % 3 === 1) s += `<circle cx="${x + 40}" cy="${y + 46}" r="20" fill="#FFFFFF" opacity="0.85"/>`;
    if (i % 3 === 2) s += `<rect x="${x + 20}" y="${y + 24}" width="130" height="44" rx="10" fill="#FFFFFF" opacity="0.7"/>`;
  }
  return frame(s, { title, accent, accent2 });
}

// Design resource library
function artDesign(v, title, accent, accent2) {
  let s = panel(76, 84, 648, 412, 20);
  s += txt(108, 122, 15, 700, BRAND.navy, v === 2 ? 'Brand asset library — sample' : 'Nova design kit — sample');
  ['#0B1220', BRAND.blue, BRAND.bright, BRAND.purple, '#A78BFA', '#F8FAFC'].forEach((c, i) => {
    s += `<rect x="${108 + i * 98}" y="142" width="82" height="52" rx="10" fill="${c}" stroke="${BRAND.line}"/>`;
  });
  s += panel(108, 212, 296, 258, 14);
  s += `<circle cx="182" cy="278" r="34" fill="url(#accent)"/>`;
  s += `<rect x="230" y="252" width="140" height="52" rx="10" fill="url(#accent2)" opacity="0.85"/>`;
  s += `<path d="M132 400 L196 320 L244 372 L280 344 L380 420 Z" fill="${BRAND.navy}" opacity="0.85"/>`;
  s += `<circle cx="336" cy="290" r="18" fill="#FBBF24"/>`;
  s += panel(420, 212, 272, 258, 14);
  for (let i = 0; i < 6; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 444 + col * 124;
    const y = 236 + row * 84;
    s += `<rect x="${x}" y="${y}" width="104" height="66" rx="10" fill="${BRAND.soft}"/>`;
    s += `<circle cx="${x + 26}" cy="${y + 33}" r="13" fill="${i % 2 ? accent : accent2}" opacity="0.85"/>`;
    s += `<rect x="${x + 46}" y="${y + 26}" width="44" height="7" rx="3" fill="${BRAND.line}"/>`;
    s += `<rect x="${x + 46}" y="${y + 39}" width="30" height="7" rx="3" fill="${BRAND.line}"/>`;
  }
  return frame(s, { title, accent, accent2 });
}

// Productivity kanban
function artProductivity(v, title, accent, accent2) {
  const cols = [
    { name: 'To do', items: ['Research brief', 'Outline notes'], c: BRAND.soft },
    { name: 'In progress', items: ['Design system', 'Landing copy'], c: '#DBEAFE' },
    { name: 'Done', items: ['Wireframes', 'QA checklist'], c: '#EDE9FE' }
  ];
  let s = panel(76, 84, 648, 412, 20);
  s += txt(108, 122, 15, 700, BRAND.navy, 'Flowdesk — workflow board (sample)');
  cols.forEach((col, ci) => {
    const x = 108 + ci * 204;
    s += `<rect x="${x}" y="146" width="180" height="316" rx="14" fill="${col.c}"/>`;
    s += txt(x + 16, 174, 12, 700, BRAND.navy, col.name);
    s += `<rect x="${x + 148}" y="160" width="18" height="18" rx="6" fill="#FFFFFF" opacity="0.8"/>`;
    col.items.forEach((it, ii) => {
      const y = 194 + ii * 74;
      s += `<rect x="${x + 12}" y="${y}" width="156" height="60" rx="10" fill="#FFFFFF" stroke="${BRAND.line}"/>`;
      s += `<rect x="${x + 24}" y="${y + 14}" width="86" height="8" rx="4" fill="${BRAND.line}"/>`;
      s += `<rect x="${x + 24}" y="${y + 30}" width="120" height="7" rx="3" fill="${BRAND.soft}"/>`;
      s += `<circle cx="${x + 32}" cy="${y + 48}" r="5" fill="${ci === (v === 2 ? 1 : 2) ? accent : accent2}" opacity="0.9"/>`;
      s += `<rect x="${x + 44}" y="${y + 44}" width="44" height="7" rx="3" fill="${BRAND.soft}"/>`;
    });
  });
  return frame(s, { title, accent, accent2 });
}

const TEMPLATES = {
  ai: artAi,
  saas: artDashboard,
  web: artWeb,
  ebook: artEbook,
  course: artCourse,
  social: artSocial,
  design: artDesign,
  productivity: artProductivity
};

function build(name, slug, art, title, accent, accent2) {
  const fn = TEMPLATES[art];
  const out = {};
  [1, 2, 3].forEach((v) => {
    out[v] = fn(v, name, accent, accent2);
  });
  return out;
}

module.exports = { build, BRAND, OUT_DIR };

if (require.main === module) {
  const list = require('./product-image-manifest');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let count = 0;
  list.forEach((p) => {
    const svg = build(p.name, p.slug, p.art, p.name, p.accent, p.accent2);
    fs.writeFileSync(path.join(OUT_DIR, `${p.slug}-cover.svg`), svg[1]);
    fs.writeFileSync(path.join(OUT_DIR, `${p.slug}-screen-1.svg`), svg[2]);
    fs.writeFileSync(path.join(OUT_DIR, `${p.slug}-screen-2.svg`), svg[3]);
    count += 3;
  });
  console.log(`Generated ${count} SVG product mockups in ${OUT_DIR}`);
}