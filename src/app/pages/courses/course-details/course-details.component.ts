import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public courseDetails: any;
  public lessons: any;
  isPublished: boolean;
  descriptionLength = 500;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCourseDetails(this.activatedRoute.snapshot.params.slug);
  }

  getCourseDetails(slug: string): void {
    this.coursesService.getCourseDetails(slug).subscribe(res => {
      this.courseDetails = res;
      this.isPublished = res.isPublished;
      this.getCourseLessons(this.courseDetails.slug);
      console.log(res);
    });
  }

  getCourseLessons(slug: string): void {
    this.coursesService.getCourseLessons(slug).subscribe(res => {
      this.lessons = res;
    });
  }

   changeCourseStatus(isPublished: boolean): void {
      this.coursesService.changeCourseStatus(isPublished, this.activatedRoute.snapshot.params.slug).subscribe(res => {
        this.getCourseDetails(this.activatedRoute.snapshot.params.slug);
        if (res.isPublished) {
          this.toastr.success('Course published successfully');
        } else {
          this.toastr.success('Course unpublished successfully');
        }
      });
    }
}
