# Stage 1: Build the React app
FROM node:14 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a lightweight image with only production dependencies and the build output
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/src/server.js .

# Install only production dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install --production

EXPOSE 3000

CMD ["node", "server.js"]
