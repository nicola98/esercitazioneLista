import { TestBed, inject } from '@angular/core/testing';

import { LoggierService } from './loggier.service';

describe('LoggierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggierService]
    });
  });

  it('should be created', inject([LoggierService], (service: LoggierService) => {
    expect(service).toBeTruthy();
  }));
});
