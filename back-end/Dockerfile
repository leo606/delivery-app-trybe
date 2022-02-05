FROM node:14-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 3001
ENTRYPOINT [ "node", "." ]