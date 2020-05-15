import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  // 模块内部组件
  declarations: [UserComponent],
  // 外部访问模块里的组件，需要暴露出去
  exports:[UserComponent],
  // 服务
  providers:[UserService],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
