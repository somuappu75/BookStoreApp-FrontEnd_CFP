import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpservice:HttpServiceService) { }
  register(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpservice.postService("https://localhost:44305/api/User/Register",reqdata,false,header)
  }
  login(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpservice.postService("https://localhost:44305/api/User/Login",reqdata,false,header)
  }
  forget(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
   return this.httpservice.postService("https://localhost:44305/api/User/ForgotPassword?email="+data.email, {}, false, header)
  }
  reset(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJqYW50bzQxMTVAZ21haWwuY29tIiwiSWQiOiIxNiIsImV4cCI6MTY0OTQwOTgxOX0.mb4_4pswCHCEbPROI2vUC1Ffciwg7l4mti5LZTCNago' 
      })
    }
   return this.httpservice.putService("https://localhost:44322/api/User/ResetPassword", data, true, header)
  }
}
