import {createContainer} from './inversity.config';
import {IApplication, IApplicationServiceId} from './IApplication';
import {Container} from 'inversify';


describe('first test', () => {
  let container: Container;
  beforeAll(() => {
    container = createContainer();
  });

  it('get application instance', () => {
    expect(container).not.toBeNull();
    let app = container.get<IApplication>(IApplicationServiceId);
    expect(app).not.toBeNull();
  });
});

