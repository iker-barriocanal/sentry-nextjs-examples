FROM node:15-alpine

WORKDIR /path/to/app

RUN apk add --update \
  && apk add --no-cache ca-certificates \
  && apk add --no-cache --virtual .build-deps curl

RUN curl -L https://unpkg.com/@pnpm/self-installer | node && apk del .build-deps

COPY package.json ./

RUN yarn

RUN yarn add @sentry/nextjs --production=true

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
