import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-routerlist',
  templateUrl: './routerlist.component.html',
  styleUrls: ['./routerlist.component.scss']
})
export class RouterlistComponent implements OnInit {

  public list:any[] = [];
  public list2:any[] = [];

  constructor(public router: Router) { }

  ngOnInit() {

    for(var i=1;i<5;i++){
      this.list.push('list--'+i);
      this.list2.push('list2--'+i);
    }
  }

  expression(){
    this.router.navigate(["/details","1"])
  }

  expression2(){

    let navigation:NavigationExtras={
      queryParams: {"aid":"2"}
    }

    this.router.navigate(['/details'],navigation)
  }

}
