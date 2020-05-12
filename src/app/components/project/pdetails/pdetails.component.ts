import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import storage from '../../../pipe/storage'

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.scss']
})
export class PdetailsComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  public all:any[] = [];
  public addlist:any = {
    pid : '',
    amount : 0

  };
  ngOnInit() {
    
    if(storage.get("product") != null && storage.get("product") != ''){
      this.addlist = JSON.parse(storage.get("product"));
    }
    
    this.router.params.subscribe((data)=>{    
      this.addlist.pid = data.id;
    })
  }

  cut() : void{
    this.addlist.amount --;
  }

  plus() : void{
    this.addlist.amount ++;

  }
  add(): void{
    console.log(this.addlist);
    storage.set("product",JSON.stringify(this.addlist));
  }


}
