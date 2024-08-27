FROM node:20 AS base

WORKDIR /front

RUN apt-get update \
    && apt-get install -y \
    && npm install -g pnpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY . .
RUN pnpm install
EXPOSE 3000
CMD ["pnpm", "run", "dev"]

