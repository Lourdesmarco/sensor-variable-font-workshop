#FROM ubuntu:16.04
WORKDIR .

# Install Node.js
RUN apt-get update
RUN apt-get install --yes curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN apt-get install --yes git

COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Binds to port
EXPOSE 80
CMD ["npm", "start"]
