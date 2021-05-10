export interface IApplication {
  run(rootDir: string): void;
}

export const IApplicationId = Symbol('IApplication');

