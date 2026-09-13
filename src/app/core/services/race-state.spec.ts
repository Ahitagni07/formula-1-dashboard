import { TestBed } from '@angular/core/testing';
import { RaceState } from './race-state';

describe('RaceState', () => {
  let service: RaceState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
