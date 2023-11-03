FROM node:20
COPY .output app
WORKDIR app
EXPOSE 5031
ENV NITRO_PORT=5031
ENTRYPOINT [ "node", "server/index.mjs" ]