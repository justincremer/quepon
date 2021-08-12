import { Router } from "express";
import {
  UserController,
  CouponController,
  StoreController,
} from "./controllers";

class ServerRouter {
  public routes: Router;

  constructor(db: string, base_url: string) {
    this.routes = Router()
      .get(`${base_url}/`, (_, res) => res.send("hello world"))
      .use(`${base_url}/users`, new UserController(db).router)
      .use(`${base_url}/coupons`, new CouponController(db).router)
      .use(`${base_url}/stores`, new StoreController(db).router);
  }
}

export { ServerRouter };
