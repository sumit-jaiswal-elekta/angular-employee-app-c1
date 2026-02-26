import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  hoursWorked: number;
  hourlyWage: number;
}

// Mock employee data for demonstration
const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    hoursWorked: 160,
    hourlyWage: 45,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    hoursWorked: 155,
    hourlyWage: 50,
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.j@company.com',
    hoursWorked: 170,
    hourlyWage: 42,
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@company.com',
    hoursWorked: 165,
    hourlyWage: 48,
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@company.com',
    hoursWorked: 158,
    hourlyWage: 46,
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'Davis',
    email: 'sarah.davis@company.com',
    hoursWorked: 162,
    hourlyWage: 52,
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Miller',
    email: 'james.miller@company.com',
    hoursWorked: 168,
    hourlyWage: 44,
  },
  {
    id: 8,
    firstName: 'Lisa',
    lastName: 'Garcia',
    email: 'lisa.garcia@company.com',
    hoursWorked: 160,
    hourlyWage: 49,
  },
  {
    id: 9,
    firstName: 'Robert',
    lastName: 'Martinez',
    email: 'robert.m@company.com',
    hoursWorked: 172,
    hourlyWage: 47,
  },
];

@Injectable({
  providedIn: 'root',
})
export class EmployeeLoader {
  private readonly http = inject(HttpClient);

  getList(): Observable<Employee[]> {
    // Using mock data instead of external API
    // Replace with real API endpoint when available
    return of(MOCK_EMPLOYEES).pipe(delay(300)); // Simulating network delay
  }

  getDetails(employeeId: string): Observable<Employee> {
    // Using mock data instead of external API
    // Replace with real API endpoint when available
    const employee = MOCK_EMPLOYEES.find(
      (emp) => emp.id === Number(employeeId),
    );
    return of(employee!).pipe(delay(200)); // Simulating network delay
  }
}
