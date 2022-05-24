import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishListCount:any;
  wishlist:any;
  constructor(private book:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    // this.router.routeReuseStrategy.shouldReuseRoute = () =>{
    //   return false;
    // }
    this.getWishListBook()
  }

getWishListBook(){
   this.book.getWishList().subscribe((res:any)=>{
     console.log("Wishlist items received", res);
     this.wishlist=res.result;
     this.wishListCount=res.result.length;
     console.log("wishlist",this.wishlist);
     console.log("value",this.wishListCount);
     
   })
}
deleteList(list:any){
   this.book.removeWishList(list.bookid._id).subscribe((res:any)=>{
    console.log("wishlist item deleted",res);
    // window.location.reload();
    this.ngOnInit();
  }),
  (    error: any)=>{
  console.log(error);

}
}

}
