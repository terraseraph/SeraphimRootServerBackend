FROM node:10.15.3-alpine
# https://hub.docker.com/_/node/

# install dependencies
WORKDIR /home/server
COPY package*.json ./
# COPY package.json package-lock.json* ./
# RUN npm cache clean --force && npm install
RUN npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /home/server

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 4300
EXPOSE 4300

# CMD [ "npm", "run", "start" ]
CMD ["node", "app.js"]