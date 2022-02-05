FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:1.20.2-alpine AS front-prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]