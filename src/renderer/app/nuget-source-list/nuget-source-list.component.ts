import { Component, OnInit } from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'app-nuget-source-list',
  templateUrl: './nuget-source-list.component.html',
  styleUrls: ['./nuget-source-list.component.scss']
})
export class NugetSourceListComponent implements OnInit {

  width = 100;

  constructor() { }

  ngOnInit(): void {
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(`current width: ${this.width}`);
    this.width = event.rectangle.width ?? this.width;
    console.log(`new width : ${this.width}`);
    console.log('Element was resized', event);
  }

}
