import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';

import { MessageSnackbarComponent } from './message-snackbar.component';
import { BooksFeatureModule } from '@tmo/books/feature';

describe('TotalCountComponent', () => {
  let component: MessageSnackbarComponent;
  let fixture: ComponentFixture<MessageSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
