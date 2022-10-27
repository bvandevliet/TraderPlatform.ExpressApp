# syntax=docker/dockerfile:1

FROM node:alpine AS build
ENV NODE_ENV=development
WORKDIR /usr/app
COPY . .
RUN yarn install --production=false
RUN npm run dist

FROM node:alpine AS final
ENV NODE_ENV=production
WORKDIR /www
COPY ./package*.json .
RUN yarn install
COPY --from=build /usr/app/dist/ ./dist
EXPOSE ${PORT}
CMD [ "node", "." ]