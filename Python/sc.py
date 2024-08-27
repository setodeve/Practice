import requests
from bs4 import BeautifulSoup

# URLを指定
url = 'https://yonehachi.org/ja/collections/all?filter.p.vendor=%E4%BC%8A%E4%B8%87%E9%87%8C%E9%8D%8B%E5%B3%B6%E7%84%BC+%E7%80%AC%E5%85%B5%E7%AA%AF&page=5&sort_by=best-selling'  # 実際のURLに置き換える

# URLからページのHTMLを取得
response = requests.get(url)
html_content = response.text

# BeautifulSoupを使用してHTMLをパース
soup = BeautifulSoup(html_content, 'html.parser')

# 指定したクラス名を持つ要素をすべて取得
class_names = ['full-unstyled-link', 'price-item price-item--regular', 'price-item price-item--sale price-item--last']

for class_name in class_names:
    elements = soup.find_all(class_=class_name)
    if elements:
        print(f"Found elements with class '{class_name}':")
        for element in elements:
            print(element.text.strip())
    else:
        print(f"No elements found with class '{class_name}'")