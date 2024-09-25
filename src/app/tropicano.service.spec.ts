import { TestBed } from '@angular/core/testing';

import { TropicanoService } from './tropicano.service';

describe('TropicanoService', () => {
  let service: TropicanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TropicanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
