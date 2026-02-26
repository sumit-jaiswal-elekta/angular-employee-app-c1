import { TestBed } from '@angular/core/testing';
import { EmployeeLoader } from './employee-loader.service';

describe('EmployeeLoader', () => {
  let service: EmployeeLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(EmployeeLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
