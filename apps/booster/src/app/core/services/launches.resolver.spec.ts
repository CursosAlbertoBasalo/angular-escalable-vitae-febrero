import { TestBed } from '@angular/core/testing';

import { LaunchesResolver } from './launches.resolver';

describe('LaunchesResolver', () => {
  let resolver: LaunchesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LaunchesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
