FROM node:11.15.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN apt-get update -y
RUN apt-get install vim -y
RUN npm install
RUN npm run build

# expose port for node
EXPOSE 6001

CMD ["node", "server/index.js"]
