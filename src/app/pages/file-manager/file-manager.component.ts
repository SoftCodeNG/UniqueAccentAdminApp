import { Component, OnInit } from '@angular/core';
import {FileManagerService} from '../../core/services/file-manager.service';

@Component({
  selector: 'app-filemanager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  allMedia: any[];
  allImages: any[];
  allVideo: any[];
  allAudio: any[];

  constructor(private fileManagerService: FileManagerService) { }

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
}
