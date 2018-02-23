import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HeaderService } from '../app/services/header.service';
import { ListService } from '../app/services/list.service';
import { ComunicatorService } from '../app/services/comunicator.service';
import { DemoRouterModule } from './router/router.module';
import { LoginComponent } from './components/login/login.component'
import { AuthGuard } from './services/AuthGuard.service';
import { AuthService } from './services/AuthService';
import { LoggierService } from './services/loggier.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EditComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [HeaderService, ListService, ComunicatorService, AuthGuard, AuthService, LoggierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
