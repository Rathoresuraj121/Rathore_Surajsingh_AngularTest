import { Injectable, signal } from '@angular/core';
import { EMPLOYEES } from '../core/data/employees';
import { Employee } from '../core/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly employeesSignal = signal<Employee[]>([...EMPLOYEES]);
  
  readonly employees = this.employeesSignal.asReadonly();

  getEmployeeById(id: number): Employee | undefined {
    return this.employeesSignal().find(emp => emp.id === id);
  }

  addEmployee(employee: Omit<Employee, 'id'>): void {
    const currentEmployees = this.employeesSignal();
    const maxId = currentEmployees.length > 0 
      ? Math.max(...currentEmployees.map(e => e.id)) 
      : 0;
    
    const newEmployee: Employee = { ...employee, id: maxId + 1 };
    this.employeesSignal.update(employees => [...employees, newEmployee]);
  }

  updateEmployee(employee: Employee): void {
    this.employeesSignal.update(employees => 
      employees.map(emp => emp.id === employee.id ? employee : emp)
    );
  }

  deleteEmployee(id: number): void {
    this.employeesSignal.update(employees => 
      employees.filter(emp => emp.id !== id)
    );
  }
}
