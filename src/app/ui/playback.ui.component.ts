import { Component } from '@angular/core'

import 'rxjs/add/operator/distinctUntilChanged'

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
    playingMusic: Music | null = null

    currentMusicTimePercent = 0

    constructor(private musicPlayerService: MusicPlayerService) {
        // 曲がかわったら、UIに反映する
        this.musicPlayerService.onCurrentMusicChanged.subscribe(music => {
            this.playingMusic = music
        })

        // 曲の再生時刻％がかわったら、スライダーに反映する
        this.musicPlayerService.onCurrentMusicTimePercentChanged
            .distinctUntilChanged()
            .subscribe(time => {
                this.currentMusicTimePercent = time
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

    onChangeTime(sliderEvent: {value: number}) {
        this.musicPlayerService.setCurrentTimeWithRatio(sliderEvent.value)
    }
}
