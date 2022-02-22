import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { Media } from '../media';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  @ViewChild('audioPlayer') song: any;

  songList: Media[] = [];
  active?: Media;
  path: string = '';

  constructor(private fetchService: HttpService) { }

  ngOnInit(): void {
    this.initAudioElements();
  }

  initAudioElements() {

    //let tmpMedia: Media[] = [];
    this.fetchService.getData().subscribe(data => this.songList = data.filter(this.checkElement));

    //console.log("Got data " + this.songList[0].name);



  }


  selectSong(i: number): void {
    this.active = this.songList[i];
    this.path = "/assets/audio/" + this.active.name + '.' + this.active.ftype;
    //console.log(this.songList);
  }

  checkElement(m: Media): boolean {

    return m.mtype === "audio";
  }


}
