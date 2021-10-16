import { container } from 'tsyringe'
import * as fake_classes from '../fake_classes'


const registeredContainers = {
  database_service: 'DatabaseService',
  external_service: 'ExternalService',
  database_info: 'DataBaseInfo',
};

container.register("DatabaseDriver", { useValue: 'postgres' })

container.register<fake_classes.DatabaseService>(
  registeredContainers.database_service,
  fake_classes.DatabaseService
);

container.register<fake_classes.ExternalService>(
  registeredContainers.external_service,
  fake_classes.ExternalService
)

container.register<fake_classes.DatabaseInfo>(
  registeredContainers.database_info,
  fake_classes.DatabaseInfo
)