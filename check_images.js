const fs = require('fs');
const https = require('https');

const urls = fs.readFileSync('constants.ts', 'utf8')
  .match(/https:\/\/images\.unsplash\.com\/[a-zA-Z0-9-]+\?auto=format&fit=crop&q=80&w=1200/g)
  || [];

const uniqueUrls = [...new Set(urls)];
console.log(`Checking ${uniqueUrls.length} images...`);

uniqueUrls.forEach(url => {
  https.request(url, { method: 'HEAD' }, res => {
    if (res.statusCode >= 400) {
      console.log(`BROKEN: ${url} (Status: ${res.statusCode})`);
    }
  }).on('error', err => {
    console.log(`ERROR: ${url} (${err.message})`);
  }).end();
});
