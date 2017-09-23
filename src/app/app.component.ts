import { Component } from '@angular/core'
import { MusicService } from './music.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private musicService: MusicService) {}

  preventEvent(event: Event) {
    event.preventDefault()
  }

  onDropFile(event: DragEvent) {
    this.preventEvent(event)

    // convert FileList -> File[]
    // https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
    const files = Array.from(event.dataTransfer.files)

    this.musicService.uploadMusic(files)
      .then(musics => {
        console.log('music uploaded!')
        console.log(musics)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
