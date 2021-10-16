import { DatabaseService } from './database';
import { DatabaseServiceInterface } from './interfaces';
import { DatabaseRepository } from './repository';

class StartApp {
  constructor(
    private readonly database_service: DatabaseServiceInterface
  ) {}
  start(): void {
    this.database_service.startDatabase()
  }

  stop(): void {
    this.database_service.closeDatabase()
  }
}
const database_repository = new DatabaseRepository()
const database_service = new DatabaseService(database_repository)
const start_app = new StartApp(database_service)

// start app
start_app.start()

// get all users from fake database
const all_users = database_service.findAll()
console.log('all users: ', all_users)

// close app
start_app.stop()