import urllib.request
import json
import urllib.parse

def get_wiki_image(title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=1000"
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    print(f"{title}: {pages[page_id]['thumbnail']['source']}")
                    return
    except:
        pass
    
    url = f"https://fr.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=1000"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    print(f"{title}: {pages[page_id]['thumbnail']['source']}")
                    return
    except:
        pass

titles = [
    "Bernard Magrez",
    "Château Pape Clément",
    "Maurice (pays)",
    "Nil"
]
for t in titles:
    get_wiki_image(t)
