import { getConnection } from "typeorm";
import { CouponRepository } from "../entity";
import { Coupon } from "../entity/coupon";

class CouponService {
  private repo: CouponRepository;

  constructor(db: string) {
    this.repo = getConnection(db).getCustomRepository(CouponRepository);
  }

  public list = async () => await this.repo.find();

  public get = async (id: number) => await this.repo.findOne(id);

  public create = async (coupon: Coupon) => await this.repo.save(coupon);

  public update = async (id: number, coupon: Coupon) =>
    await this.repo.update(id, coupon);

  public delete = async (id: number) => await this.repo.delete(id);
}

export { CouponService };
