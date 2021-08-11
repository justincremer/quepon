import { getConnection } from "typeorm";
import { UserRepository } from "../entity";
import { UserEntity } from "../entity/user";

class UserService {
  private repo: UserRepository;

  constructor(db: string) {
    this.repo = getConnection(db).getCustomRepository(UserRepository);
  }

  public list = async () => await this.repo.find();

  public get = async (id: string) => await this.repo.findOne(id);

  public create = async (user: UserEntity) => await this.repo.save(user);

  public update = async (id: string, user: UserEntity) =>
    await this.repo.update(id, user);

  public delete = async (id: string) => await this.repo.delete(id);
}

export { UserService };
