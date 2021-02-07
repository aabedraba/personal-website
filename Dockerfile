FROM node:14.15.4-alpine

WORKDIR /app

ADD . /app

RUN npm i && npm run build

CMD npm start