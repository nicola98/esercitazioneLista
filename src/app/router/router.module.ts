import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { EditComponent } from '../components/edit/edit.component';
import { DetailComponent } from '../components/detail/detail.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../services/AuthGuard.service';
import { AuthService } from '../services/AuthService';
import { LoggierService } from '../services/loggier.service';

const listRoutes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [LoggierService]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "list", component: ListComponent, canActivate: [AuthGuard]},
  {path: "edit", component: EditComponent, canActivate: [AuthGuard]},
  {path: "detail/:id", component: DetailComponent, canActivate: [AuthGuard]},
  {path: "", redirectTo: "login", pathMatch: "full"},
];


@NgModule({
  imports: [
    RouterModule.forRoot(listRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class DemoRouterModule { }
