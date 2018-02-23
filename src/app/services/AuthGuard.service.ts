import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { ListComponent } from '../components/list/list.component';
import { Router } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem("logged") == "true"){
      return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
    }
  }

}