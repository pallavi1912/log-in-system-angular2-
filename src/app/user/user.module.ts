import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UserLoginComponent,
         UserHomeComponent } from './components/index';
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        UserLoginComponent,
        UserHomeComponent
    ],
    exports: [
        UserLoginComponent,
        UserHomeComponent,
        RouterModule
    ],
    providers: []
})
export class UserModule {
    
 }
