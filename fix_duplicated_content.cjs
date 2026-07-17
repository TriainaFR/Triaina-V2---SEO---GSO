const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // We need to fix the double header/image/prose div!
  // The V4 script generated:
  // <div className="max-w-4xl mx-auto prose ...">
  //   ${reactContent}
  //   {/* Author Block */}
  
  // Inside ${reactContent}, there is a duplicate header, duplicate image, and duplicate prose div!
  // We want to extract ONLY the text inside the duplicate prose div, and replace ${reactContent} with it!
  
  // Let's find the FIRST <div className="max-w-4xl mx-auto prose ...">
  const proseRegex = /<div className="max-w-4xl mx-auto prose[^>]*>([\s\S]*?){\/\* Author Block \*\//;
  
  let match = content.match(proseRegex);
  if (match) {
     let innerContent = match[1];
     // innerContent contains the duplicate header, image, and prose div!
     // We can just extract everything after the SECOND <div className="max-w-4xl mx-auto prose ...">
     // Or rather, since V4 inserted the old header, old image, old prose, we can just look for the SECOND prose div opening tag inside innerContent!
     const secondProseRegex = /<div className="max-w-4xl mx-auto prose[^>]*>([\s\S]*)$/;
     let secondMatch = innerContent.match(secondProseRegex);
     
     if (secondMatch) {
         let actualArticleContent = secondMatch[1];
         // replace innerContent with actualArticleContent
         content = content.replace(match[1], actualArticleContent);
         fs.writeFileSync(path.join(dir, file), content);
         console.log(`Fixed duplicates in ${file}`);
     } else {
         // Maybe it didn't have duplicates because it was one of the 13 files?
         // For the 13 files, they didn't have duplicate header/image inside <article> because their header was OUTSIDE <article> originally!
         // So for those 13 files, V4 just took their content, but it was missing the closing </div> of the prose!
         // Wait, if it didn't have duplicates, it means `innerContent` is exactly the article text.
         // BUT wait, V4 still stripped the closing </div> tags because of `(.|\n)*$`.
         // So for the 13 files, `innerContent` is missing the closing `</div>` of whatever was inside it.
     }
  }
}
console.log("Done fixing duplicates.");
