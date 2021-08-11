import { Router } from "express";
import { UserController } from "./controllers";

class ServerRouter {
  public routes: Router;

  constructor(db: string, base_url: string) {
    this.routes = Router();
    this.routes.use(`${base_url}/users`, new UserController(db).router);
  }
}

export { ServerRouter };
