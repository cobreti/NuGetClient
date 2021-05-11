import {IApplication} from './IApplication';
import {inject, injectable} from 'inversify';
import {app, BrowserWindow, dialog, globalShortcut, ipcMain} from 'electron';
import {channels} from '../shared/Channels';
import {IUserConfigService, IUserConfigServiceId} from './Services/IUserConfigService';

@injectable()
class Application implements IApplication {
  private mainWindow: BrowserWindow;
  private rootDir: string;

  public constructor(
    @inject(IUserConfigServiceId) private userConfigService: IUserConfigService
  ) {

  }

  async init(rootDir: string): Promise<void> {
    this.rootDir = rootDir;

    this.userConfigService.init(this.rootDir);
  }

  async run(): Promise<void> {
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

    if (/^darwin/i.test(process.platform)) {
      app.dock.setIcon(this.rootDir + '/assets/nuget.png');
    }

    globalShortcut.register('f5', () => {
      this.mainWindow.loadFile('renderer/index.html');
    });

    await this.mainWindow.loadFile('renderer/index.html');
    this.mainWindow.webContents.openDevTools();

    ipcMain.on(channels.chooseFolder, async (event, ...args) => {
      console.log('choosing folder');

      // const root = (await fsPromises.readdir('./', {withFileTypes: true }))
      //   .filter(x => x.isDirectory())
      //   .map(x => x.name);

      const selection = await dialog.showOpenDialog(BrowserWindow.fromWebContents(event.sender), {
        title: 'Select project folder',
        defaultPath: './',
        properties: ['openDirectory']
      });

      if (!selection.canceled) {
        console.log(`folder selected : ${selection.filePaths[0]}`);
      }

      event.sender.send(channels.folderSelected);
    });
  }

}

export default Application;
