FROM node:14-alpine AS back
WORKDIR /
COPY back-end/package*.json ./
RUN npm install
COPY back-end ./
ENV NODE_ENV production
ENV API_PORT 3001
ENV MYSQL_HOST 0.0.0.0
ENV MYSQL_PORT 666
ENV MYSQL_USER localhost
ENV MYSQL_PASSWORD rootpw
ENV MYSQL_DB_NAME delivery-app
RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed
EXPOSE 3001
ENTRYPOINT []

FROM node:14-alpine AS build
WORKDIR /app
COPY front-end/package*.json ./
RUN npm install
COPY front-end ./
RUN npm run build

FROM nginx:1.20.2-alpine AS front-prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]