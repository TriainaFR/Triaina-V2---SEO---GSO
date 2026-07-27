const fs = require('fs');
let content = fs.readFileSync('components/SEO.tsx', 'utf8');

const target1 = `interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: object;
  image?: string;
  type?: string;
  noIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  exactTitle?: boolean;
  twitterImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}`;

const replacement1 = `export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: object | object[];
  image?: string;
  type?: string;
  noIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  exactTitle?: boolean;
  twitterImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  topic?: string;
  category?: string;
  coverage?: string;
  target?: string;
  rating?: string;
  revisitAfter?: string;
  language?: string;
  author?: string;
}`;

const target2 = `export const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    keywords,
    schema, 
    image = "https://www.triaina.fr/og-image.jpg",
    type = "website",
    noIndex = false,
    ogTitle,
    ogDescription,
    twitterCard = "summary_large_image",
    canonicalUrl,
    exactTitle = false,
    twitterImage,
    twitterTitle,
    twitterDescription,
    geoRegion,
    geoPlacename,
    geoPosition
}) => {`;

const replacement2 = `export const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    keywords,
    schema, 
    image = "https://www.triaina.fr/og-image.jpg",
    type = "website",
    noIndex = false,
    ogTitle,
    ogDescription,
    twitterCard = "summary_large_image",
    canonicalUrl,
    exactTitle = false,
    twitterImage,
    twitterTitle,
    twitterDescription,
    geoRegion,
    geoPlacename,
    geoPosition,
    topic,
    category,
    coverage,
    target,
    rating,
    revisitAfter,
    language,
    author
}) => {`;

const target3 = `            // Parse selector to set attributes (basic parsing)
            if (selector.includes('name=')) element.setAttribute('name', selector.split('name="')[1].split('"')[0]);
            if (selector.includes('property=')) element.setAttribute('property', selector.split('property="')[1].split('"')[0]);
            document.head.appendChild(element);`;

const replacement3 = `            // Parse selector to set attributes (basic parsing)
            if (selector.includes('name=')) element.setAttribute('name', selector.split('name="')[1].split('"')[0]);
            if (selector.includes('property=')) element.setAttribute('property', selector.split('property="')[1].split('"')[0]);
            if (selector.includes('http-equiv=')) element.setAttribute('http-equiv', selector.split('http-equiv="')[1].split('"')[0]);
            document.head.appendChild(element);`;

const target4 = `    // Geo Meta Tags
    if (geoRegion) updateMeta('meta[name="geo.region"]', geoRegion);`;

const replacement4 = `    // Custom LLM / SEO Meta Tags
    if (topic) updateMeta('meta[name="topic"]', topic);
    if (category) updateMeta('meta[name="category"]', category);
    if (coverage) updateMeta('meta[name="coverage"]', coverage);
    if (target) updateMeta('meta[name="target"]', target);
    if (rating) updateMeta('meta[name="rating"]', rating);
    if (revisitAfter) updateMeta('meta[name="revisit-after"]', revisitAfter);
    if (author) updateMeta('meta[name="author"]', author);
    if (language) {
      updateMeta('meta[name="language"]', language);
      updateMeta('meta[http-equiv="content-language"]', language);
    }

    // Geo Meta Tags
    if (geoRegion) updateMeta('meta[name="geo.region"]', geoRegion);`;

content = content.replace(target1, replacement1);
content = content.replace(target2, replacement2);
content = content.replace(target3, replacement3);
content = content.replace(target4, replacement4);

fs.writeFileSync('components/SEO.tsx', content);
console.log('SEO.tsx updated');
