const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

content = content.replace(
  "image: '/rennes_classic_architecture.jpg'",
  "image: '/rennes_classic_architecture_v2.jpg'"
);

fs.writeFileSync('constants.ts', content);
console.log("Updated image to local file v2.");
