import * as fs from 'fs';
import * as path from 'path';

const blogDir = path.join(process.cwd(), 'views/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace basic author: { "@type": "Organization", "name": "Triaina" }
    const badSyntax = /"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"Alexandre",\s*"jobTitle":\s*"CEO & Fondateur Triaina",\s*"url":\s*"https:\/\/www\.triaina\.fr",\s*"sameAs":\s*"https:\/\/www\.linkedin\.com\/in\/alexandre-triaina"\s*\}\s*\},/g;
    
    if (badSyntax.test(content)) {
        console.log(`Fixing syntax in ${file}`);
        content = content.replace(badSyntax, `"author": {
            "@type": "Person",
            "name": "Alexandre",
            "jobTitle": "CEO & Fondateur Triaina",
            "url": "https://www.triaina.fr",
            "sameAs": "https://www.linkedin.com/in/alexandre-triaina"
        },`);
        fs.writeFileSync(filePath, content);
    }
}
console.log('Fixed syntax!');
