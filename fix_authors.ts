import * as fs from 'fs';
import * as path from 'path';

const blogDir = path.join(process.cwd(), 'views/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace basic author: { "@type": "Organization", "name": "Triaina" }
    const basicRegex = /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"Triaina"\s*\}/;
    if (basicRegex.test(content)) {
        content = content.replace(basicRegex, `"author": {
      "@type": "Person",
      "name": "Alexandre",
      "jobTitle": "CEO & Fondateur Triaina",
      "url": "https://www.triaina.fr",
      "sameAs": "https://www.linkedin.com/in/alexandre-triaina"
    }`);
    }

    // Replace complex author with url and logo
    const complexRegex = /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"Triaina",[\s\S]*?\}(?=,\s*"publisher":|,?\s*\})/g;
    
    content = content.replace(complexRegex, `"author": {
            "@type": "Person",
            "name": "Alexandre",
            "jobTitle": "CEO & Fondateur Triaina",
            "url": "https://www.triaina.fr",
            "sameAs": "https://www.linkedin.com/in/alexandre-triaina"
        }`);

    // Some authors might have just url without logo
    const urlRegex = /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"Triaina",\s*"url":\s*"https?:\/\/(www\.)?triaina\.fr"\s*\}/;
    if (urlRegex.test(content)) {
        content = content.replace(urlRegex, `"author": {
      "@type": "Person",
      "name": "Alexandre",
      "jobTitle": "CEO & Fondateur Triaina",
      "url": "https://www.triaina.fr",
      "sameAs": "https://www.linkedin.com/in/alexandre-triaina"
    }`);
    }

    fs.writeFileSync(filePath, content);
}
console.log('Done!');
