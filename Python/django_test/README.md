## 環境構築について
### git clone初回時
```
#コンテナをビルドする
sudo docker-compose build --no-cache

#コンテナに入る
sudo docker-compose run app bash
#コンテナに入りマイグレーションとユーザー作成を行う
python mysite/manage.py migrate
python mysite/manage.py createsuperuser

#コンテナを立ち上げる
sudo docker-compose up -d
```

### キャッシュを削除してビルドしたい時
```
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

### 上記以外初回時
```
sudo docker-compose up -d
```