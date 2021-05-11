import {IUserConfigService} from './IUserConfigService';
import {UserConfig} from '../../shared/config/UserConfig';
import {injectable} from 'inversify';

@injectable()
export class UserConfigService implements IUserConfigService {

  private userConfig: UserConfig;

  getUserConfig(): UserConfig {
    return this.userConfig;
  }

  public init(startDir: string): void {
    this.userConfig = {
      startupFolder: startDir
    };

    this.registerChannelHandlers();
  }

  private registerChannelHandlers(): void {

  }

}
