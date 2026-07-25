const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const importStatement = "import { StrategieContenuSeo2026 } from './views/blog/StrategieContenuSeo2026';\n";
// find last import from ./views/blog
const lastImportMatch = [...content.matchAll(/import .* from '\.\/views\/blog\/.*';/g)].pop();
if (lastImportMatch) {
  content = content.replace(lastImportMatch[0], lastImportMatch[0] + "\n" + importStatement);
} else {
  content = importStatement + content;
}

const switchCase = "      case 'strategie-contenu-seo-2026':\n        return <StrategieContenuSeo2026 />;\n";
content = content.replace("      case '10-conseils-marque-visible-chatgpt-2026':", switchCase + "      case '10-conseils-marque-visible-chatgpt-2026':");

fs.writeFileSync('App.tsx', content);
