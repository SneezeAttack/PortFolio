import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  @ViewChild('audioPlayer') song: any;

  songName: string[] = [];
  fileType: string[] = [];

  constructor(private fetchService: HttpService) { }

  ngOnInit(): void {
    this.initAudioElements();
  }

  initAudioElements() {
    this.fetchService.getData().subscribe(data => { this.songName.push(data.name), this.fileType.push(data.ftype) });

    console.log(this.songName);

  }


}
