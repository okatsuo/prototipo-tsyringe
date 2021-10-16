import { users } from '../database/fake-data';
import { FindOption, GetAllUsersRepositoryInterface, GetUserRepositoryInterface, UserModel } from '../interfaces';

export class DatabaseRepository implements GetUserRepositoryInterface, GetAllUsersRepositoryInterface {
  findAll(): UserModel[] {
    return users
  }

  findOne(username: string): UserModel | undefined {
    return users.find((user) => user.name === username)
  }
}