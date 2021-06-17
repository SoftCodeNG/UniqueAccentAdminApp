import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public courseDetails: any;
  public lessons: any;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCourseDetails(this.activatedRoute.snapshot.params.slug);
  }

  getCourseDetails(slug: string): void {
    this.coursesService.getCourseDetails(slug).subscribe(res => {
      this.courseDetails = res;
      this.getCourseLessons(this.courseDetails.slug);
      console.log(res)
    });
  }

  getCourseLessons(slug: string): void {
    this.coursesService.getCourseLessons(slug).subscribe(res => {
      this.lessons = res;
    });
  }
}
