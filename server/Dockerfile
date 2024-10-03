# Use an official Node.js image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the Express server will run on
EXPOSE 5000

# Start the Express server
CMD ["npm", "run", "start"]
