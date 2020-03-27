import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData(){
    return "this is service data";
  }

  getCallbackData(cb){
    setTimeout(() => {
      var data = '异步数据';
      //return data;
      cb(data);
    },1000)
  }

  getPromiseData(){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        var data = 'Promise';
        resolve(data);
      },1000)
    })
  }

  getPromiseData2(){
    return new Promise((resolve,reject) => {
      var count = 1;
      setInterval(()=>{
        count ++;
        var data = 'Promise';
        resolve(data + count);
      },1000)
    })
  }

  getRxjsData(){
    return new Observable((observable) => {
      setTimeout(()=>{
        var data = 'RXJS';
        observable.next(data);
        //observable.error("失败数据")
      },3000)
    })
  }
  getRxjsData2(){
    return new Observable((observable) => {
      var count = 1;
      setInterval(()=>{
        var data = 'RXJS';      
        count ++;
        observable.next(data + count);
        //observable.error("失败数据")
      },1000)
    })
  }

  getRxjsIntervalNum(){
    return new Observable((observable) => {
      var count = 1;
      setInterval(()=>{
        count ++;
        observable.next(count);
        //observable.error("失败数据")
      },1000)
    })
  }



}
