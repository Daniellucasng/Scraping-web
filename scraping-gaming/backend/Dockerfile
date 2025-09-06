FROM node:22-alpine

WORKDIR /app

# Copiar solo package.json y package-lock.json primero (mejor cacheo)
COPY backend/package*.json ./

# Instalar TODAS las dependencias (incluye typescript y nodemon)
RUN npm install

# Copiar el resto del código
COPY backend/. .

# Compilar TypeScript -> dist/
RUN npm run build

EXPOSE 3001

CMD ["node", "dist/Server.js"]
