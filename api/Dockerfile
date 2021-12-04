# Build Image
FROM node:14.17.6 AS builder
COPY . /usr/local/mohaemookji

# api server library install and build
WORKDIR /usr/local/mohaemookji/
RUN npm install -g && npm run build


# API Container
FROM alpine:edge
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
#   CMD [ "executable" ]
LABEL maintainer1="tlgns7386@gmail.com" maintainer2="byaa1972@gmail.com"

# build file loading from builder image
COPY --from=builder /usr/local/mohaemookji/dist /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm
EXPOSE 17260
ENTRYPOINT ["node", "main.js"]