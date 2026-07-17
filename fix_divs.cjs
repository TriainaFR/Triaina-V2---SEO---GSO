const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // We need to count unclosed divs inside the prose block.
  // Actually, wait, it's easier to just count <div and </div globally!
  // No, because some tags like <img/> don't close. But <div> ALWAYS has </div>.
  // We can just count the number of `<div` and `</div` in the file.
  const openDivs = (content.match(/<div\b[^>]*>/g) || []).length;
  const closeDivs = (content.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const diff = openDivs - closeDivs;
    console.log(`${file}: missing ${diff} </div> tags`);
    
    // We need to insert them BEFORE the </article> tag
    const articleEndRegex = /<\/article>/;
    let replacement = "";
    for (let i = 0; i < diff; i++) {
        replacement += "          </div>\n";
    }
    replacement += "        </article>";
    content = content.replace(articleEndRegex, replacement);
    fs.writeFileSync(path.join(dir, file), content);
  }
}

console.log("Divs fixed!");
