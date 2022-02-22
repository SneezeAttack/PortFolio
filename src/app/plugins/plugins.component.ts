import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Media } from '../media';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {


  video: boolean = false;
  videos: Media[] = [];
  active?: Media;
  path: string = '';



  constructor(private fetchService: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.fetchService.getData().subscribe(data => this.videos = data.filter(this.checkElement) );
  }

  selectVid(index: number): void {
    this.active = this.videos[index];
    this.path = "/assets/video/" + this.active.name + '.' + this.active.ftype;
  }

  checkElement(m: Media): boolean {
 
    return m.mtype === "video";
  }

}
