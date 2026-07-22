import urllib.request

urls = [
    'https://bernard-magrez.com/wp-content/uploads/2023/12/Chateau-Pape-Clement-scaled.jpg',
    'https://www.talis-business-school.com/wp-content/uploads/2021/04/campus_bordeaux-1.jpg',
    'https://www.yonder.fr/yonder_site.jpg',
    'https://skilink.fr/images/dashboard-preview.jpg',
    'https://www.leshardis.com/wp-content/uploads/2023/11/Logo_LesHardis-1.png'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"{url}: {res.status}")
    except Exception as e:
        print(f"{url}: {e}")
