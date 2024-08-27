### 環境構築
```
#gitclone後初回
docker-compose build --no-cache
docker-compose exec nuxt bash
pnpm install && pnpm run dev
docker-compose run django python manage.py migrate
docker-compose run django python manage.py createsuperuser --email admin@example.com --username admin
```

``
#ビルドし直し
docker-compose build --no-cache
```

``
#コンテナ立ち上げ
docker-compose up -d
```