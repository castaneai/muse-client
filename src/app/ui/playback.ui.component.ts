import { Component } from '@angular/core'

import { Music } from '../music'
import { MusicPlayerService } from '../music-player.service'

/**
 * 再生中の曲を表示・コントロールするUI
 */
@Component({
    selector: 'app-ui-playback',
    templateUrl: 'playback.ui.component.html',
    styleUrls: ['playback.ui.component.css'],
})
export class PlaybackUIComponent {

    /**
     * playbackにセット中のmusic
     */
    playingMusic: Music | null

    constructor(private musicPlayerService: MusicPlayerService) {
        // 曲がかわったら、UIに反映する
        this.musicPlayerService.onCurrentMusicChanged.subscribe(music => {
            this.playingMusic = music
        })
    }

    getNowPlayingMusicText() {
        if (this.playingMusic) {
            return `${this.playingMusic.title} by ${this.playingMusic.artist}`
        } else {
            return ''
        }
    }

    onPlay() {
        this.musicPlayerService.play()
    }

    onPause() {
        this.musicPlayerService.pause()
    }
}
