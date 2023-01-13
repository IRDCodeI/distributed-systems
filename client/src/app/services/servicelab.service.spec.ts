import { TestBed } from '@angular/core/testing';

import { ServicelabService } from './servicelab.service';

describe('ServicelabService', () => {
  let service: ServicelabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
