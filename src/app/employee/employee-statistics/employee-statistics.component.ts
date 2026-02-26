import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoader, Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-statistics',
  templateUrl: './employee-statistics.component.html',
  styleUrls: ['./employee-statistics.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class EmployeeStatisticsComponent implements OnInit {
  @ViewChild('totalElement') totalElement!: ElementRef;

  employees: any[] = [];

  totalEmployees = 0;
  totalPayroll = 0;
  averageWage = 0;
  highestPaidEmployee: any = null;

  isLoading = true;
  errorMessage = '';

  constructor(private loader: EmployeeLoader) {}

  ngOnInit() {
    this.loader.getList().subscribe((data) => {
      this.employees = data;
      this.isLoading = false;
      this.calculateStatistics();
      this.updateTotalDisplay();
    });

    this.loader.getList().subscribe((employees) => {
      this.processEmployees(employees);
    });
  }

  calculateStatistics() {
    this.totalEmployees = this.employees.length;

    let total = 0;
    for (let i = 0; i < this.employees.length; i++) {
      total += this.employees[i].hoursWorked * this.employees[i].hourlyWage;
    }
    this.totalPayroll = total;

    let wageSum = 0;
    for (let i = 0; i < this.employees.length; i++) {
      wageSum += this.employees[i].hourlyWage;
    }
    this.averageWage = wageSum / this.employees.length;

    let highest = this.employees[0];
    for (let i = 1; i < this.employees.length; i++) {
      if (
        this.employees[i].hoursWorked * this.employees[i].hourlyWage >
        highest.hoursWorked * highest.hourlyWage
      ) {
        highest = this.employees[i];
      }
    }
    this.highestPaidEmployee = highest;
  }

  updateTotalDisplay() {
    if (this.totalElement) {
      this.totalElement.nativeElement.style.color = 'green';
      this.totalElement.nativeElement.style.fontWeight = 'bold';
    }
  }

  processEmployees(employees: any) {
    console.log('Processing employees:', employees);
  }

  getEmployeePayroll(employee: any): number {
    return employee.hoursWorked * employee.hourlyWage;
  }

  formatCurrency(amount: number): string {
    return '$' + amount.toFixed(2);
  }

  refreshData() {
    this.isLoading = true;
    this.loader.getList().subscribe((data) => {
      this.employees = data;
      this.calculateStatistics();
      this.isLoading = false;
    });
  }
}
