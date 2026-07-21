const fs = require('fs');

function fixConstants(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  if (!content.includes("'/blog/google-business-profile-2026': 'google-business-profile-2026'")) {
    content = content.replace(
      "export const ROUTES: Record<string, Page> = {", 
      "export const ROUTES: Record<string, Page> = {\n  '/blog/google-business-profile-2026': 'google-business-profile-2026',"
    );
    fs.writeFileSync(filename, content);
  }
}

fixConstants('constants.ts');
