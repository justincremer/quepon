import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Repository,
  EntityRepository,
} from "typeorm";
import { IsDate, IsEmail, IsInt, Length, Max, Min } from "class-validator";

@Entity("users")
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createdOn: Date;

  @Column()
  @IsDate()
  updatedOn: Date;

  @Column()
  @Length(1, 32)
  firstName: string;

  @Column()
  @Length(1, 32)
  lastName: string;

  @Column()
  @IsEmail()
  @Length(12, 64)
  email: string;

  @Column()
  @IsInt()
  @Min(0)
  @Max(100)
  age: number;
}

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {}

export { UserEntity, UserRepository };
