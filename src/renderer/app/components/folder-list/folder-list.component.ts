import { Component, OnInit } from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {ConfigurationService} from '../../services/configuration.service';
import {channels} from '@shared/Channels';

declare var electron: any;

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  constructor(
    private electronService: ElectronService,
    private configuration: ConfigurationService) { }

  ngOnInit(): void {
    this.electronService.ipcRenderer.on(channels.folderSelected, (event, ...args) => {
      console.log('folder selected');
    });
  }

  onChooseFolder(): void {
    if (this.electronService.isElectronApp) {
      this.electronService.ipcRenderer.send(channels.chooseFolder);
    }
  }

}
