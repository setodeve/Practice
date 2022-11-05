import requests
from bs4 import BeautifulSoup

url = "URL指定"
r = requests.get(url)

getData = BeautifulSoup(r.content, "html.parser")

results= getData.select("クラス、id指定") 


for result in results:
    # 改行+タブ(エクセルなどのテーブルにセルごとに貼り付けたい場合)
    print(result.get_text() + "\n\t" )

    # 改行のみ(文書に貼り付けたい場合)
    print(result.get_text() + "\n" )

