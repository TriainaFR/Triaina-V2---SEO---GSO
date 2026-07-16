import urllib.request
import re

ids = [
    "1503516459261-40c66117780a",
    "1518398046578-8cca57782e17",
    "1465256410760-10640339c711",
    "1522093007474-d86e9bf7ba6f",
    "1499856871958-5b9627545d1a",
    "1431274172761-fce413f64343", # e.g.
    "1480074468270-a4b51dc86f58",
    "1464822759023-fed622ff2c3b",
    "1513581166311-8e730da4234b",
    "1520627960688-693f18e54e44",
    "1473881403248-cb58b76ce836",
    "1467269204594-e8e780e2b960",
    "1494522358652-330b3ea61524",
    "1430006764491-0309971db414"
]

for photo_id in ids:
    url = f"https://unsplash.com/photos/{photo_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req).read().decode("utf-8")
        title = re.search(r"<title>(.*?)</title>", html)
        if title:
            print(f"{photo_id}: {title.group(1)}")
    except Exception as e:
        pass
