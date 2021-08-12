import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Repository,
  EntityRepository,
} from "typeorm";
import { IsDate, Length } from "class-validator";

@Entity("coupon")
class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createdOn: Date;

  @Column()
  @IsDate()
  updatedOn: Date;

  @Column()
  @Length(0, 64)
  code: string;
}

@EntityRepository(Coupon)
class CouponRepository extends Repository<Coupon> {}

export { Coupon, CouponRepository };
