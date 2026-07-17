const fs = require('fs');
let content = fs.readFileSync('views/blog/GrokSeo2026.tsx', 'utf8');
const startMatch = content.indexOf('<div className="border border-slate-200 rounded-3xl p-8">');
const endMatch = content.indexOf('</div>\n              </div>\n            </aside>');
if (startMatch !== -1 && endMatch !== -1) {
  content = content.substring(0, startMatch) + content.substring(endMatch + 6);
  fs.writeFileSync('views/blog/GrokSeo2026.tsx', content);
}
