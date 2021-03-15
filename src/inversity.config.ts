import { Container } from 'inversify';
import 'reflect-metadata';
import {IApplication, IApplicationServiceId} from './IApplication';
import Application from './Application';

const container = new Container();

container.bind<IApplication>(IApplicationServiceId)
  .to(Application)
  .inSingletonScope();

export default container;
