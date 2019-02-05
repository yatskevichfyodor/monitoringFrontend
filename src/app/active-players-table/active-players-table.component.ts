import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ActivePlayersService } from '../services/active-players.service';

import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'active-players-table',
  templateUrl: './active-players-table.component.html',
  styleUrls: ['./active-players-table.component.css']
})
export class ActivePlayersTableComponent implements OnInit {
  activePlayers: Array<any>;

  sub: Subscription;
  
  constructor(private activePlayersService: ActivePlayersService, private route: ActivatedRoute) { }

  ngOnInit() {
	this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.activePlayersService.get(id).subscribe((activePlayers: Array<any>) => {
			//console.log(activePlayers);
			this.activePlayers = activePlayers;
			for (let i = 0; i < this.activePlayers.length; i++) {
				this.activePlayers[i].id = i;
			}
        });
      }
    });
  }
}
