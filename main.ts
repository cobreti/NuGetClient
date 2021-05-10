// import {app, BrowserWindow} from 'electron';
import {createContainer} from './src/main/inversity.config';
// import * as path from 'path';
// import * as url from 'url';
import {IApplication, IApplicationId} from './src/main/IApplication';
import Application from './src/main/Application';
import {UserConfigService} from './src/main/Services/UserConfigService';
import {IUserConfigServiceId} from './src/main/Services/IUserConfigService';

const container = createContainer();
const service = container.get<UserConfigService>(IUserConfigServiceId);
const application = container.get<Application>(IApplicationId);

application.run(__dirname);
