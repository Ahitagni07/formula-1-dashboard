import { TestBed } from '@angular/core/testing';
import { Openf1 } from './openf1';

describe('Openf1', () => {
  let service: Openf1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openf1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
