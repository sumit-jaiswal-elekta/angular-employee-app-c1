import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class EmployeeHeaderComponent {
  getCurrentDate() {
    return new Date().toLocaleDateString();
  }
}
