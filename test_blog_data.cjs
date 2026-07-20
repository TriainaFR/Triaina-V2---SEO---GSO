require('esbuild').buildSync({
  entryPoints: ['constants.ts'],
  bundle: true,
  outfile: 'constants.cjs',
  platform: 'node',
  format: 'cjs'
});
const { BLOG_DATA } = require('./constants.cjs');
console.log("Total articles:", BLOG_DATA.length);
const toulouse = BLOG_DATA.filter(a => a.id === 'agence-seo-toulouse-2026');
console.log("Toulouse count:", toulouse.length);
if (toulouse.length > 0) {
  console.log("Toulouse index:", BLOG_DATA.findIndex(a => a.id === 'agence-seo-toulouse-2026'));
  console.log("Toulouse url:", toulouse[0].url);
}
