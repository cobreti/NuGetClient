import {IConfiguration} from './IConfiguration';
import {UserConfig} from '../../shared/config/UserConfig';
import {injectable} from 'inversify';

@injectable()
export class Configuration implements IConfiguration {

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

  }

}
