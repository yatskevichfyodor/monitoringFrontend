import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  HOST = '//localhost:8080';
  API = this.HOST + '/user';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/get-all');
  }

  get(id: number) {
    return this.http.get(this.API + '/' + id);
  }

  post(dto: any): Observable<any> {
    return this.http.post(this.API, dto);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
  
  getByToken(token: string): Observable<any> {
	return this.http.post(this.API + '/getByToken', token);
  }
}
