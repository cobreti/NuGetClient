import {IUserConfigService} from './IUserConfigService';
import {UserConfig} from '../../shared/config/UserConfig';
import {injectable} from 'inversify';

@injectable()
export class UserConfigService implements IUserConfigService {
  getUserConfig(): UserConfig {
    return undefined;
  }

}
