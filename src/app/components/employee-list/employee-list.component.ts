import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {
  DIALOG_MESSAGES,
  EMPLOYEE_TABLE_COLUMNS,
  NOTIFICATION_MESSAGES,
  ROUTES,
  SortDirection,
} from '../../core/models/constants';
import { Employee } from '../../core/models/employee.model';
import { DialogService } from '../../services/dialog.service';
import { EmployeeService } from '../../services/employee.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
    private readonly router = inject(Router);
    private readonly dialogService = inject(DialogService);
    private readonly employeeService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  readonly displayedColumns = EMPLOYEE_TABLE_COLUMNS;
  readonly searchText = signal('');
  readonly sortDirection = signal<SortDirection>(SortDirection.ASC);

  readonly filteredEmployees = computed(() => {
    const search = this.searchText().toLowerCase().trim();
    const employees = this.employeeService.employees();

    if (!search) {
      return this.sortEmployees(employees);
    }

    const filtered = employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search) || emp.department.toLowerCase().includes(search)
    );

    return this.sortEmployees(filtered);
  });

  private sortEmployees(employees: Employee[]): Employee[] {
    const direction = this.sortDirection();
    if (direction === SortDirection.ASC || direction === SortDirection.DESC) {
      return [...employees].sort((a, b) => {
        const multiplier = direction === SortDirection.ASC ? 1 : -1;
        return (a.salary - b.salary) * multiplier;
      });
    }
    return employees;
  }

  onSearchChange(value: string): void {
    this.searchText.set(value);
  }

  sortData(sort: Sort): void {
    if (sort.active === 'salary' && sort.direction) {
      this.sortDirection.set(sort.direction as SortDirection);
    }
  }

  addEmployee(): void {
    this.router.navigate([ROUTES.ADD]);
  }

  editEmployee(id: number): void {
    this.router.navigate([ROUTES.EDIT, id]);
  }

  deleteEmployee(id: number): void {
    this.dialogService
      .confirm({
        title: DIALOG_MESSAGES.DELETE_TITLE,
        message: DIALOG_MESSAGES.DELETE_MESSAGE,
        confirmText: DIALOG_MESSAGES.DELETE_CONFIRM,
        cancelText: DIALOG_MESSAGES.DELETE_CANCEL,
        type: 'danger',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.employeeService.deleteEmployee(id);
          this.notificationService.success(NOTIFICATION_MESSAGES.EMPLOYEE_DELETED);
        }
      });
  }
}
