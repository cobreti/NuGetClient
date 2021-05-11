export interface ILoggerService {
  trace(...args): void;
  debug(...args): void;
}


export const ILoggerServiceId = Symbol('ILoggerService');
