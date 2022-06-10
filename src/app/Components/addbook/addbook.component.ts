import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';
import { BookandupdateComponent } from '../bookandupdate/bookandupdate.component';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  booklist: any[]=[];
  count: any;
  allbooks: any[]=[];
  bookid:any;
  bookName: any;
  author: any;
  description: any;
  bookQuantity: any;
  actualPrice: any;
  discountPrice: any;
  isAddBook: any;
  token:any

  constructor(private book:BookserviceService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("Book-details-from-backend",res);
      this.booklist=res.response;
       console.log("BookData",this.getBooks);
      
    })
    }
  
    AddBook(): void {
      const dialogRef = this.dialog.open(BookandupdateComponent, {
        width: '900px',
        height: '500px',
        data: { isAddBook: true }
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        this.bookName = result;
        this.author = result;
        this.description = result;
        this.bookQuantity = result;
        this.actualPrice = result;
        this.discountPrice = result;
  
      });
  
  
    }
    UpdateBook(bookobject: any): void {
      const dialogRef = this.dialog.open(BookandupdateComponent, {
        width: '650px',
        height: '460px',
        data: { bookobject, isAddBook: false },
      });
      console.log("books data is", bookobject);
  
  
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
        this.bookName = result;
        this.author = result;
        this.description = result;
        this.bookQuantity = result;
        this.actualPrice = result;
        this.discountPrice = result;
  
  
      });
  
  
    }
    // deletebook(book: any) {
    //   this.book.admindeletebook(book.bookId,this.token).subscribe((response: any) => {
    //     console.log(response);
  
    //     window.location.reload();
    //   });
    // }
}

