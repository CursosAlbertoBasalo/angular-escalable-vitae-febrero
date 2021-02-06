import { TestBed } from '@angular/core/testing';

import { OnlyMembersGuard } from './only-members.guard';

describe('OnlyMembersGuard', () => {
  let guard: OnlyMembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyMembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
