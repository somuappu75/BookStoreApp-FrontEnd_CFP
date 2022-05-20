import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  token: any;

  constructor(private httpService:HttpServiceService) { 
    this.token=localStorage.getItem("token")
  }

  getallbooks(){
    console.log("token",this.token);
    console.log("get-all-books")

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization': this.token
     })
   }
   return this.httpService.getService("https://localhost:44305/api/Book/Get", true,header)
 }
 addbook(data: any) {
  this.token = localStorage.getItem("token")
  let header = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Authorization': this.token
    })
  }
  return this.httpService.postService("https://localhost:44305/api/Book/Add", data, false, header)
}
adminupdatebook(bookId: any, data: any) {
   this.token=localStorage.getItem("token")
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token 
    })
  }
  return this.httpService.putService("https://localhost:44305/api/Book/Update", data, true, header)

}


deletebook(productID: any,token:any) {
  console.log(this.token,productID)
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer'+this.token, 
    })
  }
  return this.httpService.deleteService('Book/deletebook?BookId=' + productID, true, header)
}
addWishList(id:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
     'x-access-token': this.token
    })
 }
 return this.httpService.postService("https://localhost:44305/api/Wishlist/Add"+id,{},true,header)
}
getWishList(){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
 return this.httpService.getService("https://localhost:44305/api/Wishlist/Get", true,header)
}
removeWishList(id:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
       'x-access-token': this.token
    })
  }
  return this.httpService.deleteService("https://localhost:44305/api/Wishlist/Delete"+id,true,header)
}
cartItemQuantity(id:any,data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
  return this.httpService.putService('bookstore_user/cart_item_quantity/'+id, data, true,header)
}
addCartItems(id:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
     'x-access-token': this.token
    })
 }
 return this.httpService.postService('/bookstore_user/add_cart_item/'+id,{},true,header)
}
addFeedback(id:any, data:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'x-access-token': this.token
     })
  }
  return this.httpService.postService('/bookstore_user/add/feedback/'+id, data, true, header)
}

getFeedback(id:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'x-access-token': this.token
     })
  }
  return this.httpService.getService('/bookstore_user/get/feedback/'+id, true, header)
}
useraddtobag(productID: any) {  //here we are using product id as it is used in backend API 

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
    })
  }
  return this.httpService.postService('Cart/addBooksInCart/' + productID, {}, true, header)
}
useraddtowishlist(productID: any) {  //here we are using product id as it is used in backend API 

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  return this.httpService.postService('WishList/addBooksInWishList' + productID, {}, true, header)
}
}