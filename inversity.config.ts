import { Container } from 'inversify';
import 'reflect-metadata';
import TYPES from './Types';
import IApplication from './src/IApplication';
import Application from './src/Application';

const container = new Container();

container.bind<IApplication>(TYPES.Application)
  .to(Application)
  .inSingletonScope();

export default container;
