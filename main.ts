// import {app, BrowserWindow} from 'electron';
import 'module-alias/register';
import {createContainer} from './src/main/inversity.config';
// import * as path from 'path';
// import * as url from 'url';
import {IApplication, IApplicationId} from './src/main/IApplication';
import Application from './src/main/Application';
import {ConfigurationService} from './src/main/Services/ConfigurationService';
import {IConfigurationServiceId} from './src/main/Services/IConfigurationService';

const container = createContainer();
const service = container.get<ConfigurationService>(IConfigurationServiceId);
const application = container.get<Application>(IApplicationId);

application.init(__dirname)
  .then(() => {
    application.run();
  })
  .catch(err => {
    console.error(`failure to start the application : ${err}`);
  });
