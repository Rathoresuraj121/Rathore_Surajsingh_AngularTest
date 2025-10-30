import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NOTIFICATION_DURATION, BUTTON_TEXT } from '../core/models/constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly snackBar = inject(MatSnackBar);

  show(message: string, duration: number = NOTIFICATION_DURATION.SUCCESS): void {
    this.snackBar.open(message, BUTTON_TEXT.CLOSE, {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  success(message: string): void {
    this.show(message, NOTIFICATION_DURATION.SUCCESS);
  }

  error(message: string): void {
    this.show(message, NOTIFICATION_DURATION.ERROR);
  }
}
