import {UserConfig} from '../../shared/config/UserConfig';

export interface IUserConfigService {

  getUserConfig(): UserConfig;
}

export const IUserConfigServiceId = Symbol('IUserConfigService');
