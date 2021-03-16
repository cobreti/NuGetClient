// import {app, BrowserWindow} from 'electron';
import {createContainer} from './src/inversity.config';
// import * as path from 'path';
// import * as url from 'url';
import {IApplication, IApplicationServiceId} from './src/IApplication';


const container = createContainer();
const application = container.get<IApplication>(IApplicationServiceId);

application.run();
