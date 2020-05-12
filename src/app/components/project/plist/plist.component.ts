import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.scss']
})
export class PlistComponent implements OnInit {

  public plist:any[]=[]

  constructor(public commonService:CommonService) { }

  ngOnInit() {
    this.commonService.get('api/productlist').then((response:any)=>{
      console.log(response);
      this.plist=response.result;
    })
  }

  




}
