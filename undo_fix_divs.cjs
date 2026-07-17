const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // My fix_divs script did:
  // replacement += "          </div>\n";
  // replacement += "        </article>";
  // And replaced /<\/article>/ with that.
  
  // So we just need to replace all instances of "          </div>\n" immediately preceding "        </article>"
  // with just ""!
  
  let match;
  const regex = /((?:          <\/div>\n)+)        <\/article>/;
  if ((match = content.match(regex))) {
      console.log(`Reverting ${file}`);
      content = content.replace(regex, "        </article>");
      fs.writeFileSync(path.join(dir, file), content);
  }
}
