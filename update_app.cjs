const fs = require('fs');

let content = fs.readFileSync('App.tsx', 'utf-8');

// Insert import statement
const importStatement = "import { AgenceSeoGeoCaen2026 } from './views/blog/AgenceSeoGeoCaen2026';\nimport { AgenceSeoBordeaux2026";
content = content.replace("import { AgenceSeoBordeaux2026", importStatement);

// Insert case statement
const caseStatement = "      case 'agence-seo-geo-caen-2026':\n        return <AgenceSeoGeoCaen2026 />;\n      case 'agence-seo-bordeaux-2026':";
content = content.replace("      case 'agence-seo-bordeaux-2026':", caseStatement);

fs.writeFileSync('App.tsx', content);
console.log("Updated App.tsx");
