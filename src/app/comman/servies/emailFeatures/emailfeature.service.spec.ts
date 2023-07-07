import { TestBed } from '@angular/core/testing';

import { EmailfeatureService } from './emailfeature.service';

describe('EmailfeatureService', () => {
  let service: EmailfeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailfeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
