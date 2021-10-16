import { DatabaseServiceInterface, GetAllUsersRepositoryInterface, GetUserRepositoryInterface, UserModel, UserRepositoryInterface } from '../interfaces';

export class DatabaseService implements DatabaseServiceInterface, GetUserRepositoryInterface, GetAllUsersRepositoryInterface {
  constructor(
    private readonly UserRepository: UserRepositoryInterface,
  ) {}
  startDatabase(): void {
    console.log('[Database] Connected to MySQL!');
  }

  findOne(username: string): UserModel | undefined {
    return this.UserRepository.findOne(username)
  }

  findAll(): UserModel[] {
    return this.UserRepository.findAll()
  }

  closeDatabase(): void {
    console.log('[Database] Closed MySQL connection!');
  }
}