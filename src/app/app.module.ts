import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'

import { MusicListPageComponent } from './page/music-list.page.component'
import { PlaylistsPageComponent } from './page/playlists.page.component'

import { MusicService } from './music.service'
import { MusicPlayerService } from './music-player.service'

@NgModule({
  declarations: [
    // angular
    AppComponent,

    // pages
    MusicListPageComponent,
    PlaylistsPageComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,

    // app modules
    AppRoutingModule,
  ],
  providers: [
    MusicService,
    MusicPlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
