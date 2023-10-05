FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
RUN npm cache clean --force
RUN adduser -D mongoclient
USER mongoclient
