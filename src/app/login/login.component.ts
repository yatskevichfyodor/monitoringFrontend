import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
  message = ""

  credentials = {username: '', password: ''};

  constructor(private appService: AppService, private http: HttpClient, private router: Router) {
  }
  
  ngOnInit() {
  }

  gotoPanel() {
    this.router.navigate(['/']);
  }

  login() {
	this.appService.authenticate(this.credentials).subscribe(success => {
			console.log('success', success);
            this.appService.login();
			
			if (success) this.gotoPanel()
			else this.message = "Invalid credentials";
     });
  }
}
