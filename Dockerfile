# docker build -t qwx1337/blogchain-client .
# docker run -d -p 3000:3000 --name blogchain-client qwx1337/blogchain-client

FROM node:12

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]