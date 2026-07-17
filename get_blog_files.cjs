const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const results = [];
for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let match = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (match) {
    results.push(file);
  } else {
    console.log("No article match for", file);
  }
}
console.log(results.length, "files have <article>");
