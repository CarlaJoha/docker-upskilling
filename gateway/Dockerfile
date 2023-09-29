FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

# En la consola 
# > docker build -t gateway .
# > docker run -p 8000:8000 gateway
