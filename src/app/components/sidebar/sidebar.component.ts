import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @ViewChild("sidebar" ,{static: false}) sidebar:ElementRef;
  ngOnInit() {
  }

  showAside(){
    //原生js操作dom
    // var aside:any = document.getElementById("aside");
    // aside.style.transform = "translate(0,0)"

    //ViewChild操作dom
    console.log(this.sidebar.nativeElement);
    // this.sidebar.nativeElement.style.transform = "translate(0,0)";

  }

}
