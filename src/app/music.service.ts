import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/toPromise'

import { environment } from '../environments/environment'
import { Music } from './music'

@Injectable()
export class MusicService {

    constructor(private httpClient: HttpClient) { }

    getMusics(): Promise<Music[]> {
        return this.httpClient
            .get<Music[]>(environment.apiUrl + '/musics')
            .toPromise()
    }
}
