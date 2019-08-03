FROM node:11.15.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

CMD ["npm", "install"]
CMD ["npm", "build"]
CMD ["npm", "start"]

# expose port for node
EXPOSE 6001

