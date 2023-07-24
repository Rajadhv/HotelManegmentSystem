import { TestBed } from '@angular/core/testing';

import { DefaltapiService } from './defaltapi.service';

describe('DefaltapiService', () => {
  let service: DefaltapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaltapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
