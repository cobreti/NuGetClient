import {IPlatformService} from './IPlatformService';
import {injectable} from 'inversify';

@injectable()
export class PlatformService implements IPlatformService {

  public isMacOS: boolean;

  constructor() {
    this.isMacOS = /^darwin/i.test(process.platform);
  }
}
