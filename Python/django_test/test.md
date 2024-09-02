```
初回
#コンテナをビルドする
sudo docker-compose build --no-cache

#コンテナを起動する
sudo docker-compose run app bash
#コンテナに入りマイグレーションとユーザー作成を行う
python mysite/manage.py migrate
python mysite/manage.py createsuperuser

#コンテナから抜ける
sudo docker-compose up --build
```