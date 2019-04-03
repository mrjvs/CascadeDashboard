FROM node:lts-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json and run NPM install
# We do this to leverage dockers caching ability
# so we don't have to do this everytime we change the code
COPY package*.json ./
COPY client/package*.json ./client/

RUN npm install
RUN cd client && npm install

# Copy the source code to the working directory
COPY . .

# Build both the server and the client
RUN npm run build
RUN cd client && npm run build

EXPOSE 8080
ENV PORT 8080

CMD ["npm", "run", "prod"]