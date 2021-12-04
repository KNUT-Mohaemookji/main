# Build Image
FROM node:14.17.6 AS builder
COPY . /usr/local/mohaemookji

# frontend library install and build
WORKDIR /usr/local/mohaemookji/mh-frontend
RUN npm install && npm run build

# main server library install and build
WORKDIR /usr/local/mohaemookji/
RUN npm install && npm run build


# Main Container image
FROM alpine:edge
# build file loading from builder image
COPY --from=builder /usr/local/mohaemookji/dist /usr/local/mohaemookji

# timezone setting and nodejs, npm install
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm
EXPOSE 17260
ENTRYPOINT ["node", "main.js"]