import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// import { ToasterService } from '../../../shared/toaster.service';
import { UserBasicService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.css']
})

export class UserHomeComponent implements OnInit {


  constructor(private router: Router, private userService: UserBasicService) {
  }

  ngOnInit() {
    console.log('home');
  }

  doLogout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}