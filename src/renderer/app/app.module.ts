import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NugetSourceListComponent } from './nuget-source-list/nuget-source-list.component';
import {MatSliderModule} from '@angular/material/slider';
import { FolderListComponent } from './folder-list/folder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NugetSourceListComponent,
    FolderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
