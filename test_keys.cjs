const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');

// just print all "id: '...'" matches
const matches = content.match(/id:\s*'[^']+'/g);
const counts = {};
for (const m of matches) {
  counts[m] = (counts[m] || 0) + 1;
}
for (const k in counts) {
  if (counts[k] > 1) {
    console.log("DUPLICATE:", k, counts[k]);
  }
}
console.log("Total matches:", matches.length);
