import { Container } from 'inversify';
import 'reflect-metadata';
import {IApplication, IApplicationServiceId} from './IApplication';
import Application from './Application';

// const container = new Container();
//
// container.bind<IApplication>(IApplicationServiceId)
//   .to(Application)
//   .inSingletonScope();

function createContainer(): Container {
  const c = new Container();

  c.bind<IApplication>(IApplicationServiceId)
    .to(Application)
    .inSingletonScope();

  return c;
}

export {
  createContainer
};

// export default createContainer;
