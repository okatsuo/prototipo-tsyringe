import { inject, injectable } from 'tsyringe'
import { DataBaseInfoInterface, DatabaseServiceInterface } from './interfaces'

@injectable()
export class DatabaseService implements DatabaseServiceInterface {
  constructor(
    @inject("DataBaseInfo") private readonly database_info: DataBaseInfoInterface
  ) { }
  start(): string {
    return '[Database] Connected to database!'
  }
  getInfoConnection(): string {
    return this.database_info.info()
  }
}