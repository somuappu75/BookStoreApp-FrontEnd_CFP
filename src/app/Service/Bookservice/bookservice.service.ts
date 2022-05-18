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
 adminaddbook(data: any) {
  this.token = localStorage.getItem("token")
  let header = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  return this.httpService.postService("https://localhost:44305/api/Book/Add", data, true, header)
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
}
