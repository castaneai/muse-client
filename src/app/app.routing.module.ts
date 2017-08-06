import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MusicListPageComponent } from './page/music-list.page.component'
import { PlaylistsPageComponent } from './page/playlists.page.component'

const routes: Routes = [
  { path: '', redirectTo: '/music', pathMatch: 'full' },
  { path: 'music',  component: MusicListPageComponent },
  { path: 'playlists',  component: PlaylistsPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
