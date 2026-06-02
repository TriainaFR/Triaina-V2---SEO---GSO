import * as fs from 'fs';
import * as path from 'path';

const blogDir = path.join(process.cwd(), 'views/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));
let allGood = true;

for (const file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // simple check: if author does not contain Person
    const authorMatches = content.match(/"author":\s*\{[\s\S]*?\}/g);
    if (authorMatches) {
        for (const match of authorMatches) {
            if (!match.includes('Person') && match.includes('Organization')) {
                console.log(`Failed in ${file}:\n${match}`);
                allGood = false;
            }
        }
    }
}
if (allGood) console.log('All authors replaced with Person successfully!');
