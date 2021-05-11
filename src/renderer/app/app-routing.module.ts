import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NugetSourceListComponent} from './components/nuget-source-list/nuget-source-list.component';

const routes: Routes = [
  {
    path: '**',
    component: NugetSourceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
