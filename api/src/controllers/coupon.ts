import { Router, Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { Coupon } from "../entity";
import { CouponService } from "../services";

class CouponController {
  private service: CouponService;
  public router: Router;

  constructor(db: string) {
    this.service = new CouponService(db);
    this.router = Router();
    this.routes();
  }

  private list = async (_: Request, res: Response) => {
    const result: Array<Coupon> = await this.service.list();
    res.send(result).json();
  };

  private get = async (req: Request, res: Response) => {
    const id: number = Number(req.params["id"]);
    const result: Coupon | undefined = await this.service.get(id);
    res.send(result).json();
  };

  private create = async (req: Request, res: Response) => {
    const coupon = req.body as Coupon;
    const result: Coupon = await this.service.create(coupon);
    res.send(result).json();
  };

  private update = async (req: Request, res: Response) => {
    const id: number = Number(req.params["id"]);
    const coupon = req.body as Coupon;
    const result: UpdateResult = await this.service.update(id, coupon);
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

export { CouponController };
