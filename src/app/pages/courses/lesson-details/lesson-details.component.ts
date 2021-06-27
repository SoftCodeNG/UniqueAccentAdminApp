import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent implements OnInit {
  public lessonDetails: any;
  allComment: any[];

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getLessonDetails(this.activatedRoute.snapshot.params.slug);
  }

  getLessonDetails(slug: string): void {
    this.coursesService.getLessonDetails(slug).subscribe(res => {
      this.lessonDetails = res;
      this.getLessonComments(res.id)
    });
  }

  getLessonComments(id: any): void {
    this.coursesService.getLessonComments(id).subscribe(res => {
      console.log('List of all comment: ', res);
      this.allComment = res;
    });
  }

   replyComment(commentId, reply): void {
    console.log(commentId, reply);
    if (commentId && reply) {
      const payload = {
        commentId,
        userId: 1,
        comment: reply
      };
      this.coursesService.replyComment(payload).subscribe(res => {
        this.getLessonComments(1);
      });
    }
  }

  deleteLesson(): void {
    this.coursesService.deleteLesson(this.activatedRoute.snapshot.params.slug).subscribe(res => {
      this.toastr.success('Lesson deleted successfully');
      this.router.navigate([`/courses/course-details/${this.lessonDetails.courseSlug}`]).then();
    });
  }
}
