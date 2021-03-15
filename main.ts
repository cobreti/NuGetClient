// import {app, BrowserWindow} from 'electron';
import container from './src/inversity.config';
// import * as path from 'path';
// import * as url from 'url';
import {IApplication, IApplicationServiceId} from './src/IApplication';


const application = container.get<IApplication>(IApplicationServiceId);

application.run();
