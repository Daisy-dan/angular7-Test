import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from './../../services/httpservice.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public list:any[] = [];
  constructor(public http:HttpClient,public axios:HttpserviceService) { }

  ngOnInit() {
  }

  getData(){
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list = response.result;
    })
  }
  postData(){
    //headers
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let api = "http://127.0.0.1:3000/dologin";
    //nodejs后台 cnpm install   node app.js

    const postData =  {"name":"zhangsan"};
    this.http.post(api,postData,httpOptions).subscribe((response)=>{
      console.log(response);
    })
  }
  getJsonpData(){
    //jsonp请求
    let api="http://a.itying.com/api/productlist";
    this.http.jsonp(api,"callback").subscribe((response)=>{
      console.log(response);
    })

  }
  getAxiosData(){
    let api="http://a.itying.com/api/productlist";
    this.axios.axiosGet(api).then((data)=>{
      console.log(data);
    })
  }

}
