import { getConnection } from "typeorm";
import { UserRepository } from "../entity";
import { User } from "../entity/user";

class UserService {
  private repo: UserRepository;

  constructor(db: string) {
    this.repo = getConnection(db).getCustomRepository(UserRepository);
  }

  public list = async () => await this.repo.find();

  public get = async (id: number) => await this.repo.findOne(id);

  public create = async (user: User) => await this.repo.save(user);

  public update = async (id: number, user: User) =>
    await this.repo.update(id, user);

  public delete = async (id: number) => await this.repo.delete(id);
}

export { UserService };
