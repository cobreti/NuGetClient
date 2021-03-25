export interface IApplication {
  run(rootDir: string): void;
}

export const IApplicationServiceId = Symbol('IApplication');

// export default IApplication;

