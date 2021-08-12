import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Repository,
  EntityRepository,
} from "typeorm";
import { IsDate } from "class-validator";

@Entity("store")
class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createdOn: Date;

  @Column()
  @IsDate()
  updatedOn: Date;
}

@EntityRepository(Store)
class StoreRepository extends Repository<Store> {}

export { Store, StoreRepository };
