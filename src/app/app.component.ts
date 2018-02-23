import { Component } from '@angular/core';
import { AuthService } from './services/AuthService';
import { loadavg } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged: boolean = false;

  constructor(private authService: AuthService){
    this.authService.isLoggedIn$.subscribe(logged=>{
      this.logged = logged;
    })
  }
}
