# Use an official Node.js image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
