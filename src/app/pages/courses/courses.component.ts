import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../core/services/courses.service';
import {Store} from '@ngxs/store';
import {SetTitle} from "../../store/app-store/app.action";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCourses: any[];

  constructor(
    private coursesService: CoursesService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Courses'));
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.coursesService.getAllCourses().subscribe(res => {
      console.log(res);
      this.allCourses = res;
    });
  }
}
