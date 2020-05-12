import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public domain:string='http://a.itying.com/';
  public node:string='http://127.0.0.1:3000/';
  constructor(public http: HttpClient) { }

  get(api){
    return new Promise((resolve,reject)=>{
      this.http.get(this.domain+api).subscribe((response)=>{
        resolve(response);
      })
    })
  }


  post(api,postData){
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return new Promise((resolve,reject)=>{
      this.http.post(this.node+api,postData,httpOptions).subscribe((response)=>{
        resolve(response);
      })

    })
    
  }
}
