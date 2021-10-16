import { injectable } from 'tsyringe';
import { ExternalServiceInterface } from './interfaces';

@injectable()
export class ExternalService implements ExternalServiceInterface {
  connect(): string {
    return '[ExternalService] Connected to external service!'
  }
}