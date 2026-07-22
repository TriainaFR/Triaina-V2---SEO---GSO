const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

code = code.replace("'expertise-content': '/expertise-contenu',", "'expertise-content': '/expertise-contenu',\n  'expertise-ai-overview': '/expertise-ai-overview',");
code = code.replace("'/expertise-content': 'expertise-content',", "'/expertise-content': 'expertise-content',\n  '/expertise-ai-overview': 'expertise-ai-overview',");
code = code.replace("{ id: 'expertise-content', label: 'Expertise Automatisation de Contenu' }", "{ id: 'expertise-content', label: 'Expertise Automatisation de Contenu' },\n        { id: 'expertise-ai-overview', label: 'Google AI Overview' }");

fs.writeFileSync('constants.ts', code);
