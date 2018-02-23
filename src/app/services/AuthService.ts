import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(public router: Router) {
      }
    private isLoggedIn: Subject<boolean> = new Subject<boolean>();

    public isLoggedIn$ = this.isLoggedIn.asObservable();

    setIsLoggedIn(value: boolean) {
        this.isLoggedIn.next(value);
    }
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login() {
        this.setIsLoggedIn(true);
        sessionStorage.setItem("logged", "true");
        this.router.navigate(['/home']);
    }

    logout(): void {
        sessionStorage.setItem("logged", "false");
        this.setIsLoggedIn(false);
        this.router.navigate(['/login']);
    }
}