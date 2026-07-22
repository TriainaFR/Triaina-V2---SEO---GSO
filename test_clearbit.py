import urllib.request
urls = [
    'https://logo.clearbit.com/bernard-magrez.com',
    'https://logo.clearbit.com/tamtam.pro',
    'https://logo.clearbit.com/yoursunlife.com',
    'https://logo.clearbit.com/leshardis.com',
    'https://logo.clearbit.com/talis-business-school.com',
    'https://logo.clearbit.com/lazuli.fr',
    'https://logo.clearbit.com/skilink.fr',
    'https://logo.clearbit.com/yonder.fr',
    'https://logo.clearbit.com/bestrestaurantsparis.com'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"{url}: {res.status}")
    except Exception as e:
        print(f"{url}: {e}")
