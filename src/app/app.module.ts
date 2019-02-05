import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from "angular2-image-upload";
import { MatSelectModule } from '@angular/material/select';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';

import { ServersPanelComponent } from './servers-panel/servers-panel.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ServerUpdateComponent } from './server-update/server-update.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ActivePlayersTableComponent } from './active-players-table/active-players-table.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';

import { ServerService } from './services/server.service';
import { ActivePlayersService } from './services/active-players.service';
import { GameService } from './services/game.service';
import { UserService } from './services/user.service';
import { AppService } from './services/app.service';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/servers-panel', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegistrationComponent
  },
  {
    path: 'servers-panel',
    component: ServersPanelComponent
  },
  {
    path: 'games-list',
    component: GamesListComponent
  },
  {
    path: 'server-update',
    component: ServerUpdateComponent
  },
  {
    path: 'server-update/:id',
    component: ServerUpdateComponent
  },
  {
    path: 'server/:id',
    component: ServerInfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServersPanelComponent,
    GamesListComponent,
    ServerUpdateComponent,
	ServerInfoComponent,
    ActivePlayersTableComponent,
    LoaderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
	MatSelectModule,
	MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot()
  ],
  providers: [ServerService, GameService, ActivePlayersService, AppService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
