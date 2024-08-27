import requests
from bs4 import BeautifulSoup

# スクレイピングするURL
url = 'http://localhost:4173/'

# requestsを使ってWebページを取得
response = requests.get(url)

# BeautifulSoupオブジェクトを作成し、パーサーに'html.parser'を使用
soup = BeautifulSoup(response.text, 'html.parser')

# `td`タグでclassが"high"でないものを見つける
td_tags = soup.find_all('td', class_=lambda x: x is None or (not 'high' in x and not 'file' in x))



# data-value属性を取得する
for td in td_tags:
    # tdタグにdata-value属性がある場合のみ値を取得
    if 'data-value' in td.attrs:

        data_value = td['data-value']
        if 'components' in data_value:
            print(data_value)
