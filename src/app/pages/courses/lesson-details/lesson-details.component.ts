import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent implements OnInit {
  public lessonDetails: any;
  private activatedRoute: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getLessonDetails(this.activatedRoute.snapshot.params.slug);
  }

  getLessonDetails(slug: string): void {
    this.coursesService.getLessonDetails(slug).subscribe(res => {
      this.lessonDetails = res;
      this.getLessonDetails(this.lessonDetails.slug);
    });
  }
}
