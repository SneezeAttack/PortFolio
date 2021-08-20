import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  @ViewChild('videoPlayer') vid: any;
  video: boolean = true;
  ftype: string = '';
  videoSource: string = "/assets/video/test.mp4";
  toggleVideo() {

    const video: HTMLVideoElement = this.vid.elementRef;
   
    video.play();
  }

  resetVideo(src: string): void {
    const video: HTMLVideoElement = this.vid.elementRef;

    video.src = src;
  }

  constructor(private fetchService: HttpService  ) { }

  ngOnInit(): void {
    this.setVideoBool();
  }

  setVideoBool(): void {
    if (this.vid) this.video = true;
    else this.video = false
  }

}
