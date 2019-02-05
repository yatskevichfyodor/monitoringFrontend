import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable({
  providedIn: 'root'
})
export class ActivePlayersService {
  public API = '//localhost:8080';
  public ACTIVE_PLAYERS_API = this.API + '/activePlayers';
  
  sub: Subscription;

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<any> {
    return this.http.get(this.ACTIVE_PLAYERS_API + '/get/' + id);
  }
}
