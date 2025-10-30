import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly dialog = inject(MatDialog);

  confirm(data: ConfirmationDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      maxWidth: '90vw',
      data,
      disableClose: true,
      autoFocus: false,
    });

    return dialogRef.afterClosed();
  }

  confirmDelete(itemName: string = 'this item'): Observable<boolean> {
    return this.confirm({
      title: 'Confirm Delete',
      message: `Are you sure you want to delete ${itemName}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger',
    });
  }
}
