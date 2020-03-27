import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public list:any[] = [];
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  getData(){
    var api = "";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list = response.result;
    })
  }
  postData(){
    var api = "";
    this.http.post(api).subscribe(()=>{
      
    })
  }

}
