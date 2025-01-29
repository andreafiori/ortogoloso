FROM node:20.10.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npx", "http-server", "dist/ortogoloso/browser", "-p", "4200"]
