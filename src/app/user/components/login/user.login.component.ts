import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

// import { ToasterService } from '../../../shared/toaster.service';
import {UserBasicService} from '../../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  loginData = {
    email: 'admin@gmail.com',
    password: 'admin'
  };
  

  constructor(private router: Router, private userService: UserBasicService) {
      }

  ngOnInit() {
    console.log('login');
  }


  doLogin() {
    let res = this.userService.login(this.loginData.email, this.loginData.password);
    console.log('here',res);
    if(res) {
      console.log('here');
      this.router.navigateByUrl('/home');
    } else {
      // show login error
    }
  }
}
