import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  dto: any = {
	username: null,
    email: null,
    password: null	
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  gotoPanel() {
    this.router.navigate(['/servers-panel']);
  }

  register() {
    this.userService.post(this.dto).subscribe(result => {
      console.log(result);
      this.gotoPanel();
    }, error => console.error(error));
  }

}
