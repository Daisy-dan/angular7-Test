import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpComponent } from './components/http/http.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TemplateComponent } from './components/template/template.component';
import { RouterlistComponent } from './components/routerlist/routerlist.component';
import { RouterlistdetailsComponent } from './components/routerlistdetails/routerlistdetails.component';

const routes: Routes = [
  
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'http',component: HttpComponent
  },
  {
    path: 'rxjs',component: RxjsComponent
  },
  {
    path: 'life',component: LifecycleComponent
  },
  {
    path: 'fa',component: FatherComponent
  },
  {
    path: 'son',component: SonComponent
  },
  {
    path: 'side',component: SidebarComponent
  },
  {
    path: 'child',component: ViewchildComponent
  },
  {
    path: 'form',component: FormComponent
  },
  {
    path: 'todolist',component: TodolistComponent
  },
  {
    path: 'temp',component: TemplateComponent
  },
  {
    path: 'list',component: RouterlistComponent,
    children:[
      {
        path:'sonpage/:aid',
        component: RouterlistdetailsComponent
      },
      // {
      //   path:'**',
      //   redirectTo: 'sonpage/1'
      // }
    ]
  },
  {
    path: 'listdetails',component: RouterlistdetailsComponent
  },
  {
    path: 'details/:aid',component: RouterlistdetailsComponent
  },
  {
    path: 'details',component: RouterlistdetailsComponent
  },
  {
    //匹配不到路由，默认跳转home
    path: '**',redirectTo: 'home'  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
