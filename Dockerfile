FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY client/package*.json ./client/

RUN npm install
RUN cd client && npm install

COPY . .

RUN npm run build
RUN cd client && npm run build

EXPOSE 8080
ENV PORT 8080

CMD ["npm", "run", "prod"]