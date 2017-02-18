import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule }   from '@angular/forms';

import { UserLoginComponent,
         UserHomeComponent } from './components/index';

import {UserBasicService} from './services/user.service';
import {AuthGuard, LoginCheckGuard} from './guards/user.guards';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        UserLoginComponent,
        UserHomeComponent
    ],
    exports: [
        UserLoginComponent,
        UserHomeComponent,
        RouterModule,
        FormsModule
    ],
    providers: [UserBasicService, LoginCheckGuard, AuthGuard]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [UserBasicService, LoginCheckGuard, AuthGuard]
        };
    }
 }
