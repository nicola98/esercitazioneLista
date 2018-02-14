import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HeaderService } from '../app/services/header.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EditComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
