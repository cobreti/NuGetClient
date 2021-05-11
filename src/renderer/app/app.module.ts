import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NugetSourceListComponent } from './components/nuget-source-list/nuget-source-list.component';
import {MatSliderModule} from '@angular/material/slider';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import {MatDividerModule} from '@angular/material/divider';
import { ResizableModule } from 'angular-resizable-element';
import {NgxElectronModule} from 'ngx-electron';
import { NugetPackagesListComponent } from './components/nuget-source-list/nuget-packages-list/nuget-packages-list.component';
import { NugetPackageComponent } from './components/nuget-source-list/nuget-package/nuget-package.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NugetSourceListComponent,
    FolderListComponent,
    NugetPackagesListComponent,
    NugetPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatDividerModule,
    ResizableModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
