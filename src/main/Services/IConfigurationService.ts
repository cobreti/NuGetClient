import {UserConfig} from '../../shared/config/UserConfig';

export interface IConfigurationService {

  readonly userConfig: UserConfig;
  readonly startupFolder: string;

  init(startupFolder: string): void;
}

export const IConfigurationServiceId = Symbol('IConfigurationService');
