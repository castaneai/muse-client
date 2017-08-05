import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { MusicListPageComponent } from './page/music-list.page.component'

import { MusicService } from './music.service'

@NgModule({
  declarations: [
    AppComponent,

    // pages
    MusicListPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    MusicService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
