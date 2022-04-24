import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Media } from '../media';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {


  constructor(private fetchService: HttpService) { }

  ngOnInit(): void {
    //this.getData();
  }

  getData() {
    //this.fetchService.getData().subscribe(data => this.videos = data.filter(this.checkElement) );
  }

}
