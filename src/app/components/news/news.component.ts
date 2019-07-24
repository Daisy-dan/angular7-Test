import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public title = "news组件";

  msg: string = "news组件news组件";
  constructor() { }

  ngOnInit() {
  }

}
