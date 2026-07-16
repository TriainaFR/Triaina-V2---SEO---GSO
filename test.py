import urllib.request, json
req = urllib.request.Request("https://api.unsplash.com/search/photos?query=french+village&client_id=1X8j1G_0wJ5Qf3_l4eH_e3_d4e3_x3_3x_3x3_x3x_x3", headers={"User-Agent": "Mozilla/5.0"})
try:
    print(urllib.request.urlopen(req).read().decode("utf-8"))
except Exception as e:
    print(e)
