import { Router, Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { Store } from "../entity";
import { StoreService } from "../services";

class StoreController {
  private service: StoreService;
  public router: Router;

  constructor(db: string) {
    this.service = new StoreService(db);
    this.router = Router();
    this.routes();
  }

  private list = async (_: Request, res: Response) => {
    const result: Array<Store> = await this.service.list();
    res.send(result).json();
  };

  private get = async (req: Request, res: Response) => {
    const id: number = Number(req.params["id"]);
    const result: Store | undefined = await this.service.get(id);
    res.send(result).json();
  };

  private create = async (req: Request, res: Response) => {
    const store = req.body as Store;
    const result: Store = await this.service.create(store);
    res.send(result).json();
  };

  private update = async (req: Request, res: Response) => {
    const id: number = Number(req.params["id"]);
    const store = req.body as Store;
    const result: UpdateResult = await this.service.update(id, store);
    res.send(result).json();
  };

  private delete = async (req: Request, res: Response) => {
    const id: number = Number(req.params["id"]);
    const result: DeleteResult = await this.service.delete(id);
    res.send(result).json();
  };

  public routes() {
    this.router.get("/", this.list);
    this.router.get("/", this.get);
    this.router.get("/:id", this.create);
    this.router.get("/:id", this.update);
    this.router.get("/:id", this.delete);
  }
}

export { StoreController };
