const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');
const searchString = "{ id: 'agence-referencement-ia-paris', label: 'Agence Référencement IA Paris' }";
const replaceString = "{ id: 'agence-referencement-ia-paris', label: 'Agence Référencement IA Paris' },\n        { id: 'agence-geo-paris', label: 'Agence GEO Paris' }";

if (content.includes(searchString) && !content.includes("{ id: 'agence-geo-paris', label: 'Agence GEO Paris' }")) {
  content = content.replace(searchString, replaceString);
  fs.writeFileSync('constants.ts', content);
  console.log('Added to NAV_LINKS');
} else {
  console.log('Already present or search string not found');
}
