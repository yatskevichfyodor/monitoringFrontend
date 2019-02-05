import { Component, OnInit } from '@angular/core';

import { ServerService } from '../services/server.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-servers-panel',
  templateUrl: './servers-panel.component.html',
  styleUrls: ['./servers-panel.component.css']
})
export class ServersPanelComponent implements OnInit {
  serversList: Array<any>;

  constructor(private serversService: ServerService, private appService: AppService) { }

  ngOnInit() {
    this.serversService.getAll().subscribe(data => {
      this.serversList = data;
	  console.log(data);
    });
	
  }
	
	authenticated(): Boolean {
		return this.appService.authenticated();
	}
}
