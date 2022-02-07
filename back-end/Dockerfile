FROM node:14-alpine

WORKDIR /
COPY package*.json ./
RUN npm install
COPY ./ ./

ENTRYPOINT [ "npm", "run", "start:docker" ]

# "npx" "sequelize-cli" "db:create" "&&" "npx" "sequelize-cli" "db:migrate" "&&" "npx" "sequelize-cli" "db:seed"