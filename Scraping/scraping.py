import requests
from bs4 import BeautifulSoup

url = "url"
r = requests.get(url)

getData = BeautifulSoup(r.content, "html.parser")

results= getData.select("class and id") 


for result in results:
    #new line + tab in case of pasting for excel
    print(result.get_text() + "\n\t" )

    #new line in case of pasting for document
    print(result.get_text() + "\n" )

