import { Container } from 'inversify';
import 'reflect-metadata';
import {IApplication, IApplicationId} from './IApplication';
import Application from './Application';
import {ConfigurationService} from './Services/ConfigurationService';
import {IConfigurationService, IConfigurationServiceId} from './Services/IConfigurationService';
import {Platform} from './Services/Platform';
import {IPlatform, IPlatformId} from './Services/IPlatform';

// const container = new Container();
//
// container.bind<IApplication>(IApplicationServiceId)
//   .to(Application)
//   .inSingletonScope();

class IUserconfigService {
}

function createContainer(): Container {
  const c = new Container();

  c.bind<IApplication>(IApplicationId)
    .to(Application)
    .inSingletonScope();

  c.bind<IConfigurationService>(IConfigurationServiceId)
    .to(ConfigurationService)
    // .to(UserConfigService)
    .inSingletonScope();

  c.bind<IPlatform>(IPlatformId)
    .to(Platform);

  return c;
}

export {
  createContainer
};

// export default createContainer;
