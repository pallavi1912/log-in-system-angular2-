import { Route } from '@angular/router';
import {UserLoginComponent} from './components/login/user.login.component';
import {UserHomeComponent} from './components/home/user.home.component';

import {AuthGuard, LoginCheckGuard} from './guards/user.guards';

export const UserRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [LoginCheckGuard]
  },
  {
      path: 'login',
      component: UserLoginComponent,
      canActivate: [LoginCheckGuard]
  },
  {
      path: 'home',
      component: UserHomeComponent,
      canActivate: [AuthGuard]
  }
];