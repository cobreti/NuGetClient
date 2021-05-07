import {IApplication} from './IApplication';
import { injectable } from 'inversify';
import {app, BrowserWindow, globalShortcut, ipcMain} from 'electron';

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
        nodeIntegration: true,
        contextIsolation: false
      }
    });

    globalShortcut.register('f5', () => {
      this.mainWindow.loadFile('renderer/index.html');
    });

    await this.mainWindow.loadFile('renderer/index.html');
    this.mainWindow.webContents.openDevTools();

    ipcMain.on('choose-folder', (event, ...args) => {
      console.log('choosing folder');

      event.sender.send('folder-selected');
    });
  }

}

export default Application;
