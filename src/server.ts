import Fastify from "fastify";

function buildServer() {
  const server = Fastify();

  server.get("/healthcheck", async function () {
    return { status: "OK" };
  });

  return server;
}

export default buildServer;
module.exports = buildServer;
