FROM node:20-alpine

WORKDIR /app

COPY index.html package.json Karim1.png railway.json server.mjs ./
COPY scripts ./scripts

RUN node scripts/build.mjs

EXPOSE 8080

CMD ["node", "server.mjs"]
