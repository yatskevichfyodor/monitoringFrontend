import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
  API = '//localhost:8080';
  GAME_API = this.API + '/game';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.GAME_API + '/get-all');
  }

  get(id: string) {
    return this.http.get(this.GAME_API + '/' + id);
  }

  save(game: any): Observable<any> {
    return this.http.post(this.GAME_API, game);
  }

  remove(gameId: string): Observable<any> {
    return this.http.delete(this.GAME_API + '/' + gameId);
  }
}
