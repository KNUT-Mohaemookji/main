# Main Container image
FROM alpine:edge

# build file loading
COPY . /usr/local/mohaemookji

# frontend library install and build
WORKDIR /usr/local/mohaemookji/mh-frontend
RUN npm install && npm run build

# timezone setting and nodejs, npm install
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm \
    && npm install && npm run build

# workdir change for build file execute
# WORKDIR /usr/local/mohaemookji/dist

EXPOSE 17260
ENTRYPOINT ["node", "index.js"]