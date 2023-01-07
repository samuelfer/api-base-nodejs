import { Request, Response } from 'express';
import UserService from '../services/UserService';
class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAll = new UserService();

    const users = await listAll.getAll();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = new UserService();

    const user = await createUser.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export default UserController;
