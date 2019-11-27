FROM node:latest as node
LABEL maintainer="ticquique@gmail.com"

WORKDIR /usr/src/app
COPY ./videoclub/package*.json ./
RUN npm install

COPY ./videoclub .
RUN npm run build

FROM nginx
COPY --from=node /usr/src/app/dist/videoclub /var/www/html
COPY ../config/default.conf /etc/nginx/conf.d/default.conf
COPY ../config/nginx.conf /etc/nginx/nginx.conf
