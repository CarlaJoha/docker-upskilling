FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD [ "npm", "start" ]

# En la consola 
# > docker build -t nombredelaimagen .
# > docker run -p 8004:8004 nombredelaimagen
