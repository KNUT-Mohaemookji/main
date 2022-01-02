# API Container
FROM alpine:edge
LABEL maintainer1="tlgns7386@gmail.com" maintainer2="byaa1972@gmail.com"

# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
#   CMD [ "executable" ]
# build file loading from builder image
COPY . /usr/local/mohaemookji

# timezone setting and nodejs, npm install
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm \
    && npm install && npm run build

WORKDIR /usr/local/mohaemookji/dist
EXPOSE 17260
ENTRYPOINT ["node", "main.js"]