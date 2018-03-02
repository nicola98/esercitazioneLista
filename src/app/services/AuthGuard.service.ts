import { Injectable }     from '@angular/core';
import { CanActivate, CanDeactivate }    from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { ListComponent } from '../components/list/list.component';
import { Router } from '@angular/router';
import { AuthService } from './AuthService';
import { EditComponent } from '../components/edit/edit.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !component.hasChanges;
  }

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