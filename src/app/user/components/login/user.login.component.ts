import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from '../../../shared/toaster.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  loginData = {
    email: '',
    password: ''
  };
  

  constructor(private router: Router) {
      }

  ngOnInit() {
    console.log('login');
  }


  doLogin() {
  }
}
