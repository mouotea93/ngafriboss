import { TestBed } from '@angular/core/testing';

import { EntrepriseEditGuard } from './entreprise-edit.guard';

describe('EntrepriseEditGuard', () => {
  let guard: EntrepriseEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EntrepriseEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
