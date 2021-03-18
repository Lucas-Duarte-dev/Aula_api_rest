import { EntityRepository, Repository } from "typeorm";
import { User } from "../model/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository };
