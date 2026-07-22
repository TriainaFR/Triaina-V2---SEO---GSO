import urllib.request
import json
import re

def search_images(query):
    url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if 'results' in data and len(data['results']) > 0:
                print(f"{query}: {data['results'][0]['image']}")
            else:
                print(f"{query}: No results")
    except Exception as e:
        print(f"{query}: Error {e}")

queries = [
    "Bernard Magrez chateau",
    "Tamtam AI logo",
    "Sunlife Mauritius resorts",
    "Les Hardis magazine",
    "Talis Business School campus",
    "Lazuli Travel Bureau",
    "Skilink ESN",
    "Yonder.fr",
    "Lazuli Nil cruise",
    "Best Restaurants Paris"
]

for q in queries:
    search_images(q)
