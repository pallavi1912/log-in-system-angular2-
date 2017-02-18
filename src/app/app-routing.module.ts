import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserRoutes} from './user/user.routes';

export const routes: Routes = [
  ...UserRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class LogInSystemRoutingModule { }
