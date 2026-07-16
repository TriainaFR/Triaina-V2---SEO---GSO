const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

content = content.replace(
  /    tag: 'GUIDE'\n  }\n  {\n    id: 'google-ai-mode-2026',/,
  "    tag: 'GUIDE'\n  },\n  {\n    id: 'google-ai-mode-2026',"
);

fs.writeFileSync('constants.ts', content);
