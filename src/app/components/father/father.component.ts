import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  public fatherString = "father11111";

  @ViewChild('son',{static: false}) son: any;

  constructor() { }

  ngOnInit() {
  }

  run(){
    console.log("f父组件的run方法")
  }

  getRun(){
    this.son.run2();
    console.log(this.son.sonString)
  }

  getOutputRun(e){
    console.log("子组件广播的数据：", e)
  }

 

}
