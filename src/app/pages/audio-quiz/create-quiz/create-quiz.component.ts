import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {MatDialog} from '@angular/material/dialog';
import {QuizService} from '../../../core/quiz.service';
// import {FileManagerComponent} from "../../../shared/components/file-manager/file-manager.component";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createQuizForm: FormGroup;
  // selectedThumbnailFile: string;
  // quizDetails: any;
  // isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.createQuizForm = this.fb.group({
      title: ['', Validators.required],
      instruction: ['', Validators.required],
      duration: ['', Validators.required],
      endDate: ['', Validators.required],
      organisation: ['', Validators.required],
      organisationLogo: ['', Validators.required],
      startDate: ['', Validators.required],
      passCode: ['', Validators.required],
    });
    //      if (this.activatedRoute.snapshot.params.slug){
    //   this.getQuizDetails(this.activatedRoute.snapshot.params.slug);
    //   this.isEditing = true;
    // }
  }

  createQuiz(): void {
    console.log(this.createQuizForm);
    if (this.createQuizForm.valid === true) {
      console.log(this.createQuizForm.value);
      this.quizService.createQuiz(this.createQuizForm.value).subscribe(res => {
        console.log(res);
        // this.router.navigate([`quiz-details/:slug`]).then()
        this.router.navigate([`audio-quiz/quiz-details/${res.slug}`]).then();
      });
    }
  }

  // getQuizDetails(slug: string): void {
  //   this.quizService.getQuizDetails(slug).subscribe(res => {
  //     this.quizDetails = res;
  //     console.log(res);
  //     this.createQuizForm.controls.title.setValue(res.title);
  //     this.createQuizForm.controls.instruction.setValue(res.instruction);
  //     this.createQuizForm.controls.duration.setValue(res.duration);
  //     this.createQuizForm.controls.endDate.setValue(res.endDate);
  //     this.createQuizForm.controls.organisation.setValue(res.organisation);
  //     this.createQuizForm.controls.organisationLogo.setValue(res.organisationLogo);
  //     this.createQuizForm.controls.startDate.setValue(res.startDate);
  //     this.createQuizForm.controls.passCode.setValue(res.passCode);
  //     // this.selectedThumbnailFile = res.thumbnail;
  //   });
  // }

  // showFileManager(mediaType): void {
  //   const dialogRef = this.dialog.open(FileManagerComponent, {
  //     data: {
  //       mediaType
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: `, result); // Pizza!
  //
  //     if (result.selectedMediaType === 'image') {
  //       this.selectedThumbnailFile = result.selectedMedia;
  //       this.createCourseForm.controls.thumbnail.setValue(result.selectedMedia);
  //     }
  //
  //     if (result.selectedMediaType === 'video') {
  //       this.selectedPreviewFile = result.selectedMedia;
  //       this.createCourseForm.controls.video.setValue(result.selectedMedia);
  //     }
  //   });
  // }


}
