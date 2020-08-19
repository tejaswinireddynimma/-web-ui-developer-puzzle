import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTotalUnread, addToReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-message-snackbar',
  templateUrl: './message-snackbar.component.html',
  styleUrls: ['./message-snackbar.component.scss']
})


export class MessageSnackbarComponent implements OnInit {
  
  snackData: any;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  private readonly store: Store) {
    this.snackData = data;
  }

  ngOnInit(): void {}

  undoAction() : void{
    if(this.snackData.isAdded){
      const item: ReadingListItem = Object.assign({}, this.snackData.item);
      item.bookId = this.snackData.item.id;
      this.store.dispatch(removeFromReadingList({ item }));
    }else{
      const book: Book = Object.assign({}, this.snackData.item);
      this.store.dispatch(addToReadingList({ book }));
    }
  }
}
