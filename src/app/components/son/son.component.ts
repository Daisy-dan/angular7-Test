import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
// import { FatherComponent } from '../father/father.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  // @Input() father: FatherComponent;
  @Input() fatherString: string;
  @Input() run: any;
  @Input() father: any;

   //子组件Output广播数据
   @Output() public outputSon = new EventEmitter();

  public sonString = 'sonString';

  constructor() { }

  ngOnInit() {

    console.log(this.fatherString);

    console.log(this.father.fatherString,'===');
  }

  getRun(){
    this.run();
  }

  run2(){
    console.log("子组件的run2方法")
  }

  sendParent(){
    this.outputSon.emit("我是子组件广播的数据");
  }

}
