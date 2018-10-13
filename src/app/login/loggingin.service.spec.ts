import { TestBed } from '@angular/core/testing';

import { LogginginService } from './loggingin.service';

describe('LogginginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogginginService = TestBed.get(LogginginService);
    expect(service).toBeTruthy();
  });
});
