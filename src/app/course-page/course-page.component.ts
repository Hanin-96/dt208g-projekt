import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {
  //Initierar till tom array från interface
  courseData: Course[] = [];
  faLink = faArrowUpRightFromSquare;

  constructor(private courseservice: CourseService) { }

  ngOnInit() {
    this.courseservice.getCourseData().subscribe(data => {
      this.courseData = data;
      this.courseData = this.courseData.slice(0, 9);
    })
  }

  //Hero img
  students1Img: string = "assets/img/CF017232.IIQ.p.jpg";
}
