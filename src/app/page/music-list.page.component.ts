import { Component, OnInit } from '@angular/core'

import { Music } from '../music'
import { MusicService } from '../music.service'
import { MusicPlayerService } from '../music-player.service'

@Component({
    selector: 'app-music-list',
    templateUrl: 'music-list.page.component.html',
    styleUrls: ['music-list.page.component.css'],
})

export class MusicListPageComponent implements OnInit {

    musics: Music[] = []

    constructor(
        private musicService: MusicService,
        private musicPlayerService: MusicPlayerService) { }

    ngOnInit() {
        this.musicService.getMusics()
            .then(musics => this.musics = musics)
    }

    onSelectMusic(music: Music) {
        this.musicPlayerService.setCurrentMusicAndPlay(music)
    }
}
