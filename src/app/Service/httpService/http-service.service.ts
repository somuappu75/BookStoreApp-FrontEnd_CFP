import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  postService(url:string, reqPayload:any={},token:boolean=false,option:any){
    return this.http.post(url,reqPayload, token && option)

  }

  getService(url:string, token:boolean=false,option:any){
    return this.http.get(url, token && option)

  }

  putService(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    return this.http.put(url, reqData, token && httpoptions)
  }

  deleteService(url:string, reqData:any={}, token:boolean=false, httpoptions:any={}){
    return this.http.delete(url, token && httpoptions)
  }

}
