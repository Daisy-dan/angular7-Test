import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routerlistdetails',
  templateUrl: './routerlistdetails.component.html',
  styleUrls: ['./routerlistdetails.component.scss']
})
export class RouterlistdetailsComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router.queryParams)
    //接收queryParams  get 传值
    this.router.queryParams.subscribe((data)=>{
      console.log(data);
    })
    //动态路由传值
    this.router.params.subscribe((data)=>{
      console.log(data);
    })
  }

}
