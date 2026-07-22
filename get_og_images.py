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
    if not url.startswith('http'):
        url = 'https://' + url
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            html = response.read().decode('utf-8', errors='ignore')
            parser = MyHTMLParser()
            parser.feed(html)
            return parser.og_image
    except Exception as e:
        return None

urls = {
    'Bernard Magrez': 'www.bernard-magrez.com',
    'Tamtam AI': 'tamtam.pro',
    'YourSunlife': 'www.yoursunlife.com',
    'Les Hardis': 'leshardis.com',
    'Talis Education Group': 'www.talis-business-school.com',
    'Lazuli Travel Bureau': 'www.lazuli.fr',
    'Skilink': 'www.skilink.fr',
    'Yonder': 'www.yonder.fr',
    'Best Restaurants Paris': 'www.bestrestaurantsparis.com'
}

for name, url in urls.items():
    img = get_og_image(url)
    print(f"{name}: {img}")
