import { TestBed } from '@angular/core/testing';

import { ApiStatusStoreService } from './api-status-store.service';

describe('ApiStatusStoreService', () => {
  let service: ApiStatusStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStatusStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
