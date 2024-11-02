FROM node:22.11.0-alpine3.20 AS base

WORKDIR /app
COPY . .

RUN npm ci && \
    # npm run lint && \
    npm run build 

FROM nginx:1.27.2 AS runtime

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/dist /www

EXPOSE 80