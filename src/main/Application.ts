import {IApplication} from './IApplication';
import { injectable } from 'inversify';
import {app, BrowserWindow} from 'electron';

@injectable()
class Application implements IApplication {
  private mainWindow: BrowserWindow;
  private rootDir: string;

  async run(rootDir: string) {
    this.rootDir = rootDir;

    await app.whenReady();

    this.mainWindow = new BrowserWindow({
      width: 500,
      height: 500,
      icon: this.rootDir + '/assets/nuget.png',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true
      }
    });

    await this.mainWindow.loadFile('renderer/index.html');
    this.mainWindow.webContents.openDevTools();
  }

}

export default Application;
