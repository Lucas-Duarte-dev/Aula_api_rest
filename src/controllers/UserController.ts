import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { hash } from "bcryptjs";

class UserController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const repository = getCustomRepository(UserRepository);

    const passwordHash = await hash(password, 8);

    const user = repository.create({ username, password: passwordHash });

    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();
