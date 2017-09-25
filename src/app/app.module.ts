// angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

// 3rd party
import { SliderModule } from 'primeng/components/slider/slider'

// app base
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'

// app service
import { MusicService } from './music.service'
import { MusicPlayerService } from './music-player.service'

// app pages
import { MusicListPageComponent } from './page/music-list.page.component'
import { PlaylistsPageComponent } from './page/playlists.page.component'

// app ui
import { PlaybackUIComponent } from './ui/playback.ui.component'
import { SliderUIComponent } from './ui/slider.ui.component'

@NgModule({
  declarations: [
    // angular
    AppComponent,

    // pages
    MusicListPageComponent,
    PlaylistsPageComponent,

    // ui
    PlaybackUIComponent,
    SliderUIComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,
    FormsModule,

    // app modules
    AppRoutingModule,

    // primeng sliders
    SliderModule,
  ],
  providers: [
    MusicService,
    MusicPlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
