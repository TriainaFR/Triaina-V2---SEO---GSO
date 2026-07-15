const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf-8');

const newUrls = `  <url>
    <loc>https://www.triaina.fr/annuaire</loc>
    <lastmod>2026-07-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.triaina.fr/blog/agence-seo-lyon</loc>
    <lastmod>2026-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.triaina.fr/blog/meilleure-agence-referencement-ia-france</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

sitemap = sitemap.replace('</urlset>', newUrls);
fs.writeFileSync('public/sitemap.xml', sitemap);
