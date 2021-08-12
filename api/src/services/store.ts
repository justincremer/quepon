import { getConnection } from "typeorm";
import { StoreRepository } from "../entity";
import { Store } from "../entity";

class StoreService {
  private repo: StoreRepository;

  constructor(db: string) {
    this.repo = getConnection(db).getCustomRepository(StoreRepository);
  }

  public list = async () => await this.repo.find();

  public get = async (id: number) => await this.repo.findOne(id);

  public create = async (store: Store) => await this.repo.save(store);

  public update = async (id: number, store: Store) =>
    await this.repo.update(id, store);

  public delete = async (id: number) => await this.repo.delete(id);
}

export { StoreService };
