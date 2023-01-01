FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY public public
COPY src src
RUN npm run build && \
    npm install -g serve
CMD serve -s build