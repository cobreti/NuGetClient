import {IPlatform} from './IPlatform';
import {injectable} from 'inversify';

@injectable()
export class Platform implements IPlatform {

  public isMacOS: boolean;

  constructor() {
    this.isMacOS = /^darwin/i.test(process.platform);
  }
}
