import { Router, Request, Response } from "express";
import { UserEntity } from "../entity/user";
import { UserService } from "../services";

class UserController {
  private service: UserService;
  public router: Router;

  constructor(db: string) {
    this.service = new UserService(db);
    this.router = Router();
    this.routes();
  }

  private list = async (_: Request, res: Response) => {
    const users = await this.service.list();
    res.send(users).json();
  };

  private get = async (req: Request, res: Response) => {
    const id: string = req.params["id"];
    res.send(await this.service.get(id)).json();
  };

  private create = async (req: Request, res: Response) => {
    const user = req.body as UserEntity;
    res.send(await this.service.create(user)).json();
  };

  private update = async (req: Request, res: Response) => {
    const id: string = req.params["id"];
    const user = req.body as UserEntity;

    res.send(await this.service.update(id, user)).json();
  };

  private delete = async (req: Request, res: Response) => {
    const id: string = req.params["id"];
    res.send(await this.service.delete(id)).json();
  };

  public routes() {
    this.router.get("/", this.list);
    this.router.get("/", this.get);
    this.router.get("/:id", this.create);
    this.router.get("/:id", this.update);
    this.router.get("/:id", this.delete);
  }
}

export { UserController };
