import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'warning' | 'danger' | 'info';
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  readonly data = inject<ConfirmationDialogData>(MAT_DIALOG_DATA);

  get icon(): string {
    switch (this.data.type) {
      case 'danger':
        return 'warning';
      case 'warning':
        return 'error_outline';
      case 'info':
        return 'info';
      default:
        return 'help_outline';
    }
  }

  get iconClass(): string {
    return `icon-${this.data.type || 'info'}`;
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
