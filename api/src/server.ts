import "reflect-metadata";
import * as express from "express";

import { ServerRouter } from "./router";
import { createConnection } from "typeorm";

class Server {
  private host: string;
  private port: string;
  private base_url: string;
  private db: string;
  private app: express.Application;

  constructor() {
    this.host = process.env.HOST ?? "localhost";
    this.port = process.env.PORT ?? "8080";
    this.base_url = process.env.BASE_URL ?? "/";
    this.db = process.env.DB ?? "development";

    const router: ServerRouter = new ServerRouter(this.db, this.base_url);

    this.app = express();
    this.routes(router);
  }

  public async routes(router: ServerRouter) {
    await createConnection(this.db);
    this.app.use(router.routes);
  }

  public start() {
    this.app.listen(this.port, () =>
      console.log(`Server listening on ${this.host}:${this.port}.`)
    );
  }
}

export { Server };
