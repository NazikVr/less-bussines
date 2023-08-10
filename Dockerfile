FROM node:14-alpine AS development
WORKDIR /app
COPY ./app /app
CMD [ "/bin/sh", "/app/start.sh"]
