#!/bin/sh
cd /app
npm install
# sleep infinity
#npm run build
npm run build
npm run start -- -p 80

