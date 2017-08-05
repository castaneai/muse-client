import { Component, OnInit } from '@angular/core'

import { Music } from '../music'
import { MusicService } from '../music.service'

@Component({
    selector: 'app-music-list',
    templateUrl: 'music-list.page.component.html',
})

export class MusicListPageComponent implements OnInit {

    musics: Music[]

    constructor(private musicService: MusicService) { }

    ngOnInit() {
        this.musicService.getMusics()
            .then(musics => this.musics = musics)
    }

    onSelectMusic(music: Music) {
        console.log(music + ' clicked.')
    }
}
