import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { AuthService } from './AuthService';
import { Router } from '@angular/router';

@Injectable()
export class LoggierService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem("logged") == "true"){
      this.router.navigate(["/home"]);
      this.authService.setIsLoggedIn(true);
      return false;
    }else{
      return true;
    }
  }
}
