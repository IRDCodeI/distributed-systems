FROM node:latest

WORKDIR /home/node

COPY package*.json ./

RUN npm install -f

CMD ["npm","run","dev"]