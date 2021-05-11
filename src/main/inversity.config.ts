import { Container } from 'inversify';
import 'reflect-metadata';
import {IApplication, IApplicationId} from './IApplication';
import Application from './Application';
import {UserConfigService} from './services/UserConfigService';
import {IUserConfigServiceId} from './Services/IUserConfigService';

// const container = new Container();
//
// container.bind<IApplication>(IApplicationServiceId)
//   .to(Application)
//   .inSingletonScope();

class IUserconfigService {
}

function createContainer(): Container {
  const c = new Container();

  c.bind<Application>(IApplicationId)
    .to(Application)
    .inSingletonScope();

  c.bind<UserConfigService>(IUserConfigServiceId)
    .to(UserConfigService)
    // .to(UserConfigService)
    .inSingletonScope();

  return c;
}

export {
  createContainer
};

// export default createContainer;
