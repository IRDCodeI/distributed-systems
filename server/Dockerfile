FROM node:latest

WORKDIR /home/node

COPY package.json ./

RUN npm install -f

COPY . .

ARG port

EXPOSE $port


