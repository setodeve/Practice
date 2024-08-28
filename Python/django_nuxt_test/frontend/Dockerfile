FROM node:20 AS base

WORKDIR /front

RUN apt-get update \
    && apt-get install -y \
    && npm install -g pnpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev"]

