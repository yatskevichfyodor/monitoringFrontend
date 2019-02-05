import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {ServerService} from '../services/server.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {
  server: any;

  sub: Subscription;

  constructor(private serverService: ServerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.serverService.get(id).subscribe((server: any) => {
          //console.log(server);
          this.server = server;
        });
      }
    });
  }

  gotoPanel() {
    this.router.navigate(['/servers-panel']);
  }

  deleteServer() {
    this.serverService.delete(this.server.id).subscribe(result => {
      //console.log(result);
      this.gotoPanel();
    }, error => console.error(error));
  }
}

