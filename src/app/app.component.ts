import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService, private router: Router) { }
  
  authenticated() { return this.appService.authenticated(); }
  
  logout() {
     this.appService.logout();
	 this.router.navigate(['/servers-panel']);
  }
}
