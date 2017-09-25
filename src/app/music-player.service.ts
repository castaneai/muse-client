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
     * 曲の再生位置％が変わったら流れるストリーム
     */
    private onCurrentMusicTimePercentChangedSource = new Subject<number>()
    onCurrentMusicTimePercentChanged = this.onCurrentMusicTimePercentChangedSource.asObservable()

    /**
     * 現在プレイヤーにセットしている音楽
     * ない場合はnull
     */
    private currentMusic: Music | null = null

    private audioElement: HTMLAudioElement = new Audio()

    constructor() {
        this.audioElement.addEventListener('timeupdate', () => {
            const percent = (this.audioElement.currentTime / this.audioElement.duration) * 100.0
            this.onCurrentMusicTimePercentChangedSource.next(percent)
        })
    }

    isMusicLoaded() {
        // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
        return this.audioElement.readyState >= 1;
    }

    isCurrentMusic(musicId: number): boolean {
        if (this.currentMusic === null) {
            return false
        }
        return this.currentMusic.id === musicId
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
            this.audioElement.src = music.audioDataUrl
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

    /**
     * 現在の再生時刻を秒位置で指定
     * @param time 再生時刻（秒）
     */
    setCurrentTime(time: number) {
        if (!this.isMusicLoaded()) {
            return
        }
        this.audioElement.currentTime = time
        // onCurrentMusicTimePercentChangedは外部からのイベントによって変更されたときのみ流すので、ここでは流さない
    }

    /**
     * 現在の再生時刻を％で指定
     * @param percent 0-100
     */
    setCurrentTimeWithRatio(percent: number) {
        if (!this.isMusicLoaded()) {
            return
        }
        const time = this.audioElement.duration * (percent / 100.0)
        this.setCurrentTime(time)
    }
}
