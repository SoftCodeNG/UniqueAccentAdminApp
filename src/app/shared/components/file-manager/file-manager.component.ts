import { Component, OnInit } from '@angular/core';
import {SetFileManagerState} from '../../../store/app-store/app.action';
import {Store} from '@ngxs/store';
import {FileManagerService} from '../../../core/services/file-manager.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  baseURL = environment.baseUrl;
  selectedFile: any;
  currentView = 'image';
  allMedia: any[];
  allImages: any[];
  allVideo: any[];
  allAudio: any[];

  constructor(
    private store: Store,
    private fileManagerService: FileManagerService
  ) { }

  ngOnInit(): void {
    this.getAllMedia();
    this.getAllImages();
    this.getAllVideo();
    this.getAllAudio();
  }

  getAllMedia(): void {
    this.fileManagerService.getAllMedia().subscribe(res => {
      console.log(res);
      this.allMedia = res;
    });
  }

  getAllImages(): void {
    this.fileManagerService.getAllImages().subscribe(res => {
      console.log(res);
      this.allImages = res;
    });
  }

  getAllVideo(): void {
    this.fileManagerService.getAllVideo().subscribe(res => {
      console.log(res);
      this.allVideo = res;
    });
  }

  getAllAudio(): void {
    this.fileManagerService.getAllAudio().subscribe(res => {
      console.log(res);
      this.allAudio = res;
    });
  }

  hideFileManager(): void {
    this.store.dispatch(new SetFileManagerState(false));
  }

  setCurrentView(view: string): void {
    this.currentView = view;
  }

  selectFile($event: any): void {
    console.log($event.target.files[0]);
    this.selectedFile = $event.target.files[0];
    this.uploadMedia();
  }

  uploadMedia(): void {
    if (this.selectedFile) {
      this.fileManagerService.uploadMedia(this.selectedFile).subscribe(res => {
        console.log(res);
      });
    }
  }
}
