import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Repository,
  EntityRepository,
} from "typeorm";
import { IsDate, IsEmail, IsString, Length, Max, Min } from "class-validator";

enum Permissions {
  Root,
  Admin,
  User,
}

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createdOn: Date;

  @Column()
  @IsDate()
  updatedOn: Date;

  @Column()
  @IsEmail()
  @Length(12, 64)
  email: string;

  @Column()
  @IsString()
  @Length(12, 64)
  password: string;

  @Column()
  @Length(1, 32)
  firstName: string;

  @Column()
  @Length(1, 32)
  lastName: string;

  @Column()
  @Min(0)
  @Max(120)
  age: number;

  @Column()
  permissions: Permissions;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { User, UserRepository };
