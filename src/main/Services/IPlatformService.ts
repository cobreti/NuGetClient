export interface IPlatformService {
  readonly isMacOS: boolean;
}

export const IPlatformServiceId = Symbol('IPlatformService');
