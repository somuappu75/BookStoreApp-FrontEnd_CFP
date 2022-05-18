import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  booklist: any[]=[];

  constructor(private book:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("Book-details-from-backend",res);
      this.booklist=res.response;
      // this.booksCount=res.result.length;
      //  console.log("booklist fetched",this.booklist);
       console.log("BookData",this.getBooks);
      
    }),
      (    error: any)=>{
      console.log(error);
    
    }
  }
  Addbook()
  {
    this.router.navigateByUrl("/dashboard/bookandupdate") 
  }

  }
