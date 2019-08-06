import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public title = "template组件";

  //默认public ，string类型
  msg: string = "template组件template组件";

  public htmlCon = "<h1>html内容解析</h1>";

  //2种定义数组方式
  public arr:any[] = ['a','b','c'];
  public arr2:Array<any> = ['a','b','c'];

  public picUrl = 'https://www.baidu.com/img/bd_logo1.png';

  public order:number = 1;

  public today=new Date();
  
  public name: string = 'lily';

  public content : string ;


  //ViewChild 操作dom 在调用 NgAfterViewInit 回调函数之前就会设置这些视图查询
  @ViewChild('myBox',{static: false}) myBox:any;
  @ViewChild('appviewchild',{static: false}) appviewchild:any;

  constructor() { }

  ngOnInit() {
  }

  clickFn(){
    console.log("clickFn");
  }
  keyupFn(e){
    console.log(e);
  }

  //视图加载完成触发的方法  dom加载完成  （建议把dom操作放在这个里面）
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let dBox1: any = document.getElementById("box");
    console.log(dBox1.innerHTML);
    dBox1.style.color = "yellow";


    console.log(this.myBox.nativeElement.innerHTML);
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width= "100px";
    this.myBox.nativeElement.style.height= "100px";
    this.myBox.nativeElement.style.background= "red";

    //调用子组件的方法
    this.appviewchild.run();
  }

}
