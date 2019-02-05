import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  public API = '//localhost:8080';
  public SERVER_API = this.API + '/server';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.SERVER_API + '/get-all');
  }

  get(id: number) {
    return this.http.get(this.SERVER_API + '/' + id);
  }

  post(server: any): Observable<any> {
    return this.http.post(this.SERVER_API, server);
  }

  put(server: any): Observable<any> {
    return this.http.put(this.SERVER_API, server);
  }

  delete(serverId: string): Observable<any> {
    return this.http.delete(this.SERVER_API + '/' + serverId);
  }
}
