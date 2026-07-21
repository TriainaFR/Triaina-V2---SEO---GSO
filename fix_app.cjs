const fs = require('fs');

function updateApp() {
  let content = fs.readFileSync('App.tsx', 'utf8');
  
  if (!content.includes('CoreWebVitalsSeo2026')) {
    content = content.replace(
      "import { GoogleBusinessProfile2026 } from './views/blog/GoogleBusinessProfile2026';",
      "import { GoogleBusinessProfile2026 } from './views/blog/GoogleBusinessProfile2026';\nimport { CoreWebVitalsSeo2026 } from './views/blog/CoreWebVitalsSeo2026';"
    );

    content = content.replace(
      "case 'google-business-profile-2026':\n        return <GoogleBusinessProfile2026 />;",
      "case 'google-business-profile-2026':\n        return <GoogleBusinessProfile2026 />;\n      case 'core-web-vitals-seo-2026':\n        return <CoreWebVitalsSeo2026 />;"
    );

    fs.writeFileSync('App.tsx', content);
  }

  let typesContent = fs.readFileSync('types.ts', 'utf8');
  if (!typesContent.includes("'core-web-vitals-seo-2026'")) {
    typesContent = typesContent.replace(
      "export type Page =\n",
      "export type Page =\n  | 'core-web-vitals-seo-2026'\n"
    );
    fs.writeFileSync('types.ts', typesContent);
  }
}

updateApp();
