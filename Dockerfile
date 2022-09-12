FROM node:16.13.0-alpine3.14
WORKDIR /hot-banana-pie-bot
COPY ./package.json ./
RUN npm install
COPY ./src/ ./src
CMD npm start
