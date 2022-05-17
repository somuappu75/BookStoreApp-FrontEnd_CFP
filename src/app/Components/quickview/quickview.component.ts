import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Service/dataservice/dataservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookInfo: any;
  bookId:any;
  hide:boolean=false
  book_quantity:number=0;
  
  feedback:any;
  value:any;
  feedbackList:any;


  constructor(private book:BookserviceService,private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

}
