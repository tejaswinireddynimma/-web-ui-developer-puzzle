import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from './message-snackbar.component';
import { Book } from '@tmo/shared/models';

@Injectable({
    providedIn: 'root'
})
export class MessageSnackBarService {

    constructor(private snackBar: MatSnackBar) {}

    public openSnackBar(item: any, isAdded: boolean) {
               
      const message = item.title + (isAdded ? " added to " : " removed from") + " reding list";
      this.snackBar.openFromComponent(MessageSnackbarComponent, {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        data: { message: message, item: item, isAdded : isAdded }
      });
    }

}