import requests
from bs4 import BeautifulSoup

url = "URL$B;XDj(B"
r = requests.get(url)

getData = BeautifulSoup(r.content, "html.parser")

results= getData.select("$B%/%i%9!"(Bid$B;XDj(B") 


for result in results:
    # $B2~9T(B+$B%?%V(B($B%(%/%;%k$J$I$N%F!<%V%k$K%;%k$4$H$KE=$jIU$1$?$$>l9g(B)
    print(result.get_text() + "\n\t" )

    # $B2~9T$N$_(B($BJ8=q$KE=$jIU$1$?$$>l9g(B)
    print(result.get_text() + "\n" )

