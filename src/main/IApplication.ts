export interface IApplication {
  init(rootDir: string): Promise<void>;
  run(): void;
}

export const IApplicationId = Symbol('IApplication');

