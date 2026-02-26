import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  imports: [RouterLink],
})
export class EmployeeListComponent implements OnInit {
  private readonly loader = inject(EmployeeLoader);

  // Using toSignal for reactive data from Observable
  readonly employees = toSignal(this.loader.getList(), {
    initialValue: [] as Employee[],
  });

  ngOnInit(): void {
    // Component initialization logic if needed
  }
}
