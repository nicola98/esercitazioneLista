import { Component, OnInit, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AuthGuard } from '../../services/AuthGuard.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {

  message: string;
 
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
 
  setMessage() {
    this.message = 'Logged in';
  }
 
  login(user:string, password:string) {
    if(user=="admin")
    this.message = 'Trying to log in ...';
    this.authService.login();
  }
 
 

}
