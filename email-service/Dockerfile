# ---- Build Stage ----
    FROM node:23-alpine AS builder
    WORKDIR /app
    
    # Copy package files and install dependencies (including devDependencies for build)
    COPY package*.json ./
    RUN npm install
    
    # Copy source code
    COPY . .
    
    # Build TypeScript
    RUN npm run build
    
    # ---- Prune Stage ----
    FROM node:23-alpine AS pruner
    WORKDIR /app
    COPY package*.json ./
    # Install *only* production dependencies
    RUN npm ci --only=production
    COPY --from=builder /app/dist ./dist
    
    # ---- Final Stage ----
    FROM node:23-alpine
    WORKDIR /app
    
    # Copy only production dependencies and compiled code
    COPY --from=pruner /app/node_modules ./node_modules
    COPY --from=pruner /app/dist ./dist
    COPY package.json . 
    
    # Expose the port the app runs on
    EXPOSE 9090
    
    # Set NODE_ENV to production
    ENV NODE_ENV=production
    
    # Command to run the application
    CMD ["node", "dist/server.js"]