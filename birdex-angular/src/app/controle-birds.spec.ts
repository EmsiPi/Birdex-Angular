import { TestBed } from '@angular/core/testing';

import { ControleBirds } from './controle-birds';

describe('ControleBirds', () => {
  let service: ControleBirds;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleBirds);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
