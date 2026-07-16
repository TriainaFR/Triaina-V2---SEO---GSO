const https = require('https');
https.get('https://unsplash.com/napi/search/photos?query=rennes+france', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(json.results.map(r => r.id));
    } catch(e) {
      console.log(e);
    }
  });
});
