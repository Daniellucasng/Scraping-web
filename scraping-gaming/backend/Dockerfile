FROM node:22-slim

WORKDIR /app

COPY backend/package*.json ./
RUN npm install

COPY backend/. .

# Asegura permisos de ejecución para tsc
RUN chmod +x node_modules/.bin/tsc

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/Server.js"]
