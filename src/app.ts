import buildServer from "./server";
import { appConfig } from "../utils/appConfig";
import * as dotenv from "dotenv";
dotenv.config();

const server = buildServer();

function main() {
  server.listen({ port: parseInt(appConfig.port) }, function (err, address) {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}

main();
