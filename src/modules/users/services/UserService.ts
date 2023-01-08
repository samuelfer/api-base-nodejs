import AppError from '@shared/errors/AppError';
import IRequestCreateUpdate from '../typeorm/entities/interfaces/IRequestCreateUpdate';

import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

class UserService {
  private userRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async getAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }

  public async getById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }

  public async create({
    name,
    email,
    password,
  }: IRequestCreateUpdate): Promise<User> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('Email address already used.');
    }
    const user = await this.userRepository.save({
      name,
      email,
      password,
    });
    return user;
  }

  // public async update({
  //   id,
  //   name,
  //   email,
  //   password,
  // }: IRequestCreateUpdate): Promise<User> {
  //   const user = await this.repository.findById(id);

  //   if (!user) {
  //     throw new AppError('User not found.');
  //   }

  //   const userExists = await this.repository.findByName(name);

  //   if (userExists) {
  //     throw new AppError('There is already one user with this name');
  //   }

  //   user.name = name;
  //   user.email = email;
  //   user.password = password;

  //   await this.repository.save(user);

  //   return user;
  // }
}

export default UserService;
