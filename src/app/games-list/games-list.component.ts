import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: Array<any>;
  game: any = {};

  sub: Subscription;

  @ViewChild(MatSelectionList) gamesList: MatSelectionList;
  
  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.gameService.getAll().subscribe(data => {
      this.games = data;
    });
	
    this.gamesList.selectionChange.subscribe((s: MatSelectionListChange) => {
        this.gamesList.deselectAll();
        s.option.selected = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/games-list']);
  }

  save(form: NgForm) {
    this.gameService.save(form).subscribe(result => {
      console.log(result);
      window.location.reload();
    }, error => console.error(error));
  }

  delete(gameId: string) {
    console.log('Delete button was pressed');
    console.log(gameId);
    this.gameService.remove(gameId).subscribe(result => {
      console.log(result);
      window.location.reload();
    }, error => console.error(error));
  }
}
