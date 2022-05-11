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
}
