FROM node:latest

ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN if [ "$USER_GID" != "1000" ]; then groupmod node --gid $USER_GID; fi \
    && if [ "$USER_UID" != "1000" ]; then usermod --uid $USER_UID node; fi 

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet --no-optional && npm cache clean --force

COPY . .
