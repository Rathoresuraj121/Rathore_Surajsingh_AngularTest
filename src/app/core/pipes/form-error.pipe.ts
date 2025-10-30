import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { VALIDATION_RULES } from '../models/constants';

@Pipe({
  name: 'formError',
  standalone: true,
})
export class FormErrorPipe implements PipeTransform {
  transform(control: AbstractControl | null, fieldName: string): string {
    if (!control || !control.errors || !control.touched) {
      return '';
    }

    const fieldLabel = this.capitalize(fieldName);

    if (control.hasError('required')) {
      return `${fieldLabel} is required`;
    }

    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength']?.requiredLength;
      return `${fieldLabel} must be at least ${minLength} characters`;
    }

    if (control.hasError('maxlength')) {
      const maxLength = control.errors?.['maxlength']?.requiredLength;
      return `${fieldLabel} must not exceed ${maxLength} characters`;
    }

    if (control.hasError('min')) {
      return `Salary must be at least ₹${VALIDATION_RULES.SALARY.MIN.toLocaleString()}`;
    }

    if (control.hasError('max')) {
      return `Salary must not exceed ₹${VALIDATION_RULES.SALARY.MAX.toLocaleString()}`;
    }

    return '';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
