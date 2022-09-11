FROM node:16.13.0
WORKDIR /hot-banana-pie-bot
COPY ./package.json ./
RUN npm install
COPY ./src/ ./src
EXPOSE 3200
CMD npm run start
