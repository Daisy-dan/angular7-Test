//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//angular 核心模块
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//根组件
import { AppComponent } from './app.component';
import { WelcomePipe } from './pipe/welcome.pipe';

//components
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TemplateComponent } from './components/template/template.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpComponent } from './components/http/http.component';
import { HomeComponent } from './components/home/home.component';

//引入配置服务
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { HttpserviceService } from './services/httpservice.service';
import { RouterlistComponent } from './components/routerlist/routerlist.component';
import { RouterlistdetailsComponent } from './components/routerlistdetails/routerlistdetails.component';


//装饰器，接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    WelcomePipe,
    FormComponent,
    TodolistComponent,
    ViewchildComponent,
    SidebarComponent,
    FatherComponent,
    SonComponent,
    LifecycleComponent,
    RxjsComponent,
    HttpComponent,
    HomeComponent,
    RouterlistComponent,
    RouterlistdetailsComponent,
  ],
  //配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
    ],
  //配置项目所需要的其他模块
  providers: [StorageService,RequestService,HttpserviceService],
  //指定应用的主视图（称为根组件）
  bootstrap: [AppComponent]
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
