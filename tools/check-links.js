// ============================================
// DIGIMART — LOCAL LINK / ASSET CHECKER
// Verifies every local href/src in *.html resolves
// to a real file in the project. Run:
//   node tools/check-links.js
// ============================================

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((f) => f.endsWith('.html'));

const exists = (rel) => fs.existsSync(path.join(root, rel.split('?')[0].split('#')[0]));

let problems = 0;
let checked = 0;

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const refs = [];
  const re = /(?:href|src)\s*=\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) refs.push(m[1]);

  refs.forEach((ref) => {
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(ref)) return;
    if (ref.includes('${')) return; // JS template placeholder, not a literal path
    checked++;
    if (!exists(ref)) {
      problems++;
      console.log(`BROKEN  ${file}  ->  ${ref}`);
    }
  });
});

// Product image sanity
const productsJs = fs.readFileSync(path.join(root, 'js', 'products.js'), 'utf8');
const imgRefs = [...productsJs.matchAll(/assets\/products\/[\w-]+\.svg/g)].map((x) => x[0]);
const uniqueImgs = [...new Set(imgRefs)];
uniqueImgs.forEach((p) => {
  checked++;
  if (!exists(p)) {
    problems++;
    console.log(`BROKEN  js/products.js  ->  ${p}`);
  }
});

console.log(`\nChecked ${checked} local references across ${htmlFiles.length} pages.`);
console.log(problems === 0 ? 'OK — no broken local links.' : `${problems} problem(s) found.`);
process.exit(problems === 0 ? 0 : 1);