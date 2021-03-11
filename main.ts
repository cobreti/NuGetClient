// import {app, BrowserWindow} from 'electron';
import container from './inversity.config';
import TYPES from './Types';
// import * as path from 'path';
// import * as url from 'url';
import IApplication from './src/IApplication';


const application = container.get<IApplication>(TYPES.Application);

application.run();
