FROM node:latest

WORKDIR /home/node

COPY package.json ./

RUN npm install -f

RUN npm install -g @angular/cli@14.0.0

COPY . .

ARG port

EXPOSE $port
