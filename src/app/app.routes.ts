import { Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:employeeId', component: EmployeeDetailComponent },
];
