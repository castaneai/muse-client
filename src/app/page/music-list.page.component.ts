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

    selectedMusic: Music|null = null
    hoveredMusic: Music|null = null

    constructor(
        private musicService: MusicService,
        private musicPlayerService: MusicPlayerService) { }

    ngOnInit() {
        this.musicService.getMusics()
            .then(musics => this.musics = musics)
    }

    isSelected(music: Music) {
        return this.selectedMusic !== null && this.selectedMusic.id === music.id
    }

    isPlaying(music: Music) {
        return this.musicPlayerService.isCurrentMusic(music.id)
    }

    onSelectMusic(music: Music) {
        this.selectedMusic = music
    }

    onPlayMusic(music: Music) {
        this.musicPlayerService.setCurrentMusicAndPlay(music)
    }

    isHovering(music: Music) {
        return this.hoveredMusic !== null && this.hoveredMusic.id === music.id
    }

    onMouseoverMusic(music: Music) {
        this.hoveredMusic = music
    }

    onMouseoutMusic(music: Music) {
        this.hoveredMusic = null
    }
}
