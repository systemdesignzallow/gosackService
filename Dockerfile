FROM node:11.15.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
CMD ["npm", "start"]

# expose port for node
EXPOSE 6001

