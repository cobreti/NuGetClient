import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import {createContainer} from './inversity.config';
import {IApplication, IApplicationServiceId} from './IApplication';
import {Container} from 'inversify';

describe('first test', () => {
  let container: Container;

  beforeEach(() => {
    container = createContainer();
  });

  it('get application instance', () => {
    expect(container).not.to.equal(null);
    const app = container.get<IApplication>(IApplicationServiceId);
    expect(app).not.to.equal(null);
  });
});

