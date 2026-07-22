import urllib.request
import urllib.parse
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.og_image = None
    def handle_starttag(self, tag, attrs):
        if tag == 'meta':
            attrs_dict = dict(attrs)
            if attrs_dict.get('property') == 'og:image' or attrs_dict.get('name') == 'twitter:image':
                if not self.og_image:
                    self.og_image = attrs_dict.get('content')

def get_og_image(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            html = response.read().decode('utf-8', errors='ignore')
            parser = MyHTMLParser()
            parser.feed(html)
            return parser.og_image
    except Exception as e:
        return str(e)

print(get_og_image("https://www.bestrestaurantsparis.com/"))
print(get_og_image("https://skilink.fr/"))
