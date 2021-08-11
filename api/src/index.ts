import { Server } from "./server";
import * as dotenv from "dotenv";

dotenv.config({
  path: "dev.env",
});

const server = new Server();

server.start();
