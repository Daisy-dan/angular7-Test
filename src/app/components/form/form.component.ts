import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo: any ={
    name: '',
    sex: '',
    citys: ['北京','上海'],
    city: '1_上海',
    likes: [{
      title:'吃饭',
      checked:false
    },
    {
      title:'睡觉',
      checked:false
    },
    {
      title:'打豆豆',
      checked:false
    }],
    like: [],
    memo: ''
  }
  constructor() { }

  ngOnInit() {
  }

  doSubmit(){
    // let name:any = $("#name").val();
    console.log(this.peopleInfo);
  }
  checkboxChange(key,checked){
    console.log(key,checked);
    if(checked == true){
      this.peopleInfo.like.push(this.peopleInfo.likes[key].title)
      // this.peopleInfo.like.splice(key,0,this.peopleInfo.likes[key].title)
    }else{
      this.peopleInfo.like.splice(this.peopleInfo.like.indexOf(this.peopleInfo.likes[key].title),1)
    }
  }

}
