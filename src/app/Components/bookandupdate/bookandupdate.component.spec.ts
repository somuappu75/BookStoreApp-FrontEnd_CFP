import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookandupdateComponent } from './bookandupdate.component';

describe('BookandupdateComponent', () => {
  let component: BookandupdateComponent;
  let fixture: ComponentFixture<BookandupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookandupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookandupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
