import { Component, OnInit } from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'app-nuget-source-list',
  templateUrl: './nuget-source-list.component.html',
  styleUrls: ['./nuget-source-list.component.scss']
})
export class NugetSourceListComponent implements OnInit {

  height = 100;

  constructor() { }

  ngOnInit(): void {
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(`current height: ${this.height}`);
    this.height = event.rectangle.height ?? this.height;
    console.log(`new height : ${this.height}`);
    console.log('Element was resized', event);
  }

}
