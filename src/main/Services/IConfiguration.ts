import {UserConfig} from '../../shared/config/UserConfig';

export interface IConfiguration {

  readonly userConfig: UserConfig;
  readonly startupFolder: string;

  init(startupFolder: string): void;
}

export const IConfigurationId = Symbol('IConfiguration');
