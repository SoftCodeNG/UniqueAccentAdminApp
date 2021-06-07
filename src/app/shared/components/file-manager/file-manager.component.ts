import {Component, Inject, OnInit} from '@angular/core';
import {SetFileManagerState} from '../../../store/app-store/app.action';
import {Store} from '@ngxs/store';
import {FileManagerService} from '../../../core/services/file-manager.service';
import {environment} from '../../../../environments/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  baseURL = environment.baseUrl;
  selectedFile: any;
  selectedMedia: any;
  selectedMediaType: any;
  selectedMediaName: any;
  currentView = 'image';
  allMedia: any[];
  allImages: any[];
  allVideo: any[];
  allAudio: any[];

  constructor(
    private store: Store,
    private fileManagerService: FileManagerService,
    public dialogRef: MatDialogRef<FileManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    switch (this.data.mediaType) {
      case 'image': {
        this.getAllImages();
        this.currentView = 'image';
        break;
      }
      case 'video': {
        this.getAllVideo();
        this.currentView = 'video';
        break;
      }
      case 'audio': {
        this.getAllAudio();
        this.currentView = 'audio';
        break;
      }
    }
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
    this.dialogRef.close();
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
        this.getMedia();
      });
    }
  }

  selectFileAndCloseModal(): void {
    this.dialogRef.close({
      selectedMedia: this.selectedMedia,
      selectedMediaType: this.selectedMediaType,
      selectedMediaName: this.selectedMediaName
    });
  }
}
