import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { environment } from '../environments/environment'
import { Music } from './music'

interface GetMusicsResponse {
    musics: Music[]
}

interface UploadMusicResponse {
    musics: Music[]
}

@Injectable()
export class MusicService {

    constructor(private httpClient: HttpClient) { }

    getMusics(): Promise<Music[]> {
        return this.httpClient
            .get<GetMusicsResponse>(environment.apiUrl + '/musics')
            .map(res => res.musics)
            .toPromise()
    }

    uploadMusic(files: File[]) {
        const formData = new FormData()
        files.forEach(f => formData.append('files', f))
        return this.httpClient
            .post<UploadMusicResponse>(environment.apiUrl + '/musics', formData)
            .map(res => res.musics)
            .toPromise()
    }
}
