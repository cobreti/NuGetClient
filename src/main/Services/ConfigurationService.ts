import {IConfigurationService} from './IConfigurationService';
import {UserConfig} from '../../shared/config/UserConfig';
import {injectable} from 'inversify';
import {ipcMain} from 'electron';
import {channels} from '../../shared/Channels';

@injectable()
export class ConfigurationService implements IConfigurationService {

  public userConfig: UserConfig;
  public startupFolder: string;

  public init(startupFolder: string): void {
    this.userConfig = {
      workingFolder: startupFolder
    };

    this.startupFolder = startupFolder;

    this.registerChannelHandlers();
  }

  private registerChannelHandlers(): void {
    ipcMain.on(channels.getUserConfig, (event, ...args) => {
      event.sender.send(channels.userConfig, this.userConfig);
    });
  }

}
