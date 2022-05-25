import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Service/dataservice/dataservice.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  booklist: any[]=[];
  booksCount:any;

  filteredString = "";

  constructor(private book:BookserviceService, private router:Router,private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.getallbooks()
    this.dataservice.store.subscribe(x => this.filteredString = x);
    
  }

  getallbooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("Book-Details==",res);
      this.booklist=res.response;
       this.booksCount=res.response.length;
      //  console.log("booklist fetched",this.booklist);
       console.log("BookData",this.booklist);
        console.log("booklist length",this.booksCount);
      
    }),
      (    error: any)=>{
      console.log(error);
    
    }
  }
  quickview(book:any){
    console.log("book id", book._id);
    
    localStorage.setItem('bookId', book._id);
    this.router.navigateByUrl('dashboard/quickview/' +book._id)

  }
  
}
// this.book.usergetallbooks().subscribe((dataReturned:any)=>{
//   console.log("value",dataReturned);
//   this.booksArray = dataReturned.response;
//   console.log("returning data",this.booksArray);