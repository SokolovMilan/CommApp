FROM node:10.15.3-alpine as build

RUN mkdir /opt/communicator

WORKDIR /opt/communicator
COPY . /opt/communicator

RUN apk add --no-cache --update \
  npm=10.14.2-r0 \
  libtool=2.4.6-r5 automake=1.16.1-r0 \
  autoconf=2.69-r2 nasm=2.13.03-r0 build-base=0.5-r1 \
  && npm install -g sass@1.20.1 \
  && npm install \
  && ./node_modules/webpack/bin/webpack.js \
    --env.APP_ENV=production \
    --config webpack.production.config.js --progress \
  && sass src/assets/scss/main.scss:public/index.css

FROM nginx:1.16.0-alpine

COPY --from=build /opt/communicator/public /usr/share/nginx/html
