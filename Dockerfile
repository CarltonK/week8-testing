FROM node:12-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app/

RUN npm test

CMD [ "node", "index" ]