import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
 postService(url:string, data:any, token:boolean=false, httpOptions:any){
  return this.http.post(url, data, token && httpOptions)
 }
 getService(url:string, token:boolean=false,option:any){

  return this.http.get(url, token && option)

}
 putService(url:string, data:any, token:boolean=false, httpOptions:any){
  return this.http.put(url, data, token && httpOptions)
}
deleteService(url:string, token:boolean=false, httpOptions:any){
  return this.http.delete(url, token && httpOptions)
}

}