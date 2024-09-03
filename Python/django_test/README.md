## 環境構築について
### git clone後初回時
```
#コンテナをビルドする
sudo docker-compose build --no-cache

#コンテナに入る
sudo docker-compose run app bash
#コンテナに入りマイグレーションとユーザー作成を行う
python manage.py migrate
python manage.py createsuperuser

#コンテナを立ち上げる
sudo docker-compose up -d
```

### キャッシュを削除してビルドしたい時
```
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

### 上記以外
```
sudo docker-compose up -d
```
## その他
### ツール、ライブラリ紹介
- dynamodb-local
  - ローカル環境でDynamoDBを立ち上げるためのツール
- dynamodb-admin
  - dynamodb-local管理用のGUIツール
  - 以下URLでアクセス可能
    - http://localhost:50727
- boto3
  - dynamodbを操作するためのライブラリ
- minio
  - S3互換のオブジェクトストレージツール
  - 以下URLでアクセス可能
    - http://localhost:9001/login
      - ユーザー名: minio
      - パスワード: minio123
- django-minio-storage
  - minioとの連携を行うためのライブラリ

