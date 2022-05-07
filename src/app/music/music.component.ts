import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { Media } from '../media';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  //@ViewChild('audioPlayer') song: any;

  songList: Media[] = [];
  active?: Media;


  constructor(private fetchService: HttpService) { }

  ngOnInit(): void {
    this.initAudioElements();
  }

  initAudioElements() {

    //let response: JSON;
    //let tmpMedia: Media[] = [];
    //this.fetchService.getData().subscribe(data => this.songList = data.filter(this.checkElement));
    //this.fetchService.getData().subscribe(data => this.response = data);
    this.fetchService.getData().subscribe(data => this.fill(data));




  }

  selectSong(i: number): void {

    this.active = this.songList[i];
  }


  fill(d: Media[]): void {

    let i = 0;
    for (i; i < d.length; i++) {
      this.songList.push(d[i]);
    }

  }
}
