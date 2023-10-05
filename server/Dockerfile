FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]
RUN npm cache clean --force
RUN adduser -D mongoserver
USER mongoserver
