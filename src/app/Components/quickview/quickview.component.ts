import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Service/dataservice/dataservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookInfo: any;
  bookid: any;
  hide:boolean=false
  book_quantity:number=0;
  
  feedback:any;
  value:any;
  feedbackList:any;
  public bookId$: Observable<any> // 'id' is bad name for variable, remember about code readability;
  | undefined // 'id' is bad name for variable, remember about code readability;


  constructor(private book:BookserviceService,private route:ActivatedRoute,private dataservice:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    // this.router.routeReuseStrategy.shouldReuseRoute = () =>{
    //   return false;
    // }

    this.bookid = this.route.snapshot.paramMap.get("bookId");
    console.log(this.bookid);
    this.getBookDetail();
    // this.bookId=this.route.snapshot.params['id']
    // // console.log("bookinfo received", this.bookInfo);
    this.getFeedback();

  }

  getBookDetail(){
    this.book.getallbooks().subscribe((res:any)=>{ 
      res.result.forEach((element:any) => {
        console.log(element.bookId)
        if(element.bookId == this.bookid){
          this.bookInfo = element;
          console.log("boofInfo", this.bookInfo);
        }  
      });
      (    error: any)=>{
        console.log(error);
      
      }
    })
  }
  
  addWishList(){
    this.book.addWishList(this.bookid).subscribe((res:any)=>{
      console.log("wishlist created",res);
    }),
    (    error: any)=>{
    console.log(error);
  
  }
  }

 switching(){
    if(this.hide==false){
       this.hide=true
    }
    else{
      this.hide=false
    }
 }

 minus(){
  this.book_quantity--;
  this.sendQuantiy(this.book_quantity);
   if(this.book_quantity>1){
    let data = {
      "quantityToBuy": this.book_quantity
    }
    this.book.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
      console.log("added to cart", this.book_quantity);
    }),
    (    error: any)=>{
    console.log(error);
  
  }
   }
   else if(this.book_quantity<1){
     this.switching()
   }
 }

plus(){
  this.book_quantity++
  this.sendQuantiy(this.book_quantity);
  let data = {
    "quantityToBuy": this.book_quantity
  }
  this.book.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
    console.log("added to cart", this.book_quantity);
  }),
  (    error: any)=>{
  console.log(error);

}
}


addToCart(){
  this.book_quantity++;
  this.sendQuantiy(this.book_quantity);
  this.book.addCartItems(this.bookid).subscribe((res:any)=>{
    console.log("cart items fetched",res);
  }),
  (    error: any)=>{
  console.log(error);

}
}

addFeedback(){
  let data= {
    comment: this.feedback,
    rating: this.value
  }
  this.book.addFeedback(this.bookid, data).subscribe((res:any)=>{
    console.log(res);
    // window.location.reload();
    this.ngOnInit();
  })
}

getFeedback(){
  console.log("feedback list",this.bookid);
  this.book.getFeedback(this.bookid).subscribe((res:any)=>{
    console.log("get feedback list",res.result);
    this.feedbackList = res.result;
  })
}

sendQuantiy(book_quantity:any){
  this.dataservice.updateData(book_quantity);
}

}