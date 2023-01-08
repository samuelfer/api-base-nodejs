import { AppDataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import IRequestCreateUpdate from '../entities/interfaces/IRequestCreateUpdate';

import User from '../entities/User';

class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  public async findByName(name: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        name,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }

  public async save(user: IRequestCreateUpdate): Promise<User> {
    const userSaved = await this.repository.save(user);
    return userSaved;
  }
}

export default UserRepository;
