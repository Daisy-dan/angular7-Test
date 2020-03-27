import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';

import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit() {

    //同步方法
    let data = this.request.getData();
    console.log(data);

    //2、callback获取异步数据
    // let callback = this.request.getCallbackData(); 
    // console.log(callback); //undefined
    this.request.getCallbackData((callback)=>{
      console.log(callback);
    }); 

    //3、promise获取异步数据
    var promiseData = this.request.getPromiseData();
    promiseData.then((promise) =>{
      console.log(promise);
    })
          //setInterval  promise不能执行多次
    var promiseData2 = this.request.getPromiseData2();
    promiseData2.then((promise) =>{
      console.log(promise);
    })

    //4、rxjs获取异步方法里面的数据

    var rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data) => {
      console.log(data);
    })

    //5、过一秒以后撤回刚才的操作

    var stream = this.request.getRxjsData();
    var d = stream.subscribe((data) => {
      console.log(data);
    })
    setTimeout(() => {
      d.unsubscribe();
    },1000)

         //setInterval  rxjs可以执行多次
    var stream2 = this.request.getRxjsData2();
    var d2 = stream2.subscribe((data) => {
      console.log(data);
    })
    setTimeout(() => {
      d2.unsubscribe();
    },5000)


    //6、用工具方法对返回的数据进行处理 filter map
    var streamNum = this.request.getRxjsIntervalNum();
    var d3 = streamNum.pipe(
      // filter((data:any) =>{
      //   if(data % 2 == 0){
      //     return true;
      //   }
      // })
      map((data:any) => {
        return data * data;
      })
    ).subscribe((data)=>{
      console.log(data);
    })
    setTimeout(() => {
      d3.unsubscribe();
    },5000)
   
  }

 

}
