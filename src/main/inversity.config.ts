import { Container } from 'inversify';
import 'reflect-metadata';
import {IApplication, IApplicationId} from './IApplication';
import Application from './Application';
import {ConfigurationService} from './Services/ConfigurationService';
import {IConfigurationService, IConfigurationServiceId} from './Services/IConfigurationService';
import {PlatformService} from './Services/PlatformService';
import {IPlatformService, IPlatformServiceId} from './Services/IPlatformService';
import {ILoggerService, ILoggerServiceId} from './Services/ILoggerService';
import {LoggerService} from './Services/LoggerService';

function createContainer(): Container {
  const c = new Container();

  c.bind<IApplication>(IApplicationId)
    .to(Application)
    .inSingletonScope();

  c.bind<IConfigurationService>(IConfigurationServiceId)
    .to(ConfigurationService)
    .inSingletonScope();

  c.bind<IPlatformService>(IPlatformServiceId)
    .to(PlatformService);

  c.bind<ILoggerService>(ILoggerServiceId)
    .to(LoggerService)
    .inSingletonScope();

  return c;
}

export {
  createContainer
};
