import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';

// import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }        from './app.component';

import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash:true}),
    UserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




