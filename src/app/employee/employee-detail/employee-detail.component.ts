import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
})
export class EmployeeDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly loader = inject(EmployeeLoader);

  // Convert route params to signal
  private readonly employeeId = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('employeeId') as string;
        return this.loader.getDetails(id);
      }),
    ),
  );

  // Expose employee as readonly signal
  readonly employee = this.employeeId;

  // Example computed signal for full name
  readonly fullName = computed(() => {
    const emp = this.employee();
    return emp ? `${emp.firstName} ${emp.lastName}` : '';
  });
}
