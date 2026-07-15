const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

const regex = /\{\s*id:\s*'agence-geo-ecommerce-2026'[\s\S]*?\},/;
const match = content.match(regex);

if (match) {
  content = content.replace(regex, '');
  content = content.replace(
    /export const JOB_OFFERS: JobOffer\[\] = \[/,
    match[0] + "\n];\n\nexport const JOB_OFFERS: JobOffer[] = ["
  );
  // Wait, let's fix the bracket replacement
  content = content.replace(
    /];\n\nexport const JOB_OFFERS/,
    match[0] + "\n];\n\nexport const JOB_OFFERS"
  );
  fs.writeFileSync('constants.ts', content);
  console.log("Moved");
} else {
  console.log("Not found");
}
