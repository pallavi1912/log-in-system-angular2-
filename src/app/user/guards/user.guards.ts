import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot
} from '@angular/router';

import { UserBasicService } from '../services/user.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private userService: UserBasicService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log('auth guard');
     let res = this.userService.checkLoggedin();
     console.log('guard',res);
     if(res) {
       return true;
     }
     this.router.navigateByUrl('/login');
     return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

@Injectable()
export class LoginCheckGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private userBasicService: UserBasicService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       // console.log('check login guard');
       let loggedIn = this.userBasicService.checkLoggedin();
    if(loggedIn) {
            this.router.navigate(['/home']);
            return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}