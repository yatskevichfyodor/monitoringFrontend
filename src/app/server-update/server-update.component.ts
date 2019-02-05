import {Component, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {ServerService} from '../services/server.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-server-update',
  templateUrl: './server-update.component.html',
  styleUrls: ['./server-update.component.css']
})
export class ServerUpdateComponent implements OnInit {
  server: any;
  games: Array<any>;

  newServer: boolean;

  constructor(private gameService: GameService, private serverService: ServerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.newServer = false;
        this.serverService.get(id).subscribe((server: any) => {
          console.log(server);
          this.server = server;
        })
      } else {
        this.newServer = true;
        this.server = {
          id: null,
          name: null,
          ip: null,
          gameId: null,
          gameName: null,
          imageData: null,
          maxPlayersNumber: null
        };
        console.log(this.server);
      }
      //console.log(this.newServer);
    });

    this.gameService.getAll().subscribe(data => {
      this.games = data;
    });
  }

  gotoPanel() {
    this.router.navigate(['/servers-panel']);
  }

  save() {
    if (this.server.imageData === null) return;
    console.log(this.server);
    if (this.newServer) {
      this.serverService.post(this.server).subscribe(result => {
        console.log(result);
        this.gotoPanel();
      }, error => console.error(error));
    } else {
      this.serverService.put(this.server).subscribe(result => {
        console.log(result);
        this.gotoPanel();
      }, error => console.error(error));
    }
  }

  imageDropped($event: any) {
    let temp: any = event;
    this.server.imageData = (temp).currentTarget.result;
  }

  imageRemoved($event: any) {
    this.server.imageData = null;
  }
}
