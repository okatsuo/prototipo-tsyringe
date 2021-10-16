import "reflect-metadata"
import { container, inject, injectable } from 'tsyringe'
import { DatabaseServiceInterface, ExternalServiceInterface } from './fake_classes/interfaces'
import './tsyringe-containers'

@injectable()
class Main {
  constructor(
    @inject("DatabaseService") 
    private readonly database: DatabaseServiceInterface,

    @inject("ExternalService") 
    private readonly external_service: ExternalServiceInterface
  ) {}

  start(){
    console.log('1º: ', this.database.start())
    console.log('2º: ', this.external_service.connect())
    console.log('3º: ', this.database.getInfoConnection())
  }
}

const main_app = container.resolve(Main)
main_app.start();