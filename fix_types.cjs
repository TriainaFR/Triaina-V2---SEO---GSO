const fs = require('fs');

function fixTypes(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  if (!content.includes("'google-business-profile-2026'")) {
    content = content.replace(
      "export type Page =", 
      "export type Page =\n  | 'google-business-profile-2026'"
    );
    fs.writeFileSync(filename, content);
  }
}

fixTypes('types.ts');
