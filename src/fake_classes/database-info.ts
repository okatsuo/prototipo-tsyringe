import { inject, injectable } from 'tsyringe';
import { DataBaseInfoInterface } from './interfaces';

@injectable()
export class DatabaseInfo implements DataBaseInfoInterface {
  constructor(@inject("DatabaseDriver") private driver_name: string) { }
  info(): string {
    return `[DatabaseInfo] you are connected to ${this.driver_name} driver`
  }
}
