import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../core/services/courses.service';
import {Store} from '@ngxs/store';
import {SetTitle} from '../../store/app-store/app.action';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  allCourses: any[];
  next: string;
  prev: string;

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
      this.allCourses = res.results;
      this.next = res.next;
      this.prev = res.previous;
    });
  }

  searchAllCourses(value: string): void {
    if (value) {
      this.coursesService.searchAllCourses(value).subscribe(res => {
        console.log(res);
        this.allCourses = res.results;
        this.next = res.next;
        this.prev = res.previous;
      });
    } else {
      this.getAllCourses();
    }
  }


  navigate(direction: string): void {
    this.coursesService.navigateCourses(direction).subscribe(res => {
      console.log(res);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      this.allCourses = res.results;
      this.next = res.next;
      this.prev = res.previous;
    });
  }
}
