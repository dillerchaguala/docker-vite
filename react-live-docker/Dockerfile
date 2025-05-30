FROM node:20-alpine

ENV HOST=0.0.0.0
ENV PORT=5173


WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 


COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]