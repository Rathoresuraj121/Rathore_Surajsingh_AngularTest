import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DEPARTMENTS,
  NOTIFICATION_MESSAGES,
  ROUTES,
  VALIDATION_RULES,
} from '../../core/models/constants';
import { FormErrorPipe } from '../../core/pipes/form-error.pipe';
import { EmployeeService } from '../../services/employee.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    FormErrorPipe,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly employeeService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  readonly isEditMode = signal(false);
  readonly employeeId = signal<number | undefined>(undefined);
  readonly departments = DEPARTMENTS;

  readonly employeeForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(VALIDATION_RULES.NAME.MIN_LENGTH),
        Validators.maxLength(VALIDATION_RULES.NAME.MAX_LENGTH),
      ],
    ],
    department: ['', Validators.required],
    salary: [
      null as number | null,
      [
        Validators.required,
        Validators.min(VALIDATION_RULES.SALARY.MIN),
        Validators.max(VALIDATION_RULES.SALARY.MAX),
      ],
    ],
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const id = +params['id'];
        this.isEditMode.set(true);
        this.employeeId.set(id);
        this.loadEmployee(id);
      }
    });
  }

  private loadEmployee(id: number): void {
    const employee = this.employeeService.getEmployeeById(id);
    if (employee) {
      this.employeeForm.patchValue({
        name: employee.name,
        department: employee.department,
        salary: employee.salary,
      });
    } else {
      this.notificationService.error(NOTIFICATION_MESSAGES.EMPLOYEE_NOT_FOUND);
      this.router.navigate([ROUTES.LIST]);
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;
      const employeeData = {
        name: formValue.name!,
        department: formValue.department!,
        salary: formValue.salary!,
      };

      if (this.isEditMode() && this.employeeId()) {
        this.employeeService.updateEmployee({
          id: this.employeeId()!,
          ...employeeData,
        });
        this.notificationService.success(NOTIFICATION_MESSAGES.EMPLOYEE_UPDATED);
      } else {
        this.employeeService.addEmployee(employeeData);
        this.notificationService.success(NOTIFICATION_MESSAGES.EMPLOYEE_ADDED);
      }

      this.router.navigate([ROUTES.LIST]);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate([ROUTES.LIST]);
  }
}
