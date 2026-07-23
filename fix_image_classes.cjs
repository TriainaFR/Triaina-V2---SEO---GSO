const fs = require('fs');
let content = fs.readFileSync('views/blog/AgenceSeoFrance2026.tsx', 'utf8');

content = content.replace(
  'className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative"',
  'className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden mb-16 shadow-2xl animate-fade-in-up" style={{ animationDelay: \'200ms\' }}'
);

content = content.replace(
  'className="w-full h-full object-cover"\n            />',
  'className="w-full h-full object-cover"\n              referrerPolicy="no-referrer"\n            />'
);

fs.writeFileSync('views/blog/AgenceSeoFrance2026.tsx', content);
