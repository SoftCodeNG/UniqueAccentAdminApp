import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;
  selectedThumbnailFile: string;
  selectedPreviewFile: string;
  courseDetails: any;
  isEditing: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

//   createdAt: "2021-06-07T00:18:49.300535Z"
// description: "h fdhfdh fdh fdjhg fdjgfjgfjfgjfgjfjgfjf"
// duration: 2000
// id: 10
// isPublished: false
// lessons: 3
// price: "5000.000"
// purchases: 0
// slug: "how-to-cook"
// thumbnail: "https://unique-accent-api.herokuapp.com/get-media/image/publicSpeaking.jpeg"
// title: "How to cook"
// updatedAt: "2021-06-07T00:22:07.761415Z"
// video: "https://un

  ngOnInit(): void {
    this.createCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['', Validators.required],
      video: ['', Validators.required],
      price: ['', Validators.required],
    });
     if (this.activatedRoute.snapshot.params.slug){
      this.getCourseDetails(this.activatedRoute.snapshot.params.slug);
      this.isEditing = true;
    }
  }

  createCourse(): void {
    if (this.createCourseForm.valid === true) {
      console.log(this.createCourseForm.value);
      this.coursesService.createCourse(this.createCourseForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate([`courses/create-lesson/${res.slug}`]).then();
      });
    }
  }

  getCourseDetails(slug: string): void {
    this.coursesService.getCourseDetails(slug).subscribe(res => {
      this.courseDetails = res;
      console.log(res);
      this.createCourseForm.controls.title.setValue(res.title);
      this.createCourseForm.controls.price.setValue(res.price);
      this.createCourseForm.controls.description.setValue(res.description);
      this.createCourseForm.controls.thumbnail.setValue(res.thumbnail);
      this.createCourseForm.controls.video.setValue(res.video);
      this.selectedThumbnailFile = res.thumbnail;
      this.selectedPreviewFile = res.video;
    });
  }

  showFileManager(mediaType): void {
    const dialogRef = this.dialog.open(FileManagerComponent, {
      data: {
        mediaType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `, result); // Pizza!

      if (result.selectedMediaType === 'image') {
        this.selectedThumbnailFile = result.selectedMedia;
        this.createCourseForm.controls.thumbnail.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.createCourseForm.controls.video.setValue(result.selectedMedia);
      }
    });
  }

  updateCourse() {
    if (this.createCourseForm.valid === true) {
      console.log(this.createCourseForm.value);
      this.coursesService.createCourse(this.createCourseForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate([`courses/create-lesson/${res.slug}`]).then();
      });
    }
  }
}
