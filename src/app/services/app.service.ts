import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AppService {
  API = '//localhost:8080';

  // authenticated = false;
  
  credentials: any = {
	  username: null,
	  password: null
  }

  constructor(private http: HttpClient, private router: Router, private userService: UserService, private cookieService: CookieService) {
  }

  authenticate(credentials): Observable<Boolean> {

        // const headers = new HttpHeaders(credentials ? {
            // authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        // } : {});

        // this.http.get(this.API + '/user/test', {headers: headers}).subscribe(response => {
			// console.log('response', respone);
            // if (response['name']) {
                // this.authenticated = true;
            // } else {
                // this.authenticated = false;
            // }
            // //return callback && callback();
        // });
		
        return this.http.post<Boolean>(this.API + '/user/authenticate', credentials);
    }
	
	login() {
		this.cookieService.set('authenticated', 'true');
	}

	logout() {
		this.cookieService.set('authenticated', 'false');
	}
	
	authenticated(): Boolean {
		return this.cookieService.get('authenticated') == 'true';
	}
}