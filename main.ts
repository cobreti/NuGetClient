// import {app, BrowserWindow} from 'electron';
import {createContainer} from './src/main/inversity.config';
// import * as path from 'path';
// import * as url from 'url';
import {IApplication, IApplicationId} from './src/main/IApplication';
import Application from './src/main/Application';
import {Configuration} from './src/main/Services/Configuration';
import {IConfigurationId} from './src/main/Services/IConfiguration';

const container = createContainer();
const service = container.get<Configuration>(IConfigurationId);
const application = container.get<Application>(IApplicationId);

application.init(__dirname)
  .then(() => {
    application.run();
  })
  .catch(err => {
    console.error(`failure to start the application : ${err}`);
  });
