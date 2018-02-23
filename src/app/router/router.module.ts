import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { EditComponent } from '../components/edit/edit.component';
import { DetailComponent } from '../components/detail/detail.component';
import { LoginComponent } from '../components/login/login.component';

const listRoutes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "edit", component: EditComponent},
  {path: "detail/:id", component: DetailComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
];


@NgModule({
  imports: [
    RouterModule.forRoot(listRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRouterModule { }
