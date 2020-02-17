FROM node:13.6.0

RUN mkdir /app
WORKDIR /app

COPY ./index.js .
COPY ./package.json .
COPY ./.babelrc .
COPY ./start.sh .

RUN npm i

CMD ./start.sh