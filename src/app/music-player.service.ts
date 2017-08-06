import { Injectable } from '@angular/core'

import { Music } from './music'

@Injectable()
export class MusicPlayerService {

    /**
     * 現在プレイヤーにセットしている音楽
     * ない場合はnull
     */
    private currentMusic: Music | null

    private audioElement: HTMLAudioElement | null

    isCurrentMusic(musicId: number): boolean {
        return this.currentMusic && this.currentMusic.id === musicId
    }

    play(music: Music) {
        if (!this.isCurrentMusic(music.id)) {
            this.audioElement = new Audio(music.audioDataUrl)
            this.audioElement.load()
        }
        this.currentMusic = music
        this.audioElement.play()
    }
}
