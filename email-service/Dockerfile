
FROM node:23-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:23-alpine AS pruner
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist

FROM node:23-alpine
WORKDIR /app

COPY --from=pruner /app/node_modules ./node_modules
COPY --from=pruner /app/dist ./dist
COPY package.json . 

EXPOSE 9090

ENV NODE_ENV=production

CMD ["node", "dist/server.js"]