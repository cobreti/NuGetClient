import {UserConfig} from '../../shared/config/UserConfig';

export interface IUserConfigService {

  getUserConfig(): UserConfig;

  init(startDir: string): void;
}

export const IUserConfigServiceId = Symbol('IUserConfigService');
