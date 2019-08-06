import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public todo:string='';
  public arr:any = [];

  //调用服务
  constructor( public storage : StorageService) { 
    
  }

  ngOnInit() {
    if(localStorage.getItem("arr") != null){
      //this.arr = JSON.parse(localStorage.getItem("arr"));
      this.arr = this.storage.get("arr");
    }    
  }

  addTodo(){
    this.arr.push({title:this.todo,checked:false});
    this.todo = '';
    //localStorage.setItem("arr",JSON.stringify(this.arr));
    this.storage.set("arr",this.arr);
  }

  deleteTodo(key){
    this.arr.splice(key,1);
    //localStorage.setItem("arr",JSON.stringify(this.arr));
    this.storage.set("arr",this.arr);
  }

}
