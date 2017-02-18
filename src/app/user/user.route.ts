import { Route } from '@angular/router';
import {UserLoginComponent} from './components/login/user.login.component';
import {UserHomeComponent} from './components/home/user.home.component';



export const UserRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: UserLoginComponent
  },
  {
      path: 'home',
      component: UserHomeComponent
  }
];