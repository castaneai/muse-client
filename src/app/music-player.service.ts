import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'

import { Music } from './music'

@Injectable()
export class MusicPlayerService {

    /**
     * 再生中の曲が変わったら流れるストリーム
     */
    private onCurrentMusicChangedSource = new Subject<Music | null>()
    onCurrentMusicChanged = this.onCurrentMusicChangedSource.asObservable()

    /**
     * 現在プレイヤーにセットしている音楽
     * ない場合はnull
     */
    private currentMusic: Music | null

    private audioElement: HTMLAudioElement | null

    isCurrentMusic(musicId: number): boolean {
        return this.currentMusic && this.currentMusic.id === musicId
    }

    setCurrentMusic(music: Music) {
        if (this.isCurrentMusic(music.id)) {
            this.audioElement.currentTime = 0
        } else {
            // 他の再生中のものは止める
            if (this.audioElement) {
                // TODO: フェードアウト
                this.audioElement.pause()
            }
            this.audioElement = new Audio(music.audioDataUrl)
            this.audioElement.load()
        }
        this.currentMusic = music
        this.onCurrentMusicChangedSource.next(music)
    }

    setCurrentMusicAndPlay(music: Music) {
        this.setCurrentMusic(music)
        this.play()
    }

    play() {
        this.audioElement.play()
    }

    pause() {
        this.audioElement.pause()
    }
}
