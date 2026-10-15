// ============================================
// LOCAL SVG PLACEHOLDER IMAGES
// Category-based, reliable, no external dependencies
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
  const displayName = name.length > 30 ? name.substring(0, 27) + '...' : name;
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

// Export for use in products.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generatePlaceholder, generateGallery, CATEGORY_COLORS };
}
