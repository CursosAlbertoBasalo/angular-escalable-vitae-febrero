import { TestBed } from '@angular/core/testing';

import { XtoreService } from './xtore.service';

describe('XtoreService', () => {
  let service: XtoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XtoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
