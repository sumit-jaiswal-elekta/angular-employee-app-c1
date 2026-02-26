import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeStatisticsComponent } from './employee-statistics.component';
import { EmployeeLoader, Employee } from '../employee-loader.service';
import { of, throwError } from 'rxjs';

describe('EmployeeStatisticsComponent', () => {
  let component: EmployeeStatisticsComponent;
  let fixture: ComponentFixture<EmployeeStatisticsComponent>;
  let mockEmployeeLoader: any;

  const mockEmployees: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      hoursWorked: 160,
      hourlyWage: 50,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@test.com',
      hoursWorked: 150,
      hourlyWage: 60,
    },
  ];

  beforeEach(() => {
    mockEmployeeLoader = {
      getList: jasmine.createSpy('getList').and.returnValue(of(mockEmployees)),
    };

    TestBed.configureTestingModule({
      imports: [EmployeeStatisticsComponent],
      providers: [{ provide: EmployeeLoader, useValue: mockEmployeeLoader }],
    });

    fixture = TestBed.createComponent(EmployeeStatisticsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employees on init', () => {
    expect(mockEmployeeLoader.getList).toHaveBeenCalled();
  });

  it('should calculate statistics', () => {
    fixture.detectChanges(); // Triggers ngOnInit

    expect(component.totalEmployees).toBe(2);
    expect(component.totalPayroll).toBe(17000); // 160*50 + 150*60
    expect(component.averageWage).toBe(55);
  });

});
