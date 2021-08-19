import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  vidUrl: string = '';
  activeVid: any;
  constructor() { }

  ngOnInit(): void {
  }

}
