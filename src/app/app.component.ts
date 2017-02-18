import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Please Log In to continue.';
  
  /**
   * Constructor of our main component
   * Router object
   */
   constructor(router: Router) {

    }

}
