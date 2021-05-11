import {ILoggerService} from './ILoggerService';
import {Logger} from 'tslog';
import {injectable} from 'inversify';

@injectable()
export class LoggerService implements ILoggerService {

  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  trace(...args): void {
    this.logger.trace(...args);
  }

  debug(...args): void {
    this.logger.debug(...args);
  }
}
