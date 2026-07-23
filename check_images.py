import urllib.request

with open('constants.ts', 'r') as f:
    content = f.read()

import re
urls = re.findall(r"'(https://images.unsplash.com[^']+)'", content)
urls = list(set(urls))
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        if res.status != 200:
            print(f"Error {res.status}: {url}")
    except Exception as e:
        print(f"Failed {url}: {e}")
