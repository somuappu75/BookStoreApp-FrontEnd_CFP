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
}
